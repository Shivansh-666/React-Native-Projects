import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenName} from './utils';

function Navigate() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={screenName[0].name}
      screenOptions={{headerShown: true}}>
      {screenName.map((screen, index) => {
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

export default Navigate;
