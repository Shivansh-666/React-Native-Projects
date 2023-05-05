import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import homeStyle from '../Styles/homeScreenStyle';
import Navigate from '../Navigation/Navigate';
function HomeScreen(props) {
  return (
    <View style={{flex: 1}}>
      <Text style={homeStyle.homeUiContent}>Welcome to Home Screen</Text>
      <TouchableOpacity style={homeStyle.fontButton}>
        <Text
          onPress={() => props.navigation.navigate('fontScreen')}
          style={homeStyle.homeScreenButton}>
          Font Section
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={homeStyle.fontButton}>
        <Text
          onPress={() => props.navigation.navigate('allImages')}
          style={homeStyle.homeScreenButton}>
          Images with different resolutions
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={homeStyle.fontButton}>
        <Text
          onPress={() => props.navigation.navigate('allVideo')}
          style={homeStyle.homeScreenButton}>
          All Videos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={homeStyle.fontButton}>
        <Text
          onPress={() => props.navigation.navigate('allAudio')}
          style={homeStyle.homeScreenButton}>
          All Audio
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

// font change
// add activity indicator
// elevation (padding on buttons)
//  gradient
// simple icon under home screen
//
