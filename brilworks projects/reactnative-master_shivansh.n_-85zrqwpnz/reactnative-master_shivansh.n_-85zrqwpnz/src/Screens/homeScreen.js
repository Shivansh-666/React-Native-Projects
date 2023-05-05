import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import useCounter from './counter';
const HomeScreen = () => {
  const [count, increment, decrement] = useCounter(0, 2);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{alignSelf: 'center'}}>{count}</Text>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <TouchableOpacity
          style={{backgroundColor: 'cyan', padding: 10, margin: 10}}
          onPress={increment}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'cyan', padding: 10, margin: 10}}
          onPress={decrement}>
          <Text>Decrement </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
