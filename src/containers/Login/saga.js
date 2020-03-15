import {put, call, takeLatest} from 'redux-saga/effects';
import {SET_SIGN_IN} from './constants';
import config from '../../config';
import request from '../../utils/request';
import jwt from 'jwt-decode';

function* setSignIn({username, password}) {
  const requestURL = `${config.apiBaseURL}token`;
  console.log('from set sign in from saga--->', username, password);
  console.log('from*@(#@#-->', requestURL);
  const options = {
    method: 'POST',
    headers: {
      'cache-control': 'no-cache',
    },
    body: `grant_type=password&UserName=${username}&Password=${password}`,
  };
  const data = yield call(request, requestURL, options);
  if (data && !data.access_token) {
    if (data.response) {
      console.log('access_token invalid', data.response.error_description);
    } else {
      console.log('no user access token found');
    }
  } else if (data.access_token) {
    console.log('success 200', data.access_token);
    const token = data.access_token;
    const decoded = jwt(token);
    const userRole = decoded.role;
    console.log('user role from saga-->', userRole);
  }
}

export default function* loginSaga() {
  yield takeLatest(SET_SIGN_IN, setSignIn);
}
