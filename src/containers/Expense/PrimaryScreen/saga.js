import {call, select, takeLatest, put} from 'redux-saga/effects';
import {GET_EXPENSE_LIST} from './constants';
import config from '../../../config';
import {selectExpenseFilter} from './selectors';
import request from '../../../utils/request';
import {saveExpenseList} from './actions';

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

export default function* ExpensePrimarySaga() {
  yield takeLatest(GET_EXPENSE_LIST, fetchExpenseListItemAPI);
}
