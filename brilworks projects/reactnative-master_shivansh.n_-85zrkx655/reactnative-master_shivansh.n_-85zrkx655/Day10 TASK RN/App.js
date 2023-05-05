import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import HomeScreen from './src/Screens/Home';
import MyProfile from './src/Screens/Profile';
import Scroll_demo from './src/Screens/ScrollViewdem';
import Flatlistdemo from './src/Screens/Flatlistdemo';
import SectionListdem from './src/Screens/SectionListDemo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome to home screen',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ScrollView"
          component={Scroll_demo}
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="FlatList"
          component={Flatlistdemo}
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="SectionList"
          component={SectionListdem}
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
