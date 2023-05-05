import {Dimensions, StyleSheet} from 'react-native';

const myScreenStyle = StyleSheet.create({
  inProgressBg: {
    padding: 20,
    paddingHorizontal: 30,
    elevation: 15,
    shadowColor: 'black',
    backgroundColor: 'white',
  },
  todoBody: {
    padding: 20,
    paddingHorizontal: 30,
    elevation: 15,
    shadowColor: 'black',
    backgroundColor: '#ffffff',
  },
  addDataStyle: {
    position: 'absolute',

    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    top: Dimensions.get('screen').height - 200,
    backgroundColor: 'pink',
    padding: 20,
    borderRadius: 20,
  },
  FloatingAddbtn: {
    color: 'green',
    fontSize: 20,
  },
});

export default myScreenStyle;
