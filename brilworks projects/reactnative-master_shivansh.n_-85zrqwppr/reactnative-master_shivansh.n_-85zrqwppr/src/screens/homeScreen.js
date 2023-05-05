import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function HomeScreen(props) {
  const navigation = useNavigation();
  return (
    <View style={homeStyle.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AsynChro');
        }}
        style={homeStyle.homeButtons}>
        <Text style={homeStyle.homeButtonText}>Async Storage</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={homeStyle.homeButtons}
        onPress={() => {
          navigation.navigate('sqlStore');
        }}>
        <Text style={homeStyle.homeButtonText}> Sql lite storage</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('realmStore');
        }}
        style={homeStyle.homeButtons}>
        <Text style={homeStyle.homeButtonText}> Realm storage</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Animation');
        }}
        style={homeStyle.homeButtons}>
        <Text style={homeStyle.homeButtonText}> Animations</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('lottie');
        }}
        style={homeStyle.homeButtons}>
        <Text style={homeStyle.homeButtonText}> Lottie Animations</Text>
      </TouchableOpacity>
    </View>
  );
}

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeButtons: {
    margin: 10,
    backgroundColor: 'black',
  },
  homeButtonText: {
    padding: 20,
    fontSize: 20,
    color: 'yellow',
  },
});
export default HomeScreen;
