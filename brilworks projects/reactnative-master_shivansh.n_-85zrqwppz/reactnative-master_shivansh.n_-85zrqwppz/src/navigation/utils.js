import HomeScreen from '../screens/homeScreen';
import AsyncStore from '../storage/asyncStorage';
import RealmStorageScreen from '../screens/realmScreen';
import SQLStorage from '../storage/sqlite';
import Animation from '../component/animated';
import LottieAnimation from '../component/lottieAnimation';
import FirebaseStorage from '../storage/firebaseStorage';
import LocalNotificationScreen from '../screens/NotificationScreen';
import GitApi from '../screens/gitApi';
import UserProfile from '../screens/userProfile';

export const screenName = [
  {
    name: 'Home',
    Component: HomeScreen,
  },
  {
    name: 'AsynChro',
    Component: AsyncStore,
  },
  {
    name: 'sqlStore',
    Component: SQLStorage,
  },
  {
    name: 'realmStore',
    Component: RealmStorageScreen,
  },
  {
    name: 'Animation',
    Component: Animation,
  },
  {
    name: 'lottie',
    Component: LottieAnimation,
  },
  {
    name: 'firebase',
    Component: FirebaseStorage,
  },
  {
    name: 'local Notificataion',
    Component: LocalNotificationScreen,
  },
  {
    name: 'gitapi',
    Component: GitApi,
  },
  {
    name: 'userProfile',
    Component: UserProfile,
  },
];
