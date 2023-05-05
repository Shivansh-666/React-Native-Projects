import React, {useRef, useEffect} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

export default function LottieAnimation() {
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        loop
        style={{
          width: 200,
          height: 200,
        }}
        source={require('../assets/error404.json')}
      />
      <LottieView
        autoPlay
        loop
        speed={-1}
        style={{
          width: 100,
          height: 200,
        }}
        source={require('../assets/meditation.json')}
      />
      <LottieView
        autoPlay
        loop
        speed={-2}
        style={{
          width: 200,
          height: 200,
        }}
        source={require('../assets/bossBird.json')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
