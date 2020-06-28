import {createSelector} from 'reselect';

const selectCreateOpportunityModalState = state => {
  console.log('state --->', state);
  return state.createOpportunityModalState;
};

export const createOpportunityModalStateSelector = createSelector(
  [selectCreateOpportunityModalState],
  s => s,
);

//===
const selectoppsListByStage = state => {
  console.log('**&&D&&S(((', state.oppsListByStage);
  return state.oppsListByStage;
};

export const oppsListByStageSelector = createSelector(
  [selectoppsListByStage],
  s => s,
);
