import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import AppNavigator from './src/navigators/AppNavigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <AppNavigator />
    </>
  );
};

export default App;
