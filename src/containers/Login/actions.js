import {
  SET_USERNAME,
  SET_PASSWORD,
  SET_SIGN_IN,
  SET_ACCESS_TOKEN,
  SET_USER_ACCESS_TOKEN,
  SET_USER_DATA,
  GET_USER_DATA,
  SET_USER_ROLES,
} from './constants';

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

export const dispatchUserAccessToken = token => {
  return {
    type: SET_ACCESS_TOKEN,
    token,
  };
};

export const setUserAccessToken = token => {
  return {
    type: SET_USER_ACCESS_TOKEN,
    token,
  };
};
export const setUserData = userData => {
  return {
    type: SET_USER_DATA,
    userData,
  };
};
export const getUserData = () => ({
  type: GET_USER_DATA,
});
export const setUserRoles = roles => ({
  type: SET_USER_ROLES,
  roles,
});
