import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  // Home style
  counterButtons: {
    marginEnd: 20,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#87ceeb',
  },
  touchableText: {
    color: '#fff',
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  mainContent: {
    backgroundColor: '#fffafa',
    flex: 1,
    justifyContent: 'space-between',
  },

  // text view (language)
  textView: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    zIndex: 20,
    //   flex: 1,
    backgroundColor: '#fffafa',
  },
  // text heading
  textHeading: {fontWeight: 'bold', fontSize: 30},

  //language text
  textLang: {
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
    color: 'black',
  },
  // switch style
  switchView: {
    margin: 0,
    padding: 0,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // button
  langButton: {
    backgroundColor: 'blue',
    padding: 10,
    width: '100%',
    marginTop: 10,
  },

  // ///////////////////////////////////////////////////////////////////////////////
  // menuScreen Style
  menuStyle: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    color: 'white',
  },
  inputCombo: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
  },
  updatedTextView: {
    margin: 10,
  },
  updatedText: {
    fontSize: 30,
    width: 400,
  },
  updatedTextHobby: {
    fontSize: 15,
    margin: 5,
  },
  fullName: {
    borderWidth: 1,
    margin: 20,
    width: 200,
  },
  hobby: {
    borderWidth: 1,
    width: 200,
  },
});
export default style;
