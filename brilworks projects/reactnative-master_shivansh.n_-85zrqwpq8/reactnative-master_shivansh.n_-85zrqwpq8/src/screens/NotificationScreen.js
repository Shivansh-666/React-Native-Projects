import React, {useEffect, useState} from 'react';

import {
  FlatList,
  Modal,
  Pressable,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import PushNotification from 'react-native-push-notification';
import '../assets/Audio/pikachu.mp3';
import taskStyle from '../Style/taskStyle';

const LocalNotificationScreen = () => {
  const dateTime = moment().format('LLL');
  const [id, setId] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [TaskName, setTaskName] = useState();
  const [taskList, setTaskList] = useState([]);
  const [listData, setListData] = useState([]);

  // set data
  const setData = async () => {
    taskList.push({id: id, task: TaskName, date: dateTime});
    await AsyncStorage.setItem('TASKS', JSON.stringify(taskList));
    setId(id + 1);
    setTaskName('');
  };

  // get data
  const getData = async () => {
    const name = await AsyncStorage.getItem('TASKS');

    setListData(JSON.parse(name));
    console.log(JSON.parse(name));
  };

  // use effect for get data and modal
  useEffect(() => {
    getData();
  }, [modalVisible]);
  return (
    <View style={{flex: 1}}>
      <View style={notiStyle.status}>
        <Text style={{fontSize: 20, color: 'white'}}>Reminders</Text>
      </View>

      {/* data show */}
      <FlatList
        data={listData}
        renderItem={item => (
          <TouchableOpacity
            onPress={() => {
              PushNotification.createChannel({
                channelId: 'my-reminder-channel', // unique channel id
                channelName: 'My Reminder  Channel',
                channelDescription: 'A channel to trigger reminders',
                // importance: 4,
              });

              PushNotification.localNotification({
                channelId: 'my-reminder-channel', // set the channel id
                title: item.item.task,
                message: 'Local notification',
                playSound: true,
                soundName: 'default',
              });
            }}>
            <View style={notiStyle.taskView}>
              <View>
                <Text style={notiStyle.taskText}>{item.item.task}</Text>
                <Text style={notiStyle.dateText}>{item.item.date}</Text>
              </View>
              <Image
                style={notiStyle.imgTaskStyle}
                source={require('../assets/codingDude.jpg')}
              />
            </View>
          </TouchableOpacity>
        )}
      />

      {/* modal */}
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={taskStyle.modalStyle}>
          <Image
            style={{width: 200, height: 200}}
            source={require('../assets/codingDude.jpg')}
          />
          <TextInput
            style={taskStyle.modalInput}
            placeholder="Reminder Name"
            value={TaskName}
            onChangeText={text => setTaskName(text)}
          />

          <Pressable
            style={taskStyle.modalbutton}
            onPress={() => {
              setTaskName('');
              setData();
              setModalVisible(!modalVisible);
            }}>
            <Text>Submit</Text>
          </Pressable>
        </View>
      </Modal>

      {/* modal open */}
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={taskStyle.addTask}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const notiStyle = StyleSheet.create({
  status: {
    alignItems: 'center',
    padding: 20,
    fontSize: 20,
    backgroundColor: '#42b49a',
  },
  taskView: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 7,
  },
  dateText: {
    fontSize: 20,
    color: 'grey',
  },
  imgTaskStyle: {
    width: 80,
    height: 80,
    padding: 10,
    borderRadius: 200,
  },
});
export default LocalNotificationScreen;
