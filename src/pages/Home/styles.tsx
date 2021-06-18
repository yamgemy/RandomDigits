import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems:'center'
  },
  box: {
    height: 45,
    width: 45,
    borderWidth: 2,
    borderColor: 'black',
    margin:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
  },
  genBtn:{
    width: '55%',
    height: 30,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',
    elevation:3,
    borderRadius: 5
  },
  bottom:{
    position:'absolute',
    bottom:0,
    alignItems:'center',
    width: '100%'
  },
  modalContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#CC111111'
  },
  modalContent:{
    alignItems:'center',
    height: 400,
    width: 250,
    borderRadius: 10,
    elevation: 4,
    backgroundColor:'#FCF3CF',
  },
  digitsRow:{
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    flexDirection:'row'
  },
  header:{
    justifyContent:'flex-start',
    width:'100%',
    flexDirection:'row',
  },
  left:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
    height:30
  },
  right:{
    flex:8,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#BA4A00',
    flexDirection:'row',
  },
  closeBtn:{
    width: '100%',
    height: 30,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',
    elevation:3,
    overflow:'hidden'
  },
  scrollView:{
    flex:1, 
    width:'100%'
  }
});
