import React, { useEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { email as mail } from 'react-native-communications';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';

import {
  clearEmployeeInputs,
  destroyEmployee,
  setEmployeeInput,
  storeEmployee,
  updateEmployee
} from '../actions/employee';

import { Button, Dropdown, Input } from '../components/common';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const EmployeeForm = ({
  clearEmployeeInputs,
  destroyEmployee,
  email,
  name,
  navigation,
  setEmployeeInput,
  shift,
  storeEmployee,
  updateEmployee
}) => {
  useEffect(() => {
    if (navigation.getParam('employee')) {
      const { email, name, shift } = navigation.getParam('employee');

      setEmployeeInput('email', email);
      setEmployeeInput('name', name);
      setEmployeeInput('shift', shift);
    }
  }, []);

  const onSubmit = navigation.getParam('employee')
    ? () =>
        updateEmployee(
          email,
          name,
          shift,
          navigation.getParam('employee').key,
          () => navigation.pop()
        )
    : () => storeEmployee(email, name, shift, () => navigation.pop());

  return (
    <View style={styles.employeeForm}>
      <NavigationEvents
        onWillFocus={() => {
          clearEmployeeInputs();
        }}
      />
      <Input
        onChangeText={value => setEmployeeInput('name', value)}
        placeholder='Name'
        value={name}
      />
      <Input
        onChangeText={value => setEmployeeInput('email', value)}
        placeholder='Email'
        value={email}
      />
      <Dropdown
        label='Shift'
        onValueChange={value => setEmployeeInput('shift', value)}
        selectedValue={shift}
        values={daysOfWeek}
      />
      <Button
        onPress={onSubmit}
        title={navigation.getParam('employee') ? 'Update' : 'Create'}
      />
      {navigation.getParam('employee') && (
        <>
          <Button
            onPress={() =>
              mail(
                [navigation.getParam('employee').email],
                null,
                null,
                'Shift',
                `Your shift is on ${navigation.getParam('employee').shift}.`
              )
            }
            title='Send Mail'
          />
          <Button
            onPress={() =>
              Alert.alert(
                'Fire',
                `Are you sure you want to fire ${
                  navigation.getParam('employee').name
                }?`,
                [
                  {
                    onPress: () =>
                      destroyEmployee(navigation.getParam('employee').key, () =>
                        navigation.navigate('EmployeesList')
                      ),
                    text: 'Yes'
                  },
                  {
                    text: 'No'
                  }
                ]
              )
            }
            title='Fire'
          />
        </>
      )}
    </View>
  );
};

EmployeeForm.navigationOptions = {
  cardStyle: {
    backgroundColor: '#fafafa'
  },
  title: 'Employee Form'
};

const styles = StyleSheet.create({
  employeeForm: {
    flex: 1,
    paddingHorizontal: 19,
    paddingTop: 27
  }
});

const mapStateToProps = ({ employee: { email, name, shift } }) => ({
  email,
  name,
  shift
});

export default connect(mapStateToProps, {
  clearEmployeeInputs,
  destroyEmployee,
  storeEmployee,
  setEmployeeInput,
  updateEmployee
})(EmployeeForm);
