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
});
export default style;
