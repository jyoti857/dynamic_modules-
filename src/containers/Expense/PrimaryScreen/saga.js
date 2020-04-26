import {call, select, takeLatest, put} from 'redux-saga/effects';
import {
  GET_EXPENSE_LIST,
  GET_EXPENSE_META_DATA,
  GET_EXPENSE_SUMMARY,
} from './constants';
import config from '../../../config';
import {selectExpenseFilter, selectExpenseMetaData} from './selectors';
import request from '../../../utils/request';
import {
  saveExpenseList,
  saveExpenseMetaData,
  getExpenseSummary,
  saveExpenseSummary,
} from './actions';
import {METADATA_VARIABLES, GROUPED_EXPENSE_STATUS} from '../constants';
import {mapGroupedStatusCodeRole} from '../mappers';

function* fetchExpenseListItemAPI() {
  const payload = yield select(selectExpenseFilter);
  console.log('from expense primary saga --->', payload);
  const requestURL = `${config.apiURL}ExpenseList?status=${
    payload.status
  }&pageSize=${payload.pageSize}&pageNumber=${payload.pageNumber}&startDate=${
    payload.startDate
  }&endDate=${payload.endDate}`;
  const options = {
    methods: 'GET',
  };
  const response = yield call(request, requestURL, options);
  console.log('from expense primary screen -->', response);
  if (response.success) {
    yield put(saveExpenseList(response.data));
  } else {
    console.log('something went wrong in Expense list fetch');
  }
}
function* fetchExpenseDataAPI() {
  const requestURL = `${
    config.apiURL
  }CodeRoleValues?roles=${METADATA_VARIABLES}`;
  const options = {
    method: 'GET',
  };
  const response = yield call(request, requestURL, options);
  if (!response.data.grouped_expense_status) {
    console.log('error in fetching from expense data API');
  } else {
    console.log('response from fetch expense meta data ->', response.data);
    yield put(saveExpenseMetaData(response.data));
    yield put(getExpenseSummary());
  }
}
function* fetchExpenseSummaryAPI() {
  const requestURL = `${config.apiURL}GetExpenseCountByStatus`;
  const options = {
    method: 'GET',
  };
  const response = yield call(request, requestURL, options);
  console.log(
    'from fetch expense summary API saga dsad00w02302-00()(#(@(#)@(',
    response,
  );
  if (response.success) {
    const expenseStatus = yield select(
      selectExpenseMetaData(GROUPED_EXPENSE_STATUS),
    );
    const mappedStatus = mapGroupedStatusCodeRole(response.data, expenseStatus);
    console.log('from fetch expense summary api select --->', mappedStatus);
    yield put(saveExpenseSummary(mappedStatus));
  } else {
    console.log('something went wrong from fetching expense summary');
  }
}

export default function* ExpensePrimarySaga() {
  yield takeLatest(GET_EXPENSE_LIST, fetchExpenseListItemAPI);
  yield takeLatest(GET_EXPENSE_META_DATA, fetchExpenseDataAPI);
  yield takeLatest(GET_EXPENSE_SUMMARY, fetchExpenseSummaryAPI);
}
