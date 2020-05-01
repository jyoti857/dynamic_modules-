import {call, select, put, takeLatest} from 'redux-saga/effects';
import {GET_EXPENSE_DETAILS} from './constants';
import {selectCurrentExpenseId} from './selectors';
import config from '../../../config';
import request from '../../../utils/request';
import {saveExpenseDetails} from './actions';

function* fetchExpenseDetailsAPI() {
  const expenseId = yield select(selectCurrentExpenseId);
  console.log('from secondary expense saga expense id ', expenseId);
  const requestURL = `${config.apiURL}GetExpense?expenseId=${expenseId}`;
  const options = {
    method: 'GET',
  };
  const response = yield call(request, requestURL, options);
  console.log('from secondary expense saga expense details -->', response.data);
  if (response.success) {
    yield put(saveExpenseDetails(response.data));
  } else {
    console.log('error in fetching expense details ');
  }
}

export default function* ExpenseSecondarySaga() {
  yield takeLatest(GET_EXPENSE_DETAILS, fetchExpenseDetailsAPI);
}
