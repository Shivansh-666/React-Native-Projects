import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import imageStyle from '../Styles/imageStyle';
import Cuteface from '../Assets/svg/cuteFace';
function AllImages(props) {
  return (
    <LinearGradient style={{flex: 1}} colors={['#B0F3F1', '#FFCFDF']}>
      <View style={imageStyle.imageBody}>
        <Image
          style={imageStyle.images}
          source={require('../Assets/Images/cartoonHouse.png')}
        />
        <Cuteface style={imageStyle.images} />
        <Image
          style={imageStyle.images}
          source={require('../Assets/Images/codingDude.jpg')}
        />
      </View>
    </LinearGradient>
  );
}

export default AllImages;
