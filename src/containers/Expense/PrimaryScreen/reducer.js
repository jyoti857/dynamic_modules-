import produce from 'immer';
import {SAVE_EXPENSE_LIST} from './constants';
export const expensePrimaryInitialState = {
  individualConexions: [],
  expenseSummary: [],
  expenseList: ['skdsd'],
  expenseFilter: {
    startDate: '',
    endDate: '',
    pageSize: 20,
    pageNumber: 1,
    status: 'ALL',
  },
};

const ExpensePrimaryStore = (state = expensePrimaryInitialState, action) =>
  produce(state, draft => {
    const draftState = draft;
    switch (action.type) {
      case SAVE_EXPENSE_LIST: {
        if (draftState.expenseFilter.pageNumber === 1) {
          draftState.expenseList = [];
          draftState.expenseList = action.expenseList;
        } else {
          draftState.expenseList.map(item => draftState.expenseList.push(item));
        }
        break;
      }
      default:
        return state;
    }
  });

export default ExpensePrimaryStore;
