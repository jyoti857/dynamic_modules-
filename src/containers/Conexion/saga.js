import {call, takeLatest, put} from 'redux-saga/effects';
import {
  GET_IND_CONEXIONS,
  GET_ORG_CONEXIONS,
  FETCH_DD_METADATA,
  METADATA_VARIABLE,
  GET_ORG_DD_VALUE,
  GET_USER_DD_VALUE,
} from './constants';
import config from '../../config';
import request from '../../utils/request';
import {
  saveIndConexions,
  saveOrgConexions,
  saveMetaData,
  saveOrgDDList,
  saveUserDDList,
} from './actions';

function* getIndividualConexionAPI({initialPage}) {
  //   console.log('EIE@IKJE@K from saga _----------.');
  const requestURL = `${config.apiURL}IndividualConexions?pageSize=${
    initialPage.pageSize
  }&pageNumber=${initialPage.pageNumber}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = yield call(request, requestURL, options);
  if (response.success) {
    // console.log('response data --->', response.data);
    yield put(
      saveIndConexions({data: response.data, page: initialPage.pageNumber}),
    );
  } else {
    console.log('failed to get individual conexions response');
  }
}
function* getOrganizationConexionAPI({initialPage}) {
  const requestURL = `${config.apiURL}OrganizationConexions?pageSize=${
    initialPage.pageSize
  }&pageNumber=${initialPage.pageNumber}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = yield call(request, requestURL, options);
  if (response.success) {
    yield put(
      saveOrgConexions({data: response.data, page: initialPage.pageNumber}),
    );
  } else {
    console.log(' failed to get organization conexions list ');
  }
}

function* getConexionMetaDataAPI() {
  const requestURL = `${
    config.apiURL
  }CodeRoleValues?roles=${METADATA_VARIABLE}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = yield call(request, requestURL, options);
  if (response.success) {
    yield put(saveMetaData(response.data));
  } else {
    console.log('error in fetching metadata');
    // toast message and loader will be implemented
  }
}
function* getOrgDDValuesAPI() {
  const requestURL = `${config.apiURL}OrganizationConexionDropdown`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = yield call(request, requestURL, options);
  if (response.success) {
    yield put(saveOrgDDList(response.data));
    console.log('from organization dropdown saga -->', response.data);
  } else {
    console.log('problem fetching from org dropdown');
  }
}
function* getUserDDValuesAPI() {
  const requestURL = `${config.apiURL}UserDropdownValues`;
  const ddList = [];
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'applicaton/json',
    },
  };
  const response = yield call(request, requestURL, options);
  if (response.success) {
    response.data.forEach(dd => {
      ddList.push({
        key: dd.value.toString(),
        value: dd.value,
        label: dd.label,
      });
    });
    yield put(saveUserDDList(ddList));
  } else {
    console.log('problem fetching User drop down');
  }
}

export default function* ConexionSaga() {
  yield takeLatest(GET_IND_CONEXIONS, getIndividualConexionAPI);
  yield takeLatest(GET_ORG_CONEXIONS, getOrganizationConexionAPI);
  yield takeLatest(FETCH_DD_METADATA, getConexionMetaDataAPI);
  yield takeLatest(GET_ORG_DD_VALUE, getOrgDDValuesAPI);
  yield takeLatest(GET_USER_DD_VALUE, getUserDDValuesAPI);
}
