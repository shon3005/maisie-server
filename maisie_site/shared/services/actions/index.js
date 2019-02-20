import { UPDATE_USER, UPDATE_TOKEN } from '../types'

export const updateUser = (user) => dispatch => {
  dispatch({
    type: UPDATE_USER,
    payload: user
  });
}

export const updateToken = token => dispatch => {
  dispatch({
    type: UPDATE_TOKEN,
    payload: token
  });
}