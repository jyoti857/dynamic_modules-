import {createSelector} from 'reselect';
import {loginInitialState} from './reducer';

const loginReducer__ = () => loginInitialState;

const selectUserName = () =>
  createSelector(
    loginReducer__,
    dataState => {
      console.log('from loginSelectors', dataState.username);
      return dataState.username;
    },
  );

const selectPassword = () =>
  createSelector(
    loginReducer__,
    dataState => dataState.password,
  );

export {selectUserName, selectPassword, loginReducer__};
