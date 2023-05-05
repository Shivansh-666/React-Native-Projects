import {StyleSheet} from 'react-native';

const modalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,

    shadowColor: '#000',
    elevation: 5,
  },
  modalTitle: {
    borderWidth: 1,
    margin: 10,
    fontSize: 20,
    width: 200,
  },
  modalDesc: {
    borderWidth: 1,
    margin: 10,
    fontSize: 20,
    width: 200,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
    // width: 200,
    padding: 20,
    marginRight: 3,
    elevation: 5,
    alignSelf: 'flex-end',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalSubmit: {
    color: 'white',
    padding: 10,
    alignSelf: 'center',
    fontSize: 20,
  },
  displayText: {
    padding: 20,
    color: 'blue',
  },
});

export default modalStyle;
