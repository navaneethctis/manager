import _ from 'lodash';
import React from 'react';
import { LogBox } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

LogBox.ignoreLogs(['Warning: Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

import reducers from './src/reducers';

import AuthenticationForm from './src/screens/AuthenticationForm';
import EmployeesList from './src/screens/EmployeesList';
import EmployeeForm from './src/screens/EmployeeForm';

const Navigator = createSwitchNavigator({
  AuthenticationFlow: createStackNavigator({ AuthenticationForm }),
  EmployeeFlow: createStackNavigator({
    EmployeesList,
    EmployeeForm
  })
});

const AppContainer = createAppContainer(Navigator);

const App = () => {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(thunk))}>
      <AppContainer />
    </Provider>
  );
};

export default App;
