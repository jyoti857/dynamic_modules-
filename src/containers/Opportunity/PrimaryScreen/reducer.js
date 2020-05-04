import produce from 'immer';
export const OpportunityPrimaryInitialState = {};

const OpportunityPrimaryReducer = (
  state = OpportunityPrimaryInitialState,
  action,
) =>
  produce(state, draft => {
    const draftState = draft;
    switch (action.type) {
      default:
        return state;
    }
  });

export default OpportunityPrimaryReducer;
