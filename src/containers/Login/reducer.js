import produce from 'immer';
import {
  GET_ACCESS_TOKEN,
  SET_SIGN_IN,
  SET_ACCESS_TOKEN,
  SET_USER_ACCESS_TOKEN,
  SET_USER_DATA,
} from './constants';
import AsyncStorage from '@react-native-community/async-storage';
export const loginInitialState = {
  username: 'lekwr  ',
  password: 'relkmrl',
  token: '',
  user: {
    UserId: null,
    UserName: null,
    Email: null,
    FirstName: null,
    LastName: null,
    MiddleName: null,
    TimeZone: null,
    DisplayName: null,
    CustomerName: null,
    AvatarUrl: null,
  },
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
      case (SET_ACCESS_TOKEN, SET_USER_ACCESS_TOKEN): {
        draftState.token = action.token;
        break;
      }
      case SET_USER_DATA: {
        draftState.user = action.userData;
        AsyncStorage.setItem('@userdata', JSON.stringify(action.userData));
        break;
      }
      default:
        return state;
    }
  });

export default LoginReducer;
