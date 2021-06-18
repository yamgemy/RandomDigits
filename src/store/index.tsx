import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, combineReducers} from 'redux';
import { digitsReducer } from './reducers/digitsReducer';

export const rootReducer = combineReducers({
    digitsReducer
})

export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blackList: ['digitsReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(persistedReducer);

