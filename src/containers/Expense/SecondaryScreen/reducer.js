import {produce} from 'immer';
import {SET_CURRENT_EXPENSE_ID, SAVE_EXPENSE_DETAILS} from './constants';
export const expenseSecondaryScreenState = {
  currentExpenseId: 'JYOTI0219',
  expenseDetails: {
    expenseDetail: {
      BusinessPurpose: '',
      BusinessUnit: {Code: '', Value: ''},
      CostCenter: {Code: '', Value: ''},
      CreatedBy: {
        Id: 0,
        Name: '',
        Avatar: '',
      },
      CreatedDate: '',
      Currency: {Code: '', Value: ''},
      CurrentStatus: {Code: '', Value: ''},
      CustomerId: 0,
      ExpenseId: 0,
      ExpenseKey: '',
      LastUpdatedDate: '',
      ReportDate: '',
      ReportName: '',
      TotalAmount: 0,
    },
    ExpenseUIActions: {
      EnableAdminReject: false,
      EnableArchive: false,
      EnableDelete: false,
      EnableEdit: false,
      EnableHCPSpend: false,
      EnableManagerApprove: false,
      EnableManagerReject: false,
      EnableMultiCurrency: false,
      EnableReadyForPayment: false,
      EnableSubmit: false,
    },
  },
};

const ExpenseSecondaryStore = (state = expenseSecondaryScreenState, action) =>
  produce(state, draft => {
    const draftState = draft;
    switch (action.type) {
      case SET_CURRENT_EXPENSE_ID: {
        draftState.currentExpenseId = action.currentExpenseId;
        break;
      }
      case SAVE_EXPENSE_DETAILS: {
        console.log('from reducer --->', action.expenseDetails);
        draftState.expenseDetails = action.expenseDetails;
        break;
      }
      default:
        return draftState;
    }
  });

export default ExpenseSecondaryStore;
