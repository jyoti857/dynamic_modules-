import produce from 'immer';
import {GET_ACCESS_TOKEN, SET_SIGN_IN} from './constants';
export const loginInitialState = {
  username: 'lekwr  ',
  password: 'relkmrl',
  token: '',
};

const LoginReducer = (state = loginInitialState, action) =>
  produce(state, draft => {
    const draftState = draft;
    switch (action.type) {
      case GET_ACCESS_TOKEN: {
        // return {
        //   ...state,
        //   userName: action.payload.userName,
        //   password: action.payload.password,
        // };
        draftState.username = action.payload.username;
        draftState.password = action.payload.password;
        break;
      }
      case SET_SIGN_IN: {
        draftState.username = action.username;
        draftState.password = action.password;
        break;
      }
      default:
        return state;
    }
  });

export default LoginReducer;
