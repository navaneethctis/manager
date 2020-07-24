import _ from 'lodash';
import React, { useEffect } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';

import { setEmployees } from '../actions/employee';

const EmployeesList = ({ employees, navigation, setEmployees }) => {
  useEffect(() => {
    setEmployees();
  }, []);

  const employeeItemStyle = (item, index) =>
    !index
      ? [styles.employeeItem, styles.firstEmployeeItem]
      : item === employees[employees.length - 1]
      ? [styles.employeeItem, styles.lastEmployeeItem]
      : styles.employeeItem;

  return (
    <View style={styles.employeesList}>
      <FlatList
        data={employees}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('EmployeeForm', { employee: item })
            }
            style={employeeItemStyle(item, index)}
          >
            <Text style={styles.employeeName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

EmployeesList.navigationOptions = ({ navigation }) => ({
  cardStyle: {
    backgroundColor: '#fafafa'
  },
  headerRight: () => (
    <View style={styles.headerRight}>
      <Button
        color='steelblue'
        onPress={() => navigation.navigate('EmployeeForm')}
        title='Add'
      />
    </View>
  ),
  title: 'Employees'
});

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 11
  },
  employeesList: {
    flex: 1,
    paddingHorizontal: 19,
    paddingTop: 27
  },
  employeeItem: {
    borderColor: 'darkgray',
    borderTopWidth: 0,
    borderWidth: 1,
    marginTop: -1,
    paddingHorizontal: 11,
    paddingVertical: 13
  },
  firstEmployeeItem: {
    borderTopWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    marginTop: 0
  },
  lastEmployeeItem: {
    borderBottomEndRadius: 3,
    borderBottomStartRadius: 3
  },
  employeeName: {
    fontSize: 19
  }
});

const mapStateToProps = ({ employee: { employees } }) => ({
  employees: _.map(employees, (value, key) => ({ key, ...value }))
});

export default connect(mapStateToProps, { setEmployees })(EmployeesList);
