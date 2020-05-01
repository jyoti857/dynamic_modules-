import {createSelector} from 'reselect';
import ExpenseSecondaryStore, {expenseSecondaryScreenState} from './reducer';

const expenseSecondaryInitialState = () =>
  expenseSecondaryScreenState ? expenseSecondaryScreenState : null;

const expenseSecondaryStore = () =>
  ExpenseSecondaryStore ? ExpenseSecondaryStore : null;

// IDK, y I am not able to run selectors
export const selectCurrentExpenseId_ = () =>
  createSelector(
    expenseSecondaryStore,
    dataState => dataState.currentExpenseId,
  );
// work around
export const selectCurrentExpenseId = ({ExpenseSecondaryReducer}) =>
  ExpenseSecondaryReducer.currentExpenseId;
