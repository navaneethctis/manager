import firebase from '../firebase';

import {
  CLEAR_EMPLOYEE_INPUTS,
  SET_EMPLOYEES,
  SET_EMPLOYEE_INPUT
} from '../types/employee';

const clearEmployeeInputs = () => ({ type: CLEAR_EMPLOYEE_INPUTS });

const destroyEmployee = (key, callback) => dispatch => {
  const {
    currentUser: { uid }
  } = firebase.auth();

  firebase
    .database()
    .ref(`/users/${uid}/employees/${key}`)
    .remove()
    .then(callback)
    .catch(console.log);
};

const setEmployees = () => dispatch => {
  const {
    currentUser: { uid }
  } = firebase.auth();

  firebase
    .database()
    .ref(`/users/${uid}/employees`)
    .on('value', snapshot =>
      dispatch({ payload: snapshot.val(), type: SET_EMPLOYEES })
    );
};

const setEmployeeInput = (key, value) => ({
  payload: { key, value },
  type: SET_EMPLOYEE_INPUT
});

const storeEmployee = (email, name, shift, callback) => dispatch => {
  const {
    currentUser: { uid }
  } = firebase.auth();

  firebase
    .database()
    .ref(`/users/${uid}/employees`)
    .push({ email, name, shift })
    .then(() => {
      dispatch(clearEmployeeInputs());

      callback();
    })
    .catch(console.log);
};

const updateEmployee = (email, name, shift, key, callback) => dispatch => {
  const {
    currentUser: { uid }
  } = firebase.auth();

  firebase
    .database()
    .ref(`/users/${uid}/employees/${key}`)
    .set({ email, name, shift })
    .then(() => {
      dispatch(clearEmployeeInputs());

      callback();
    })
    .catch(console.log);
};

export {
  clearEmployeeInputs,
  destroyEmployee,
  storeEmployee,
  setEmployees,
  setEmployeeInput,
  updateEmployee
};
