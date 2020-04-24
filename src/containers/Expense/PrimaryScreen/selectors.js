import {expensePrimaryInitialState} from './reducer';
import {createSelector} from 'reselect';

const expensePrimaryStore = () =>
  expensePrimaryInitialState ? expensePrimaryInitialState : null;

export const selectExpenseFilter = ({ExpensePrimaryReducer}) =>
  ExpensePrimaryReducer.expenseFilter;
