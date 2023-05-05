import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {View, Text} from 'react-native';
import styles from './style';
import {asignee} from '../../list/assignee';

function DropdownComponent({handleValueChange}) {
  const [value, setValue] = useState(null);

  return (
    <View>
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
          handleValueChange(item.label);
        }}
      />
      <Text>{value}</Text>
    </View>
  );
}

export default DropdownComponent;
