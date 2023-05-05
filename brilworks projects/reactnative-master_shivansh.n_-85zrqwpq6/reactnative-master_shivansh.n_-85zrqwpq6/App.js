import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigate from './src/navigation/navigate';
import {PushNotification} from 'react-native';

function App(props) {
  return (
    <NavigationContainer>
      <Navigate />
    </NavigationContainer>
  );
}

export default App;
