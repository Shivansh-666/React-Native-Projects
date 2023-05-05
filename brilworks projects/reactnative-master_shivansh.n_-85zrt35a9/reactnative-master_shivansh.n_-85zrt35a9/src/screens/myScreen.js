import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  Button,
  Modal,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Alert,
  LogBox,
} from 'react-native';
import DropdownComponent from '../components/Dropdown/Dropdown';
import modalStyle from './modal/modalstyle';
import myScreenStyle from './myScreenStyle';
import {Dropdown} from 'react-native-element-dropdown';
import styles from '../components/Dropdown/style';
import {asignee} from '../list/assignee';

const MyScreen = () => {
  const [selectedData, setSelectedData] = useState([]); // progress
  const [selectedDoneData, setSelectedDoneData] = useState([]); // done
  //   todo
  const [remainingData, setRemainingData] = useState([
    // {title: '', descr: '', assignee: ''},
  ]);

  //   onTap tasks visible
  const [todoVisible, setToDoListVisible] = useState(false);
  const [inprogressVisible, setInProgressListVisible] = useState(false);
  const [doneVisible, setDoneListVisible] = useState(false);

  // task list array
  const [taskList, setTaskList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // dynamic title, description storing from modal
  const [title, setTitle] = useState();
  const [descr, setDescr] = useState();
  const [selectedAsignee, setAsignee] = useState();
  const [value, setValue] = useState();

  // modal visible = false
  const [modalVisible, setModalVisible] = useState(false);
  const [statusModalVisible, setStatusModalVisible] = useState(false);

  LogBox.ignoreAllLogs();
  // handlepress alert function
  const handlePress = item => {
    // setSelectedData([...selectedData, item]);
    // setRemainingData(remainingData.filter(i => i.title !== item.title));
    Alert.alert(
      `${item.title}`,
      `Task assigned to ${item.selectedAsignee}`,
      [
        {
          text: 'ToDo',
          onPress: () => {
            setSelectedData(selectedData.filter(i => i.id !== item.id));
            setSelectedDoneData(selectedDoneData.filter(i => i.id !== item.id));

            setRemainingData([...remainingData, item]);
            //   setSelectedDoneData([...selectedDoneData, item]);
          },
        },
        {
          text: 'In Progress',
          onPress: () => {
            setSelectedData([...selectedData, item]);
            //   setSelectedDoneData([...selectedDoneData, item]);
            setSelectedDoneData(selectedDoneData.filter(i => i.id !== item.id));

            setRemainingData(remainingData.filter(i => i.id !== item.id));
          },
        },
        {
          text: 'Done',
          onPress: () => {
            //   setSelectedData([...selectedData, item]);
            setSelectedDoneData([...selectedDoneData, item]);
            setRemainingData(remainingData.filter(i => i.id !== item.id));
            setSelectedData(selectedData.filter(i => i.id !== item.id));
          },
        },
      ],
      {cancelable: true},
    );
  };

  //  Assignee callback from child component
  const handleValueChange = a => {
    setAsignee(a);
  };

  // Function to add a new task
  const handleAdd = () => {
    var item = {
      id: (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1),
      title,
      descr,
      selectedAsignee,
    };

    setTaskList([...taskList, item]);
    setRemainingData([...remainingData, item]);
  };

  // render in progress items
  const renderInProgressItem = ({item}) => {
    return (
      <TouchableOpacity
        style={myScreenStyle.inProgressBg}
        onPress={() => handlePress(item)}>
        <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
          {item.title}
        </Text>
        <Text style={{fontSize: 20, color: 'black'}}>{item.descr}</Text>
      </TouchableOpacity>
    );
  };

  // render done items
  const renderDoneItem = ({item}) => {
    return (
      <TouchableOpacity
        style={myScreenStyle.inProgressBg}
        onPress={() => handlePress(item)}>
        <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
          {item.title}
        </Text>
        <Text style={{fontSize: 20, color: 'black'}}>{item.descr}</Text>
      </TouchableOpacity>
    );
  };

  // render todo item
  const renderToDoItem = ({item}) => {
    return (
      <TouchableOpacity
        style={myScreenStyle.todoBody}
        onPress={() => {
          handlePress(item);
          //   console.log(item);
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>{item.title}</Text>
        <Text style={{fontSize: 20}}>{item.descr}</Text>
      </TouchableOpacity>
    );
  };

  // render status of an item
  const renderStatusItem = ({item}) => {
    return (
      <ScrollView>
        <TouchableOpacity
          style={[myScreenStyle.todoBody, {backgroundColor: 'pink', margin: 3}]}
          onPress={() => {
            Alert.alert(item.selectedAsignee, `${item.title} \n\t `);
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>{item.title}</Text>
          <Text style={{fontSize: 20}}>{item.descr}</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  // dropdown menu
  return (
    <View>
      <ScrollView>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={asignee}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            setValue(item.value);
            setFilteredData(
              taskList.filter(i => i.selectedAsignee == item.label),
            );

            setStatusModalVisible(true);
          }}
        />
        {/* Done main body */}
        <TouchableOpacity
          style={{marginHorizontal: 20}}
          onPress={() => setDoneListVisible(!doneVisible)}>
          <Text style={{fontSize: 20, padding: 10, backgroundColor: 'green'}}>
            Done:
          </Text>
          {doneVisible && (
            <FlatList
              data={selectedDoneData}
              renderItem={renderDoneItem}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </TouchableOpacity>
        {/* In progress main body */}
        <TouchableOpacity
          style={{margin: 20}}
          onPress={() => setInProgressListVisible(!inprogressVisible)}>
          <Text style={{fontSize: 20, padding: 10, backgroundColor: 'pink'}}>
            In Progress:
          </Text>
          {inprogressVisible && (
            <FlatList
              data={selectedData}
              renderItem={renderInProgressItem}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </TouchableOpacity>
        {/*  Todo main body */}
        <TouchableOpacity
          style={{margin: 20}}
          onPress={() => setToDoListVisible(!todoVisible)}>
          <Text style={{backgroundColor: 'grey', fontSize: 20, padding: 10}}>
            To Do:
          </Text>
          {todoVisible && (
            <FlatList
              data={remainingData}
              renderItem={renderToDoItem}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </TouchableOpacity>

        {/* modal body for new data*/}
        <Modal animationType="fade" visible={modalVisible}>
          <View style={modalStyle.centeredView}>
            <View style={modalStyle.modalView}>
              <TextInput
                style={modalStyle.modalTitle}
                onChangeText={text => setTitle(text)}
                placeholder="title"
                value={title}
              />
              <TextInput
                style={modalStyle.modalDesc}
                onChangeText={text => setDescr(text)}
                placeholder="Description"
              />
              <DropdownComponent handleValueChange={handleValueChange} />
              <Pressable
                style={[modalStyle.button, modalStyle.buttonClose]}
                onPress={event => {
                  setModalVisible(!modalVisible);
                  handleAdd();
                }}>
                <Text style={modalStyle.modalSubmit}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/* modal body for assignee filter */}
        <Modal animationType="fade" visible={statusModalVisible}>
          <FlatList
            data={filteredData}
            renderItem={renderStatusItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <Pressable
            style={[modalStyle.button, modalStyle.buttonClose]}
            onPress={event => {
              setStatusModalVisible(!statusModalVisible);
            }}>
            <Text style={modalStyle.modalSubmit}>Close</Text>
          </Pressable>
        </Modal>
      </ScrollView>
      {/* Open modal */}
      <TouchableOpacity
        style={myScreenStyle.addDataStyle}
        onPress={() => {
          //   handleAdd();
          setModalVisible(true);
        }}>
        <Text style={myScreenStyle.FloatingAddbtn}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyScreen;
