import React from 'react';
import {observer} from 'mobx-react';

import counterStore from '../mobXStore/CounterStore';
import {Text, TouchableOpacity, View} from 'react-native';
import style from '../Styles/CounterStyle';

const Counter = observer(() => {
  const handleIncrement = () => {
    counterStore.increment();
    // will call increment() method in counterStore
  };

  const handleDecrement = () => {
    counterStore.decrement();
    // will call decrement() method in counterStore
  };

  return (
    <View style={style.mobxView}>
      <Text style={style.counterIndicater}>{counterStore.count}</Text>
      <TouchableOpacity style={style.mobxTouchable} onPress={handleIncrement}>
        <Text style={style.mobxText}>Increment +</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.mobxTouchable} onPress={handleDecrement}>
        <Text style={style.mobxText}>Decrement -</Text>
      </TouchableOpacity>
    </View>
  );
});

export default Counter;
