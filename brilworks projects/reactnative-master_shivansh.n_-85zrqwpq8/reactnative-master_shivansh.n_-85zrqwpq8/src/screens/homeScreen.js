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
      <TouchableOpacity
        onPress={() => navigation.navigate('firebase')}
        style={homeStyle.homeButtons}>
        <Text style={homeStyle.homeButtonText}>Firebase Todo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('local Notificataion')}
        style={homeStyle.homeButtons}>
        <Text style={homeStyle.homeButtonText}>Local Notification</Text>
      </TouchableOpacity>
    </View>
  );
}

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  homeButtons: {
    margin: 10,
    backgroundColor: '#AF8D4B',
  },
  homeButtonText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    elevation: 20,
    borderWidth: 1,
    borderColor: '#EDBB99',
    shadowColor: 'black',
  },
});
export default HomeScreen;
