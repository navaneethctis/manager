import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Input = ({ onChangeText, placeholder, secureTextEntry, value }) => (
  <View style={styles.input}>
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.textInput}
      value={value}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    marginBottom: 21
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 19,
    paddingBottom: 7,
    paddingHorizontal: 0,
    paddingTop: 0
  }
});

export { Input };
