import React from 'react';
import {useTranslation} from 'react-i18next';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from './Utils';

//
import '../locales/index.js';

//navigation screens
export default function Navigation() {
  const {t, i18n} = useTranslation();

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
            options={{title: t('locale.homeHeading')}}
          />
        );
      })}
    </Stack.Navigator>
  );
}
