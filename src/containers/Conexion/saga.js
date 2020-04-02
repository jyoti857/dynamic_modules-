import {call, takeLatest, put, select} from 'redux-saga/effects';
import {
  GET_IND_CONEXIONS,
  GET_ORG_CONEXIONS,
  FETCH_DD_METADATA,
  METADATA_VARIABLE,
  GET_ORG_DD_VALUE,
  GET_USER_DD_VALUE,
  CREATE_INDIVIDUAL,
  CREATE_CONEXION_FORM,
  GET_CONEXION_DETAILS,
} from './constants';
import config from '../../config';
import request from '../../utils/request';
import {
  saveIndConexions,
  saveOrgConexions,
  saveMetaData,
  saveOrgDDList,
  saveUserDDList,
  setIndividualModalVisibility,
  resetForm,
  saveConexionDetails,
} from './actions';
import {selectIndividualDetails, selectIndividualConexionId} from './selectors';
import {individualConexionPayloadMapper} from './mappers';

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

function* createIndividualDetailsAPI() {
  const newIndividual = yield select(selectIndividualDetails);
  // const newIndividual = yield select(selectIndividualDetails());
  const requestURL = `${config.apiURL}CreateIndividualConexion`;
  const individualConexionPayload = individualConexionPayloadMapper(
    newIndividual,
  );
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(individualConexionPayload),
  };
  const response = yield call(request, requestURL, options);
  // console.log('body -->', JSON.stringify(individualConexionPayload, null, 2));
  // console.log('response -->', response);
  if (response.success) {
    yield put(setIndividualModalVisibility(false));
    // yield put(setCreateIndividualModalVisibility(false));
    yield put(resetForm(CREATE_CONEXION_FORM));
    // let the getConexionDetails get done and then come to this to complete
    //yield put(getIndConexions());
    // yield put(getConexionDetails());
  }
}

function* getConexionDetailsAPI() {
  const selectedIndividualId = yield select(selectIndividualConexionId);
  console.log('Selected individual id ---> ', selectedIndividualId);
  const requestURL = `${
    config.apiURL
  }ConexionDetail?conexionId=${selectedIndividualId}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = yield call(request, requestURL, options);
  if (response.success) {
    console.log('response from getConexionDetailsAPI -->', response.data);
    yield put(saveConexionDetails(response.data));
  }
}

export default function* ConexionSaga() {
  yield takeLatest(GET_IND_CONEXIONS, getIndividualConexionAPI);
  yield takeLatest(GET_ORG_CONEXIONS, getOrganizationConexionAPI);
  yield takeLatest(FETCH_DD_METADATA, getConexionMetaDataAPI);
  yield takeLatest(GET_ORG_DD_VALUE, getOrgDDValuesAPI);
  yield takeLatest(GET_USER_DD_VALUE, getUserDDValuesAPI);
  yield takeLatest(CREATE_INDIVIDUAL, createIndividualDetailsAPI);
  yield takeLatest(GET_CONEXION_DETAILS, getConexionDetailsAPI);
}
