import HomeScreen from '../Screen/HomeScreen';
import AllFontsScreen from '../Screen/allFontsScreen';
import AllImages from '../Screen/allImages';
import AllVideo from '../Screen/allVideo';
import AllAudio from '../Screen/allAudio';

export const screenName = [
  {
    name: 'HomeScreen',
    Component: HomeScreen,
  },
  {
    name: 'fontScreen',
    Component: AllFontsScreen,
  },
  {
    name: 'allImages',
    Component: AllImages,
  },
  {
    name: 'allVideo',
    Component: AllVideo,
  },
  {
    name: 'allAudio',
    Component: AllAudio,
  },
];
