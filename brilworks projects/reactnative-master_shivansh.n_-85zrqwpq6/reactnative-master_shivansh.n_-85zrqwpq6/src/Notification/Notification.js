import React from 'react';
import {View, Button} from 'react-native';
import PushNotification from 'react-native-push-notification';

const MyButton = () => {
  // Create a notification channel
  PushNotification.createChannel({
    channelId: 'my-channel', // unique channel id
    channelName: 'My Notification Channel',
    channelDescription: 'A channel to categorize my notifications',
    importance: 4,
  });

  // Request notification permissions
  PushNotification.requestPermissions(permissions => {
    if (permissions.alert) {
      console.log('Notification permission granted');
    } else {
      console.log('Notification permission denied');
    }
  });

  const handlePress = () => {
    // Show a local notification
    PushNotification.localNotification({
      channelId: 'my-channel', // set the channel id
      title: 'Hello world',
      message: 'See our new animation',
      playSound: true,
      soundName: 'default',
    });
  };

  return (
    <View>
      <Button title="Click me" onPress={handlePress} />
    </View>
  );
};

export default MyButton;
