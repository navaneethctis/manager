import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Error = ({ message }) => (
  <Text style={styles.errorMessage}>{message}</Text>
);

const styles = StyleSheet.create({
  errorMessage: {
    color: 'indianred',
    fontSize: 15,
    marginTop: 9
  }
});

export { Error };
