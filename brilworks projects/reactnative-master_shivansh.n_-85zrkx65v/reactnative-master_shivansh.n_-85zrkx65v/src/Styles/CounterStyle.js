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
  homeTextView: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    zIndex: 20,
    //   flex: 1,
    backgroundColor: '#fffafa',
  },
  // text heading
  homeTextHeading: {fontWeight: 'bold', fontSize: 30},

  //language text
  homeTextLang: {
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
    color: 'black',
  },
  // switch style
  homeSwitchView: {
    margin: 0,
    padding: 0,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // button
  homeLangBtn: {
    backgroundColor: 'blue',
    padding: 10,
    width: '100%',
    marginTop: 10,
  },

  // ///////////////////////////////////////////////////////////////////////////////
  // menuScreen Style
  menuMainWrap: {
    flex: 1,
  },
  menuStyle: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    color: 'white',
  },
  menuInputCombo: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
  },
  menuUpdatedTextView: {
    margin: 10,
  },
  menuUpdatedText: {
    fontSize: 30,
    width: 400,
  },
  menuUpdatedTextHobby: {
    fontSize: 15,
    margin: 5,
  },
  menuFullName: {
    borderWidth: 1,
    margin: 20,
    width: 200,
  },
  menuHobby: {
    borderWidth: 1,
    width: 200,
  },
  //////////////////////////////////////////////////////////
  // Redux counter style
  reduxView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reduxTouchable: {
    backgroundColor: '#F17153',
    padding: 5,
    borderRadius: 12,
  },
  reduxText: {
    color: 'white',
    padding: 10,
  },
  ///////////////////////////////////////////////
  // mobX style
  mobxView: {
    flex: 1,
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D6EAF8',
  },
  counterIndicater: {
    color: '#1B4F72',
  },
  mobxTouchableLink: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobxLinkText: {
    backgroundColor: '#11EBF3',
    padding: 10,
    borderRadius: 10,
  },
  mobxTouchable: {
    backgroundColor: '#2980B9',
    padding: 5,
    borderRadius: 12,
    margin: 20,
  },
  mobxText: {
    color: 'white',
    padding: 10,
  },
});
export default style;
