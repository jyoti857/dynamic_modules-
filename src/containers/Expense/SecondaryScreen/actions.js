import {
  GET_EXPENSE_DETAILS,
  SET_CURRENT_EXPENSE_ID,
  SAVE_EXPENSE_DETAILS,
} from './constants';

export const getExpenseDetails = () => ({
  type: GET_EXPENSE_DETAILS,
});

export const saveExpenseDetails = expenseDetails => ({
  type: SAVE_EXPENSE_DETAILS,
  expenseDetails,
});

export const setCurrentExpenseId = currentExpenseId => ({
  type: SET_CURRENT_EXPENSE_ID,
  currentExpenseId,
});
