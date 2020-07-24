import {
  CLEAR_EMPLOYEE_INPUTS,
  SET_EMPLOYEES,
  SET_EMPLOYEE_INPUT
} from '../types/employee';

const INITIAL_STATE = {
  email: '',
  employees: [],
  name: '',
  shift: 'Monday'
};

const employee = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case CLEAR_EMPLOYEE_INPUTS:
      return { ...INITIAL_STATE, employees: state.employees };
    case SET_EMPLOYEES:
      return { ...state, employees: payload };
    case SET_EMPLOYEE_INPUT:
      return { ...state, [payload.key]: payload.value };
    default:
      return state;
  }
};

export default employee;
