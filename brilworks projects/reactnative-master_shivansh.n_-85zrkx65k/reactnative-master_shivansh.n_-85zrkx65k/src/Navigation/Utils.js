import HomeScreen from '../Screens/Home';
import MenuScreen from '../Screens/menu';
import '../locales/index.js';
import CounterRedux from '../Screens/counterRedux';

export const screenNames = [
  {
    name: 'Home',
    Component: HomeScreen,
  },
  {
    name: 'menu',
    Component: MenuScreen,
  },
];
