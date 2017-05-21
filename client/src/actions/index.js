import axios from 'axios';

const ROOT_URL = 'http://localhost:8080';

export function signInUser({ email, password }) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password });
  };
}
