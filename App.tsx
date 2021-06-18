import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Provider} from 'react-redux';
import Home from './src/pages/Home/index';
import {store} from './src/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={'transparent'}
      />
      <SafeAreaProvider>
        <Home/>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App
