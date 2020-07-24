import { combineReducers } from 'redux';

import authentication from './authentication';
import employee from './employee';

const reducers = combineReducers({
  authentication,
  employee
});

export default reducers;
