import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { Button, Error, Input } from '../components/common';

import * as authenticationActions from '../actions/authentication';

const AuthenticationForm = ({
  email,
  errorMessage,
  isLoading,
  navigation,
  password,
  setEmail,
  setPassword,
  signIn
}) => (
  <View style={styles.authenticationForm}>
    <Input onChangeText={setEmail} placeholder='Email' value={email} />
    <Input
      onChangeText={setPassword}
      placeholder='Password'
      secureTextEntry
      value={password}
    />
    {isLoading ? (
      <ActivityIndicator
        color='steelblue'
        size='large'
        style={styles.spinner}
      />
    ) : (
      <Button
        onPress={() =>
          signIn(email, password, () => navigation.navigate('EmployeeFlow'))
        }
        title='Sign In'
      />
    )}
    <Error message={errorMessage} />
  </View>
);

AuthenticationForm.navigationOptions = {
  cardStyle: {
    backgroundColor: '#fafafa'
  },
  title: 'Sign In'
};

const styles = StyleSheet.create({
  authenticationForm: {
    flex: 1,
    paddingHorizontal: 19,
    paddingTop: 27
  },
  spinner: {
    marginTop: 7
  }
});

const mapStateToProps = ({
  authentication: { email, errorMessage, isLoading, password }
}) => ({
  email,
  errorMessage,
  isLoading,
  password
});

export default connect(
  mapStateToProps,
  authenticationActions
)(AuthenticationForm);
