import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import FlexBoxStyle from '../Styles/FlexBoxStyle';

// const computedValue = 0;

const FlexBoxCalculator = () => {
  // State variable for storing operations and values
  const [calculatorData, setCalculatorData] = useState({
    display: '',
    firstNum: '',
    secondNum: '',
    operator: '',
  });

  // Clear operation
  const clear = () => {
    setCalculatorData({
      display: '',
      firstNum: '',
      secondNum: '',
      operator: '',
    });
  };

  const BackSpace = calcData => {
    let updatedData = calcData.slice(0, -1);
    console.log(updatedData);
    setCalculatorData({...calculatorData, display: updatedData});
  };

  // Calculator Operation
  const Calculate = () => {
    let data = eval(calculatorData.display);
    setCalculatorData({...calculatorData, display: data});
  };

  // number will be shown on a display
  const addNumber = numberFromUser => {
    setCalculatorData({
      ...calculatorData,
      display: calculatorData.display + numberFromUser,
    });
  };

  // operator will be shown on a screen
  const operatorSymbol = operatorSymbol => {
    setCalculatorData({
      ...calculatorData,
      display: calculatorData.display + operatorSymbol,
      operator: operatorSymbol,
    });
  };

  return (
    <View style={FlexBoxStyle.container}>
      <Text style={FlexBoxStyle.computedValue}>{calculatorData.display}</Text>

      {/* 1ST ROW */}
      <View style={FlexBoxStyle.row}>
        <TouchableOpacity
          style={[FlexBoxStyle.btnBody, FlexBoxStyle.operationBtn]}
          onPress={() => clear()}>
          <Text style={FlexBoxStyle.btnText}>C</Text>
        </TouchableOpacity>
        {/* BackSpace */}
        <TouchableOpacity
          style={[FlexBoxStyle.btnBody, FlexBoxStyle.operationBtn]}
          onPress={() => BackSpace(calculatorData.display)}>
          <Text style={FlexBoxStyle.btnText}>⌫</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[FlexBoxStyle.btnBody, FlexBoxStyle.operationBtn]}
          onPress={() => operatorSymbol('/')}>
          <Text style={FlexBoxStyle.btnText}>/</Text>
        </TouchableOpacity>
      </View>

      {/* 2nd ROW */}
      <View style={FlexBoxStyle.row}>
        <TouchableOpacity
          style={FlexBoxStyle.btnBody}
          onPress={() => addNumber('1')}>
          <Text style={FlexBoxStyle.btnText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={FlexBoxStyle.btnBody}
          onPress={() => addNumber('2')}>
          <Text style={FlexBoxStyle.btnText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={FlexBoxStyle.btnBody}
          onPress={() => addNumber('3')}>
          <Text style={FlexBoxStyle.btnText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[FlexBoxStyle.btnBody, FlexBoxStyle.operationBtn]}
          onPress={() => operatorSymbol('+')}>
          <Text style={FlexBoxStyle.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* 3RD ROW */}
      <View style={FlexBoxStyle.row}>
        <TouchableOpacity
          style={FlexBoxStyle.btnBody}
          onPress={() => addNumber('4')}>
          <Text style={FlexBoxStyle.btnText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={FlexBoxStyle.btnBody}
          onPress={() => addNumber('5')}>
          <Text style={FlexBoxStyle.btnText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={FlexBoxStyle.btnBody}
          onPress={() => addNumber('6')}>
          <Text style={FlexBoxStyle.btnText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[FlexBoxStyle.btnBody, FlexBoxStyle.operationBtn]}
          onPress={() => operatorSymbol('-')}>
          <Text style={FlexBoxStyle.btnText}>-</Text>
        </TouchableOpacity>
      </View>

      {/* 4TH ROW */}
      <View style={FlexBoxStyle.row}>
        <TouchableOpacity
          style={FlexBoxStyle.btnBody}
          onPress={() => addNumber('7')}>
          <Text style={FlexBoxStyle.btnText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={FlexBoxStyle.btnBody}
          onPress={() => addNumber('8')}>
          <Text style={FlexBoxStyle.btnText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={FlexBoxStyle.btnBody}
          onPress={() => addNumber('9')}>
          <Text style={FlexBoxStyle.btnText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[FlexBoxStyle.btnBody, FlexBoxStyle.operationBtn]}
          onPress={() => operatorSymbol('*')}>
          <Text style={FlexBoxStyle.btnText}>X</Text>
        </TouchableOpacity>
      </View>

      {/* 5TH ROW */}
      <View style={FlexBoxStyle.row}>
        <TouchableOpacity
          style={FlexBoxStyle.btnBody}
          onPress={() => addNumber('0')}>
          <Text style={FlexBoxStyle.btnText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={FlexBoxStyle.btnBody}
          onPress={() => addNumber('.')}>
          <Text style={FlexBoxStyle.btnText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[FlexBoxStyle.btnBody, FlexBoxStyle.operationBtn]}
          onPress={() => addNumber('%')}>
          <Text style={FlexBoxStyle.btnText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[FlexBoxStyle.btnBody, FlexBoxStyle.operationBtn]}
          onPress={() => {
            Calculate();
          }}>
          <Text style={FlexBoxStyle.btnText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlexBoxCalculator;
