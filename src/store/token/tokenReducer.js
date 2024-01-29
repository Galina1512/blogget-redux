import {setToken} from '../../API/token';
import {UPDATE_TOKEN, DELETE_TOKEN} from './tokenAction';

const initialState = {
  token: '',
};

export const tokenMiddleware = store => next => (action) => {
  if (action.type === UPDATE_TOKEN) {
    setToken(action.token);
  }

  if (action.type === DELETE_TOKEN) {
    setToken('');
  }

  next(action);
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case DELETE_TOKEN:
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
};

