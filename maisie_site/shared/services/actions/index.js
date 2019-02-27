import { UPDATE_USER, UPDATE_TOKEN, UPDATE_REQUESTS } from '../types'

export const updateUser = (user) => dispatch => {
  dispatch({
    type: UPDATE_USER,
    payload: user
  });
}

export const updateRequests = (requests) => dispatch => {
  dispatch({
    type: UPDATE_REQUESTS,
    payload: requests
  });
}

export const updateToken = token => dispatch => {
  dispatch({
    type: UPDATE_TOKEN,
    payload: token
  });
}