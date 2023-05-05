import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from './Utils';

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={screenNames[0].name}
      screenOptions={{headerShown: true}}>
      {screenNames.map((screen, index) => {
        return (
          <Stack.Screen
            name={screen.name}
            component={screen.Component}
            key={index}
          />
        );
      })}
    </Stack.Navigator>
  );
}
