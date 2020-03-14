import {createStore, combineReducers, applyMiddleware} from 'redux';
import LoginReducer from '../src/containers/Login/reducer';
import createSagaMiddleware from 'redux-saga';
import loginSaga from '../src/containers/Login/saga';
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  LoginReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(loginSaga);
export default store;
