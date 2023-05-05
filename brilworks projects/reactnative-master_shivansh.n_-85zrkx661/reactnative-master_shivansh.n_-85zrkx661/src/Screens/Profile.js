import React from 'react';
import {Image, Text, View} from 'react-native';
import style from '../Styles/CounterStyle';

function MyProfile(props) {
  return (
    // main part
    <View style={style.profile}>
      <Image
        source={require('../Images/profile.png')}
        style={{
          width: '100%',
        }}
      />
      {/* Body part */}
      <View style={style.ProfileContent}>
        <Text style={style.ProfileContentText}>Name: {props.route.params}</Text>
        <Text style={style.ProfileContentText}>Contact: +000 021 123 421</Text>
        <Text style={style.ProfileContentText}>React Native Developer</Text>
      </View>
      {/* Body part ends */}
    </View>
  );
}
export default MyProfile;
