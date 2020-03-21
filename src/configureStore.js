import {fork, all} from 'redux-saga/effects';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import LoginReducer from '../src/containers/Login/reducer';
import ConexionReducer from '../src/containers/Conexion/reducer';
import createSagaMiddleware from 'redux-saga';
import loginSaga from '../src/containers/Login/saga';
import ConexionSaga from './containers/Conexion/saga';
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  LoginReducer,
  ConexionReducer,
});

function* rootSaga() {
  yield all([fork(loginSaga), fork(ConexionSaga)]);
}
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
