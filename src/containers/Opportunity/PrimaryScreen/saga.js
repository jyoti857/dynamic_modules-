import {select, takeLatest, call, put} from 'redux-saga/effects';
import {
  FETCH_OPPORTUNITY_METADATA,
  FETCH_OPPS_STAGE_PROBABILITY,
  FETCH_USER_DD_LIST,
  FETCH_OPPS_STAGES,
  GET_OPPS_LIST_BY_STAGE,
} from './constants';
import config from '../../../config';
import {METADATA_VARIABLES, ROLE_VARIABLES} from '../constants';
import request from '../../../utils/request';
import {
  saveUserDDList,
  saveOppsMetadata,
  saveOppsStageProbability,
  saveOppsStages,
  saveOppsListByStage,
} from './actions';
import {mapOppsByStage} from '../mappers';

function* fetchOppsMetadaAPI() {
  const requestURL = `${
    config.apiURL
  }CodeRoleValues?roles=${METADATA_VARIABLES}`;
  const options = {
    method: 'GET',
  };
  const response = yield call(request, requestURL, options);
  console.log('response fetch opps meta data api ', response);
  if (response.data) {
    yield put(saveOppsMetadata(response.data));
  } else {
    console.log('wrong fetching from opps metadata!!!!');
  }
}
function* fetchOppsStageProbabilityAPI() {
  const requestURL = `${
    config.apiURL
  }/CodeRoleMetadata?roles=${ROLE_VARIABLES}`;
  const options = {
    method: 'GET',
  };
  const response = yield call(request, requestURL, options);
  console.log('response fetch stage opps stage probability ', response);
  if (response.success) {
    // yield put(saveOppsStageProbability(response.data));
  } else {
    console.log('wrong in save opps stage probability!!!');
  }
}

function* fetchUserDDListAPI() {
  const requestURL = `${config.apiURL}GetOppOwnerDropdownValues`;
  const options = {
    method: 'GET',
    'Content-Type': 'application/json',
  };
  const ddList = [];
  const response = yield call(request, requestURL, options);
  if (response.success) {
    response.data.forEach(dd => {
      ddList.push({
        key: dd.value.toString(),
        value: dd.value.toString(),
        label: dd.label,
      });
    });
    yield put(saveUserDDList(ddList));
    // yield put(setRootGlobalLoader());
  } else {
    console.log('something wrong in fetching from user dd list');
  }
}
function* fetchOppsStagesAPI({showAll}) {
  const requestURL = `${config.apiURL}GetOppsListByStages?showall=${showAll}`;
  const options = {
    method: 'GET',
  };
  const response = yield call(request, requestURL, options);
  if (response.success) {
    const mappedOppsByStage = mapOppsByStage(response.data);
    console.log('Opps stages  ----->', mappedOppsByStage);
    yield put(saveOppsStages(mappedOppsByStage));
  } else {
    console.log(
      'Something went wrong fetching, from fetch opps stage API and ',
    );
  }
}
function* getOppsListByStageAPI({showAll}) {
  const requestURL = `${config.apiURL}GetOppsListByStages?showAll=${showAll}`;
  const options = {method: 'GET'};
  const response = yield call(request, requestURL, options);
  if (response.success) {
    console.log('******####', response.data);
    const mappedStage = mapOppsByStage(response.data);
    yield put(saveOppsListByStage(mappedStage));
  }
}

export default function* OpportunityPrimarySaga() {
  yield takeLatest(FETCH_OPPORTUNITY_METADATA, fetchOppsMetadaAPI);
  yield takeLatest(FETCH_OPPS_STAGE_PROBABILITY, fetchOppsStageProbabilityAPI);
  yield takeLatest(FETCH_USER_DD_LIST, fetchUserDDListAPI);
  yield takeLatest(FETCH_OPPS_STAGES, fetchOppsStagesAPI);
  yield takeLatest(GET_OPPS_LIST_BY_STAGE, getOppsListByStageAPI);
}
