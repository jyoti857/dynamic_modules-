import {select, takeLatest, call, put} from 'redux-saga/effects';
import {
  FETCH_OPPORTUNITY_METADATA,
  FETCH_OPPS_STAGE_PROBABILITY,
} from './constants';
import config from '../../../config';
import {METADATA_VARIABLES, ROLE_VARIABLES} from '../constants';
import request from '../../../utils/request';

function* fetchOppsMetadaAPI() {
  const requestURL = `${
    config.apiURL
  }CodeRoleValues?roles=${METADATA_VARIABLES}`;
  const options = {
    method: 'GET',
  };
  const response = yield call(request, requestURL, options);
  console.log('response fetch opps meta data api ', response);
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
}

export default function* OpportunityPrimarySaga() {
  yield takeLatest(FETCH_OPPORTUNITY_METADATA, fetchOppsMetadaAPI);
  yield takeLatest(FETCH_OPPS_STAGE_PROBABILITY, fetchOppsStageProbabilityAPI);
}
