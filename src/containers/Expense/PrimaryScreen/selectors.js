import {expensePrimaryInitialState} from './reducer';
import {createSelector} from 'reselect';

const expensePrimaryStore = () =>
  expensePrimaryInitialState ? expensePrimaryInitialState : null;

const expenseReducers = ({ExpensePrimaryReducer}) => {
  return ExpensePrimaryReducer ? ExpensePrimaryReducer : ['JYOTI'];
};

export const selectExpenseFilter = ({ExpensePrimaryReducer}) =>
  ExpensePrimaryReducer.expenseFilter;

// did not work that's y below one is the work around
export const selectExpenseMetaData_ = codeRoleName =>
  createSelector(
    expenseReducers,
    dataState => dataState.expenseMetaData[codeRoleName],
  );

//work around
export const selectExpenseMetaData = codeRoleName => ({
  ExpensePrimaryReducer,
}) => ExpensePrimaryReducer.expenseMetaData[codeRoleName];
