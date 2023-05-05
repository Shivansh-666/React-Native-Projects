import React, { useState, useEffect } from "react";
import {
	FlatList,
	Modal,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	StatusBar,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";

function TodoScreen() {
	const [id, setId] = useState(0);
	const [modalVisible, setModalVisible] = useState(false);
	const [TaskName, setTaskName] = useState();
	const [taskList, setTaskList] = useState([]);
	const [listData, setListData] = useState([]);
	const [isComplete, setIsComplete] = useState(false);

	const setData = async () => {
		taskList.push({ id: id, task: TaskName, isComplete: isComplete });
		await AsyncStorage.setItem("TASKS", JSON.stringify(taskList));
		setId(id + 1);
		setTaskName("");
	};

	const getData = async () => {
		const name = await AsyncStorage.getItem("TASKS");

		setListData(JSON.parse(name));
		console.log(JSON.parse(name));
	};

	useEffect(() => {
		getData();
	}, [modalVisible]);

	return (
		<View style={{ flex: 1 }}>
			<View style={taskStyle.status}>
				<Text>TODO</Text>
				<Text>STATUS</Text>
			</View>

			{/* flatlist to store data */}
			<FlatList
				data={listData}
				renderItem={(item) => (
					<View style={taskStyle.taskNameBody}>
						<Text
							style={[
								taskStyle.taskText,
								item.item.isComplete
									? { textDecorationLine: "line-through", color: "green" }
									: { textDecorationLine: "none" },
							]}
						>
							{item.item.task}
						</Text>
						{/* underline over task when checked */}
						<TouchableOpacity
							onPress={() => {
								setIsComplete(!isComplete);
								item.item.isComplete = isComplete;
							}}
						>
							<Ionicons
								name="md-checkmark-circle"
								color="green"
								style={{ padding: 10 }}
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
						onChangeText={(text) => setTaskName(text)}
						placeholder="title"
						value={TaskName}
					/>
					<Pressable
						style={taskStyle.modalbutton}
						onPress={() => {
							setData();
							setModalVisible(!modalVisible);
						}}
					>
						<Text>Submit</Text>
					</Pressable>
				</View>
			</Modal>

			{/* Open modal */}
			<TouchableOpacity
				onPress={() => {
					setModalVisible(true);
					setIsComplete(false);
				}}
			>
				<Text style={taskStyle.addTask}>+</Text>
			</TouchableOpacity>
		</View>
	);
}

const taskStyle = StyleSheet.create({
	status: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 10,
		marginTop: StatusBar.currentHeight,
	},

	taskNameBody: {
		margin: 10,
		borderRadius: 10,
		borderWidth: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	taskText: {
		padding: 10,
		color: "grey",
	},
	addTask: {
		fontSize: 30,
		alignSelf: "center",
		color: "red",
		padding: 10,
		backgroundColor: "black",
	},
	modalStyle: {
		flex: 1,
		justifyContent: "center",
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 50,

		shadowColor: "#000",
		elevation: 5,
	},
	modalInput: {
		borderWidth: 1,
		margin: 10,
		fontSize: 20,
		width: 200,
	},
	modalbutton: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		justifyContent: "center",
	},
});

export default TodoScreen;
