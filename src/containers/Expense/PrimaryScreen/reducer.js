import produce from 'immer';
import {
  SAVE_EXPENSE_LIST,
  SAVE_EXPENSE_META_DATA,
  SAVE_EXPENSE_SUMMARY,
  SET_EXPENSE_STATUS,
} from './constants';
export const expensePrimaryInitialState = {
  individualConexions: [],
  expenseSummary: [],
  expenseList: [],
  expenseMetaData: {
    business_unit: [],
    constcenter: [],
    currency: [],
    expense_item_attendee_role: [],
    expense_item_project_chargeable: [],
    expense_status: [],
    expense_type: [],
    grouped_expense_status: [],
    payment_type: [],
  },
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
      case SAVE_EXPENSE_META_DATA: {
        draftState.expenseMetaData = action.expenseMetaData;
        break;
      }
      case SAVE_EXPENSE_SUMMARY: {
        draftState.expenseSummary = action.expenseSummary;
        break;
      }
      case SET_EXPENSE_STATUS: {
        draftState.expenseFilter = action.newStatus;
        break;
      }
      default:
        return state;
    }
  });

export default ExpensePrimaryStore;
