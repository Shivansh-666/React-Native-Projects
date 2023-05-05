import React, {useEffect, useState} from 'react';
import {openDatabase} from 'react-native-sqlite-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  FlatList,
  Modal,
  Button,
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import taskStyle from '../Style/taskStyle';

const db = openDatabase({name: 'UserDatabase.db'});

const SQLStorage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [TaskName, setTaskName] = useState();
  const [taskList, setTaskList] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const dummyArr = [];

  // save data
  const saveTask = () => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO TODO (task, status) VALUES (?, false)',
        [TaskName],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            setTaskName('');
          } else {
            Alert.alert('Error', ' Failed to add Task');
          }
        },
        error => {
          console.log(error);
        },
      );
    });
  };

  // get data
  const getData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM TODO', [], (tx, results) => {
        const rows = results.rows;
        for (let i = 0; i < rows.length; i++) {
          dummyArr.push(rows.item(i));
          setTaskList(dummyArr);
        }
      });
    });
  };
  // connect store
  const connectStore = () => {
    const query =
      'CREATE TABLE IF NOT EXISTS TODO(id INTEGER PRIMARY KEY AUTOINCREMENT, task VARCHAR(20), status BOOLEAN )';
    db.transaction(txn => {
      txn.executeSql(
        query,
        [],
        (tx, res) => {
          console.log('Table created successfully');
          console.log('first', res.rows.length);
        },
        error => {
          console.log(error);
        },
      );
    });
  };

  function updateStatus(id, status) {
    const query = `UPDATE TODO SET status= ? WHERE id = ${id}`;
    db.transaction(tx => {
      tx.executeSql(
        query,
        [!status],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            console.log(results);
            setIsComplete(true);
          } else {
            Alert.alert('Error', ' Failed to add Task');
          }
        },
        error => {
          console.log(error);
        },
      );
    });
    setIsComplete(false);
  }

  useEffect(() => {
    getData();
  }, [modalVisible, isComplete]);

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
                item.item.status
                  ? {textDecorationLine: 'line-through', color: 'green'}
                  : {textDecorationLine: 'none'},
              ]}>
              {item.item.task}
            </Text>

            {/* underline over task when checked */}
            <TouchableOpacity
              onPress={() => {
                updateStatus(item.item.id, item.item.status);
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
            onChangeText={text => {
              setTaskName(text);
            }}
            placeholder="title"
          />
          <Pressable
            style={taskStyle.modalbutton}
            onPress={() => {
              saveTask(TaskName);
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
          connectStore();
        }}>
        <Text style={taskStyle.addTask}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SQLStorage;
