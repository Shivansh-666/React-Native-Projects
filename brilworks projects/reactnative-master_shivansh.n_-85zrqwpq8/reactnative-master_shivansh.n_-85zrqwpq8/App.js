import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigate from './src/navigation/navigate';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';

import {requestNotificationPermission} from './src/Notification/notificationPermission';

function App(props) {
  useEffect(() => {
    messaging()
      .requestPermission(true)
      .then(() => {
        console.log('Permission granted');
      })
      .catch(error => {
        console.log('Permission denied', error);
      });
    // Handle incoming notifications
    messaging().onMessage(remoteMessage => {
      console.log('Received foreground message', remoteMessage);
      // Display notification
      PushNotification.localNotification({
        title: remoteMessage.notification.title,
        message: remoteMessage.notification.body,
        channelId: 'default',
      });
    });
    requestNotificationPermission();
  });
  return (
    <NavigationContainer>
      <Navigate />
    </NavigationContainer>
  );
}

export default App;
