import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';

const Dropdown = ({ label, onValueChange, selectedValue, values }) => (
  <View style={styles.dropdown}>
    <Text style={styles.label}>{label}</Text>
    <Picker
      mode='dropdown'
      onValueChange={onValueChange}
      selectedValue={selectedValue}
      style={styles.picker}
    >
      {values.map(value => (
        <Picker.Item key={value} label={value} value={value} />
      ))}
    </Picker>
  </View>
);

const styles = StyleSheet.create({
  dropdown: {
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginBottom: 21
  },
  label: {
    color: 'gray',
    fontSize: 19,
    marginRight: 17
  },
  picker: {
    flexGrow: 1
  }
});

export { Dropdown };
