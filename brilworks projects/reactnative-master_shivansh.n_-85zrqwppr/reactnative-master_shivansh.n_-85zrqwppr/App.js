import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Navigate from './src/navigation/navigate';

function App(props) {
  return (
    <NavigationContainer>
      <Navigate />
    </NavigationContainer>
  );
}

export default App;
