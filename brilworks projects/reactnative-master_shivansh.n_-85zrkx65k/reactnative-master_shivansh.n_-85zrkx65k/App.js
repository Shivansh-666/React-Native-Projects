import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigation from './src/Navigation/Navigation';
import {NameContext} from './src/Screens/Home';

export default function App() {
  const val = 'Context value';
  return (
    <NameContext.Provider value={val}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </NameContext.Provider>
  );
}
