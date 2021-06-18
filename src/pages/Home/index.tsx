import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    ScrollView
} from 'react-native';
import {generateDigitsAction} from '../../store/actions/digitsActions'
import {styles} from './styles'
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '../../store/index'

let digitLogs = []

const Home: React.FC = ()=> {
    const dispatch = useDispatch();
    const {digits} = useSelector((state: RootState)=>(
         state.digitsReducer
    ))
    const [logVisible, setLogVisible] = useState(false)

    const createRandomDigits: () => Array<number> = function() {
        let slots = []
        for (let i = 0; i < 3; i++ ){
            const n = Math.floor(Math.random() * (9 - 0 + 1) + 0);
            slots[i] = n
        }
        return slots
    }

    function replaceDigits(): void {
        dispatch(generateDigitsAction(createRandomDigits()))
    }  

    function onShowPressed(): void {
        setLogVisible(true)
    }

    function closeLogModal(): void {
        setLogVisible(false)
    }

    const renderDigitBox = (digit: number, index: number) : React.ReactElement<any> => {
        return (
            <View 
                style={styles.box} 
                key={digit+ '_'+ index}
                >
                <Text>{digit}</Text>
            </View>
        )
    }

    useEffect(()=>{
        replaceDigits()
    },[])

    useEffect(()=>{
        if (digits.length>0){
            digitLogs.push(digits)
        }
    },[digits])
    
    return (
        <View style={styles.container}>
            <View style={styles.digitsRow}>
            {digits.map((d, index)=>{
                return renderDigitBox(d, index)
            })}
            </View>
            <TouchableOpacity 
                activeOpacity={0.7}
                onPress={replaceDigits}
                style={styles.genBtn}>
                <Text>Generate</Text>
            </TouchableOpacity>
            <View style={styles.bottom}>
                <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={onShowPressed}
                    style={styles.genBtn}>
                    <Text>Show Log</Text>
                 </TouchableOpacity>
            </View>
            <Modal
                 transparent={true}
                visible={logVisible}
                onRequestClose={closeLogModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.header}>
                            <View style={styles.left}>
                                <Text>Tries</Text>
                            </View>
                            <View style={styles.right}>
                                <Text>Results</Text>                
                            </View>
                        </View>
                        <ScrollView style={styles.scrollView}>
                            {digitLogs.map((set, index)=>
                                <View style={styles.digitsRow} key={index}>
                                    <View style={styles.left}>
                                        <Text>{index+1}</Text>
                                    </View>
                                    <View style={styles.right}>
                                        {set.map((d, index)=>{
                                            return renderDigitBox(d, index)
                                        })}
                                    </View>
                                </View>
                            )}
                        </ScrollView>
                        <TouchableOpacity 
                            activeOpacity={0.7}
                            onPress={closeLogModal}
                            style={styles.closeBtn}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default Home;