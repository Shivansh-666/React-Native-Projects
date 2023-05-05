import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MyTabs from './src/Screens/BottmNavDem';
import Navigation from './src/Navigation/Navigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export function MyHomeStack() {
  return <Navigation />;
}
