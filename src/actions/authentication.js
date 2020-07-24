import firebase from '../firebase';

import {
  SET_EMAIL,
  SET_ERROR_MESSAGE,
  SET_IS_LOADING,
  SET_PASSWORD,
  SET_USER
} from '../types/authentication';

const setEmail = email => ({ payload: email, type: SET_EMAIL });

const setErrorMessage = errorMessage => ({
  payload: errorMessage,
  type: SET_ERROR_MESSAGE
});

const setIsLoading = () => ({ type: SET_IS_LOADING });

const setPassword = password => ({ payload: password, type: SET_PASSWORD });

const setUser = user => ({ payload: user, type: SET_USER });

const signIn = (email, password, callback) => dispatch => {
  dispatch(setIsLoading());

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(setUser(user));

      callback();
    })
    .catch(() =>
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          dispatch(setUser(user));

          callback();
        })
        .catch(({ message }) => dispatch(setErrorMessage(message)))
    );
};

export { setEmail, setErrorMessage, setPassword, signIn };
