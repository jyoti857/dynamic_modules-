import {createSelector} from 'reselect';

const selectCreateOpportunityModalState = state => {
  console.log('state --->', state);
  return state.createOpportunityModalState;
};

export const createOpportunityModalStateSelector = createSelector(
  [selectCreateOpportunityModalState],
  s => s,
);
