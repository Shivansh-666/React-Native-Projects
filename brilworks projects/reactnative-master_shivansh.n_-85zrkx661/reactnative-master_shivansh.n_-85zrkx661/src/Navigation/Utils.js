import Flatlistdemo from '../Screens/Flatlistdemo';
import MyReactNativeForm from '../Screens/FormikDemo';
import HomeScreen from '../Screens/Home';
import MyProfile from '../Screens/Profile';
import Scroll_demo from '../Screens/ScrollViewdem';
import SectionListdem from '../Screens/SectionListDemo';

export const screenNames = [
  {
    name: 'Formik',
    Component: MyReactNativeForm,
  },
  {
    name: 'ScrollView',
    Component: Scroll_demo,
  },
  {
    name: 'MyProfile',
    Component: MyProfile,
  },
  {
    name: 'FlatList',
    Component: Flatlistdemo,
  },
  {
    name: 'SectionList',
    Component: SectionListdem,
  },
  {
    name: 'Home',
    Component: HomeScreen,
  },
];
