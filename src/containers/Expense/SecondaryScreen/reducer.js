import {produce} from 'immer';
export const expenseSecondaryScreenState = {};

const ExpenseSecondaryStore = (state = expenseSecondaryScreenState, action) =>
  produce(state, draft => {
    const draftState = draft;
    switch (action.type) {
      default:
        return draftState;
    }
  });

export default ExpenseSecondaryStore;
