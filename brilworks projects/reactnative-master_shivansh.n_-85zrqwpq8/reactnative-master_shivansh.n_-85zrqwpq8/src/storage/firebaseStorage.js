import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import taskStyle from '../Style/taskStyle';
import {firebase} from '@react-native-firebase/database';
import database from '@react-native-firebase/database';

const itemsRef = database().ref('/data/');
// pushing data
const setData = database().ref('/users').push();
console.log('Auto generated key: ', setData.key);
setData.set({}).then(() => console.log('Data updated.'));

function FirebaseStorage({userId}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [TaskName, setTaskName] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  // add items
  function addItem(item) {
    const id = Math.random();
    firebase
      .app()
      .database('https://todo-app-44a9c-default-rtdb.firebaseio.com/')
      .ref('/data/')
      .push({
        id: id,
        text: item,
      })
      .then(() => console.log('Data updated.'));
  }
  // get items
  function getItem() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      const items = Object.values(data);
      setTaskList(items);
    });
  }

  const handelSubmit = () => {
    addItem(TaskName);
    setTaskName('');
  };
  useEffect(() => {
    getItem();
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={taskStyle.status}>
        <Text>TODO</Text>
        <Text>STATUS</Text>
      </View>

      {/* flatlist to store data */}
      <FlatList
        data={taskList}
        renderItem={item => (
          <View style={taskStyle.taskNameBody}>
            <Text
              style={[
                taskStyle.taskText,
                item.item.isComplete
                  ? {textDecorationLine: 'line-through', color: 'green'}
                  : {textDecorationLine: 'none'},
              ]}>
              {item.item.text}
            </Text>
            {/* underline over task when checked */}
            <TouchableOpacity
              onPress={() => {
                setIsComplete(!isComplete);
                item.item.isComplete = isComplete;
              }}>
              <MaterialCommunityIcons
                color="green"
                style={{padding: 10}}
                name="check-circle"
                size={20}
              />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* modal body for new data*/}
      <Modal animationType="fade" visible={modalVisible}>
        <View style={taskStyle.modalStyle}>
          <TextInput
            style={taskStyle.modalInput}
            onChangeText={text => setTaskName(text)}
            placeholder="title"
            value={TaskName}
          />
          <Pressable
            style={taskStyle.modalbutton}
            onPress={() => {
              // setData();
              handelSubmit();
              setModalVisible(!modalVisible);
            }}>
            <Text>Submit</Text>
          </Pressable>
        </View>
      </Modal>

      {/* Open modal */}
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
          setIsComplete(false);
        }}>
        <Text style={taskStyle.addTask}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FirebaseStorage;
