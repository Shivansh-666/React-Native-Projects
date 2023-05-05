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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFEFE',
  },
  // ScrollView style
  ScrollBody: {
    flex: 1,
    backgroundColor: '#17202A',
  },
  ScrollViewText: {
    color: '#D0D3D4',
    fontSize: 30,
  },
  // MyProfile Style
  profile: {
    backgroundColor: '#143F3F',
    flex: 1,
  },
  ProfileContent: {
    // justifyContent: 'left',
    // alignItems: 'left',
  },
  ProfileContentText: {
    color: '#F2EF03',
    fontSize: 20,
    textTransform: 'uppercase',
    padding: 7,
  },
  // Section list style
  SectionMain: {
    flex: 1,
  },
  SectionListItem: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: '#FCF3CF',
  },
  SectionListTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#F2EF03',
  },
  // header title style
  HeaderStyleBackgroud: {
    backgroundColor: 'red',
  },
  HeaderTitleStyle: {
    fontWeight: 'bold',
  },

  // Formik styles
  mainLoginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  loginHeading: {
    fontSize: 26,
    borderRadius: 20,
    width: '100%',
    color: '#ffffff',
    marginBottom: 20,
  },

  loginContainer: {
    padding: 20,
    borderTopLeftRadius: 20,
    elevation: 10,
    opacity: 0.8,
  },
  loginInputWrapper: {
    marginBottom: 20,
  },

  loginInputField: {
    borderColor: '#16213E',
    borderWidth: 1,
    color: 'black',
    fontSize: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
  },
  loginButton: {
    justifyContent: 'center',
    borderRadius: 15,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    borderRadius: 15,
    fontWeight: 800,
  },
  // Formik props Errormsg
  errorMsg: {
    color: 'red',

    fontSize: 12,
  },
});
export default style;
