import {Linking, Alert, Platform} from 'react-native';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
export async function requestNotificationPermission() {
  try {
    let permission;
    if (Platform.OS === 'android') {
      permission = PERMISSIONS.ANDROID.POST_NOTIFICATIONS;
    } else {
      permission = PERMISSIONS.IOS.NOTIFICATIONS;
    }
    const status = await request(permission);
    if (status === RESULTS.GRANTED) {
      console.log('Notification permission granted');
    } else if (status === RESULTS.DENIED) {
      Alert.alert(
        'Permission required',
        'Please enable push notifications in the app settings to receive alerts.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Go to settings',
            onPress: () => Linking.openSettings(),
          },
        ],
        {cancelable: false},
      );
    } else {
      console.warn('Permission to receive push notifications denied');
    }
  } catch (err) {
    console.error(err);
  }
}
