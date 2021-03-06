import axios from 'axios';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
} from '../actions/types';

const ROOT_URL = 'http://localhost:8080';

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}

export function signInUser({ email, password }, callback) {
  return (dispatch) => {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then((response) => {
      // If request is good...
      // - Update state to indicate user is authenticated
      dispatch({ type: AUTH_USER });
      // - Save the JWT token
      localStorage.setItem('token', response.data.token);
      // - redirect to the route '/'
      callback();
    })
    .catch(() => {
      // If request is bad...
      // - Show an error to the user
      dispatch(authError('Bad Login Info'));
    });
  };
}

export function signUpUser({ email, password }, callback) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then((response) => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        callback();
      })
      .catch(error => dispatch(authError(error.response.data.error)));
  };
}

export function signOutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}
