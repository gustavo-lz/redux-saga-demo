import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions';

const INITIAL_STATE = {
  users: [],
  error: null
}

const usersReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        users: action.users
      }
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default usersReducer;