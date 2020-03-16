import {put, call, takeLatest} from 'redux-saga/effects';
import {SET_SIGN_IN, GET_USER_DATA} from './constants';
import config from '../../config';
import request from '../../utils/request';
import jwt from 'jwt-decode';
import {setUserAccessToken, setUserData, setUserRoles} from './actions';

function* setSignIn({username, password}) {
  const requestURL = `${config.apiBaseURL}token`;
  //   console.log('from set sign in from saga--->', username, password);
  //   console.log('from*@(#@#-->', requestURL);
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
    yield put(setUserAccessToken(token));
    const decoded = jwt(token);
    const userRole = decoded.role;
    console.log('user role from saga-->', userRole);
    yield put(setUserRoles(decoded.role));
  }
}

function* getUserDataAPI() {
  console.log('get user data api saga');
  const requestURL = `${config.apiURL}/GetUserProfile`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = yield call(request, requestURL, options);
  if (response.success) {
    yield put(setUserData(response.data));
  } else {
    console.log('from GetUserDataAPI saga --> error fetching user DATA');
  }
}

export default function* loginSaga() {
  yield takeLatest(SET_SIGN_IN, setSignIn);
  yield takeLatest(GET_USER_DATA, getUserDataAPI);
}
