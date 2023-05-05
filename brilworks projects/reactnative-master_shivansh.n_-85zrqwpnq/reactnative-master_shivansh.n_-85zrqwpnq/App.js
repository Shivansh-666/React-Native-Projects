import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import FlexBoxCalculator from './src/Component/CalculatorBody';
import HomeScreen from './src/Screen/HomeScreen';
import Navigate from './src/Navigation/Navigate';

function App(props) {
  return (
    <NavigationContainer>
      <Navigate />
    </NavigationContainer>
  );
}

export default App;
