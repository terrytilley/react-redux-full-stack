import axios from 'axios';
import {
  AUTH_USER,
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
