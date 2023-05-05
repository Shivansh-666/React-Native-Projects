import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Animated} from 'react-native';

const boxSize = 50;
const animationDurationMin = 500;
const animationDurationMax = 1000;

// Box main body
const Box = ({x, y, onAnimationEnd}) => {
  const animation = useRef(new Animated.Value(0)).current;

  const handleAnimationEnd = () => {
    onAnimationEnd();
  };

  const animateBox = () => {
    // to get  random interval between 500 ms to 1000 ms
    const duration = Math.floor(
      Math.random() * (animationDurationMax - animationDurationMin + 1) +
        animationDurationMin,
    );
    Animated.timing(animation, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start(handleAnimationEnd);
  };

  useEffect(() => {
    animateBox();
  }, []);

  return (
    <TouchableOpacity
      style={[styles.box, {left: x, top: y}]}
      onPress={animateBox}>
      <Animated.View
        style={[styles.innerBox, {transform: [{scale: animation}]}]}
      />
    </TouchableOpacity>
  );
};

const Animation = () => {
  // initianl box position on top left
  const [boxPosition, setBoxPosition] = useState({x: 0, y: 0});

  // handlepress even box will fade animation
  const handleBoxPress = event => {
    const {locationX, locationY} = event.nativeEvent;

    setBoxPosition({x: locationX - boxSize / 2, y: locationY - boxSize / 2});
  };

  const handleBoxAnimationEnd = () => {
    setBoxPosition({x: 0, y: 0});
  };

  return (
    <View style={styles.container} onTouchEnd={handleBoxPress}>
      {/* using Box variable as an component to pass values calso visible box body */}
      <Box
        x={boxPosition.x}
        y={boxPosition.y}
        onAnimationEnd={handleBoxAnimationEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  box: {
    position: 'absolute',
    width: boxSize,
    height: boxSize,
    borderRadius: 0,
    color: 'black',
    backgroundColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBox: {
    width: boxSize * 0.8,
    height: boxSize * 0.8,
    borderRadius: 0,
    color: 'yellow',
    backgroundColor: 'red',
  },
});

export default Animation;
