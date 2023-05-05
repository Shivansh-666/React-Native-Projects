import React, {useState} from 'react';
import {SectionList, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../Styles/CounterStyle';
function SectionListdem() {
  const Mydata = [
    {
      title: 'Windows versions',
      data: [11, 12, 13, 10],
    },
    {
      title: 'Iphone versions',
      data: [11, 12, 13, 10],
    },
    {
      title: 'A',
      data: ['Alex', 'Andrew', 'Alision'],
    },
    {
      title: 'Chrome Versions',
      data: [11, 12, 13, 10],
    },
    {
      title: 'Edge versions',
      data: [11, 12, 13, 10],
    },
  ];

  return (
    <View style={styles.SectionMain}>
      <SectionList
        sections={Mydata}
        // Section Items
        renderItem={({item}) => (
          <Text style={styles.SectionListItem}>{item}</Text>
        )}
        //Section title
        renderSectionHeader={({section}) => (
          <Text style={styles.SectionListTitle}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default SectionListdem;
