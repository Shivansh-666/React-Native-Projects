import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import {MyHomeStack} from '../../App';
import style from '../Styles/CounterStyle';
import MyTabs from './BottmNavDem';

function HomeScreen(props) {
  // const nav = useNavigation();
  // console.log(nav);
  const name = 'Shivansh Nayak';

  return (
    <View style={style.mainContent}>
      {/* Buttons(Touchableopacity) for moving around screens */}
      <Image source={require('../Images/homeBanner.png')} />
      <View>
        <Text style={{fontSize: 25, color: '#17202A', margin: 15}}>
          Hello world welcome this is Home
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        {/* My profile Screen*/}
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('MyProfile', name);
          }}
          style={style.counterButtons}>
          <Text style={style.touchableText}> Profile</Text>
        </TouchableOpacity>

        {/* Scrollview demo Screen */}
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('ScrollView');
          }}
          style={style.counterButtons}>
          <Text style={style.touchableText}>ScrollView demo</Text>
        </TouchableOpacity>

        {/* Flatlist Screen*/}
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('FlatList');
          }}
          style={style.counterButtons}>
          <Text style={style.touchableText}>FlatList</Text>
        </TouchableOpacity>
      </View>

      {/* Section List Screen */}
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('SectionList');
        }}
        style={style.counterButtons}>
        <Text style={style.touchableText}>SectionList</Text>
      </TouchableOpacity>

      {/* login screen for formik */}
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Formik');
        }}
        style={style.counterButtons}>
        <Text style={style.touchableText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
export default HomeScreen;
