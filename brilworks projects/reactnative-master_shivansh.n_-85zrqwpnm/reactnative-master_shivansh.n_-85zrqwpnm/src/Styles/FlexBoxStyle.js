import {Dimensions, StyleSheet} from 'react-native';

const screen = Dimensions.get('window');

// Most rows have 4 buttons with a margin on either side
const buttonWidth = screen.width / 5 - 5 * 2;

const FlexBoxStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  computedValue: {
    color: 'white',
    fontSize: 40,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  operationBtn: {
    backgroundColor: '#D1A901',
  },
  btnBody: {
    backgroundColor: '#373735',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 100,
    height: buttonWidth,
  },
  btnText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
  },
});
export default FlexBoxStyle;
