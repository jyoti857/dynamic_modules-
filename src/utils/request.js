import 'whatwg-fetch';
import AsyncStorage from '@react-native-community/async-storage';
import {
  UNAUTH_ERROR,
  REQUIRED_ERROR,
  INTERNAL_ERROR,
  GENERAL_ERROR,
} from './constants';

async function handleError(error) {
  let processedErrorResponse;
  try {
    processedErrorResponse = await error.response.json();
  } catch (e) {
    processedErrorResponse = null;
  }
  return {
    status: error && error.response ? error.response.status : null,
    message:
      processedErrorResponse && processedErrorResponse.message
        ? processedErrorResponse.message
        : error.message,
  };
}

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}
async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 401) {
    const error = new Error(UNAUTH_ERROR);
    error.response = response;
    await clearAccessToken();
    throw error;
  }
  if (response.status === 422) {
    const error = new Error(REQUIRED_ERROR);
    error.response = response;
    throw error;
  }
  if (response.status === 500) {
    const error = new Error(INTERNAL_ERROR);
    error.response = response;
    throw error;
  }
  const error = new Error(GENERAL_ERROR);
  error.response = response;
  throw error;
}
// get the access token from Async storage
async function getAccessTokenFromAsyncStorage() {
  return AsyncStorage.getItem('@appusertoken');
}

async function clearAccessToken() {
  return AsyncStorage.removeItem('@appusertoken');
}

export default async function request(url, options) {
  const updatedOptions = options;
  const accessToken = await getAccessTokenFromAsyncStorage();
  if (accessToken) {
    updatedOptions.headers = {
      ...options.headers,
      'Cache-control': 'No-Store',
      Authorization: `Bearer ${accessToken}`,
    };
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(handleError);
}
