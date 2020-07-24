import {
  SET_EMAIL,
  SET_ERROR_MESSAGE,
  SET_IS_LOADING,
  SET_PASSWORD,
  SET_USER
} from '../types/authentication';

const INITIAL_STATE = {
  email: '',
  errorMessage: null,
  isLoading: false,
  password: '',
  user: null
};

const authentication = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case SET_EMAIL:
      return { ...state, email: payload };
    case SET_ERROR_MESSAGE:
      return { ...INITIAL_STATE, errorMessage: payload };
    case SET_IS_LOADING:
      return { ...state, errorMessage: null, isLoading: true };
    case SET_PASSWORD:
      return { ...state, password: payload };
    case SET_USER:
      return { ...INITIAL_STATE, user: payload };
    default:
      return state;
  }
};

export default authentication;
