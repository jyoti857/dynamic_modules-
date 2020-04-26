import {fork, all} from 'redux-saga/effects';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import LoginReducer from '../src/containers/Login/reducer';
import ConexionReducer from '../src/containers/Conexion/reducer';
import createSagaMiddleware from 'redux-saga';
import loginSaga from '../src/containers/Login/saga';
import ConexionSaga from './containers/Conexion/saga';
import {reducer as formReducer} from 'redux-form';
import ExpensePrimaryReducer from './containers/Expense/PrimaryScreen/reducer';
import ExpenseSecondaryReducer from './containers/Expense/SecondaryScreen/reducer';

import ExpensePrimarySaga from './containers/Expense/PrimaryScreen/saga';
import ExpenseSecondarySaga from './containers/Expense/SecondaryScreen/saga';
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  LoginReducer,
  ConexionReducer,
  ExpensePrimaryReducer,
  ExpenseSecondaryReducer,
  form: formReducer,
});

function* rootSaga() {
  yield all([
    fork(loginSaga),
    fork(ConexionSaga),
    fork(ExpensePrimarySaga),
    fork(ExpenseSecondarySaga),
  ]);
}
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
