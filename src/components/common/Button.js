import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'steelblue',
    borderRadius: 3,
    marginTop: 7,
    paddingVertical: 11
  },
  title: {
    color: 'white',
    fontSize: 19,
    textAlign: 'center'
  }
});

export { Button };
