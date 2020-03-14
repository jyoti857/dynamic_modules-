import {SET_USERNAME, SET_PASSWORD, SET_SIGN_IN} from './constants';

export const setDispatchUserName = userName => ({
  type: SET_USERNAME,
  payload: userName,
});
export const setDispatchPassword = password => ({
  type: SET_PASSWORD,
  payload: password,
});

export const dispatchSignin = (username, password) => {
  console.log('from dispatch dispatchSignin', username, password);
  return {
    type: SET_SIGN_IN,
    username,
    password,
  };
};
