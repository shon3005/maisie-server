import {
  UPDATE_USER,
  UPDATE_TOKEN
} from '../types';

const user = (state = [], action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      }
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.payload,
      }
    default:
      return state
  }
}
  
export default user;