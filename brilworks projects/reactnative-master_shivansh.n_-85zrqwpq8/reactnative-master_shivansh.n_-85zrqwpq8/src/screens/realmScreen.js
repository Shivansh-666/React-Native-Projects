/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import taskStyle from '../Style/taskStyle';
import Realm from 'realm';
import realm, {getAllTasks, addTasks} from '../storage/realmStore';
const RealmStorageScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [TaskName, setTaskName] = useState('');
  const [taskList, setTaskList] = useState(getAllTasks());
  const [id, setId] = useState([]);

  //   render item
  const renderItem = ({item, index}) => {
    const isSelected = id.includes(item.id);
    return (
      // render view
      <View style={taskStyle.taskNameBody}>
        <View>
          <Text
            style={[
              taskStyle.taskText,
              isSelected
                ? {color: 'green', textDecorationLine: 'line-through'}
                : {color: 'gray', textDecorationLine: 'none'},
            ]}>
            {item.task}
          </Text>
        </View>
        {/* status updater */}
        <TouchableOpacity
          onPress={() => {
            const newId = isSelected
              ? id.filter(id => id !== item.id)
              : [...id, item.id];
            setId(newId);
          }}>
          {isSelected ? (
            <MaterialCommunityIcons
              color="green"
              style={{padding: 10}}
              name="check-circle"
              size={20}
            />
          ) : (
            <MaterialCommunityIcons
              color="green"
              style={{padding: 10}}
              name="check-circle"
              size={20}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={taskStyle.status}>
        <View>
          <Text>ToDo</Text>
        </View>
        <View>
          <Text>Complete</Text>
        </View>
      </View>

      {/* modal  */}
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={taskStyle.modalStyle}>
          <TextInput
            style={taskStyle.modalInput}
            placeholder="Task"
            value={TaskName}
            onChangeText={text => setTaskName(text)}
          />

          <Pressable
            style={taskStyle.modalbutton}
            onPress={() => {
              addTasks(TaskName);
              setTaskName('');
              setModalVisible(!modalVisible);
            }}>
            <Text>Submit</Text>
          </Pressable>
        </View>
      </Modal>

      {/* tasks */}

      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={userList => userList.id}
        scrollEnabled
      />

      {/* Open modal */}
      <TouchableOpacity
        style={{}}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={taskStyle.addTask}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RealmStorageScreen;
