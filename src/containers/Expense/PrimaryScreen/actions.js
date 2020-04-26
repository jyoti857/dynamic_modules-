import {
  GET_EXPENSE_LIST,
  SAVE_EXPENSE_LIST,
  GET_EXPENSE_META_DATA,
  SAVE_EXPENSE_META_DATA,
  SAVE_EXPENSE_SUMMARY,
  GET_EXPENSE_SUMMARY,
  SET_EXPENSE_STATUS,
} from './constants';

export const getExpenseList = () => {
  return {
    type: GET_EXPENSE_LIST,
  };
};

export const saveExpenseList = expenseList => {
  return {
    type: SAVE_EXPENSE_LIST,
    expenseList,
  };
};

export const getExpenseMetaData = () => ({
  type: GET_EXPENSE_META_DATA,
});

export const saveExpenseMetaData = expenseMetaData => ({
  type: SAVE_EXPENSE_META_DATA,
  expenseMetaData,
});

export const getExpenseSummary = () => ({
  type: GET_EXPENSE_SUMMARY,
});
export const saveExpenseSummary = expenseSummary => ({
  type: SAVE_EXPENSE_SUMMARY,
  expenseSummary,
});

export const setExpenseStatus = newStatus => ({
  type: SET_EXPENSE_STATUS,
  newStatus,
});
