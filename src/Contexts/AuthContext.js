import React from 'react';
import CreateDataContext from './CreateDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        userToken: action.token,
      };
    case 'SIGN_IN':
      return {
        ...state,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        userToken: '',
      };
    default:
      return state;
  }
};

const signOut = dispatch => {
  return () => {
    dispatch({type: 'SIGN_OUT'});
  };
};
const signIn = dispatch => {
  return token => {
    dispatch({type: 'SIGN_IN', token});
  };
};

export const {Context, Provider} = CreateDataContext(
  authReducer,
  {signOut, signIn},
  [{userToken: ''}],
);
