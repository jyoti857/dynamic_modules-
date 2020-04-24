import {GET_EXPENSE_LIST, SAVE_EXPENSE_LIST} from './constants';

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
