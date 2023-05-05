import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const screen = Dimensions.get('window');

const buttonWidth = screen.width / 5 - 5 * 1;

const homeStyle = StyleSheet.create({
  homeUiContent: {
    fontSize: 30,
    margin: 20,
    textAlign: 'center',
    fontFamily: 'PTSansNarrow-Regular',
  },

  fontButton: {
    margin: 10,
    alignItems: 'center',
  },
  homeScreenButton: {
    color: '#FBFAF9',
    padding: 10,
    fontSize: 20,
    backgroundColor: '#FF9D00',
  },
});

export default homeStyle;
