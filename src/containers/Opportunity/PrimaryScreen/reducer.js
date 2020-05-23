import produce from 'immer';
import {
  FETCH_USER_DD_LIST,
  SAVE_OPPS_METADATA,
  SAVE_OPPS_STAGE_PROBABILITY,
  SAVE_OPPS_STAGES,
} from './constants';
export const OpportunityPrimaryInitialState = {
  userDropdown: [],
  indDropdown: [],
  orgDropDown: [],
  opportunityMetadata: {
    opportunity_services: [],
    opportunity_stage: [],
    opportunity_lead_source: [],
    opportunity_deal_type: [],
  },
  oppsStageProbabilityData: {
    opportunity_stage: [],
  },
  oppsStages: [],
};

const OpportunityPrimaryReducer = (
  state = OpportunityPrimaryInitialState,
  action,
) =>
  produce(state, draft => {
    const draftState = draft;
    switch (action.type) {
      case FETCH_USER_DD_LIST: {
        draftState.userDDList = action.data;
        break;
      }
      case SAVE_OPPS_METADATA: {
        draftState.opportunityMetadata = action.data;
        break;
      }
      case SAVE_OPPS_STAGES: {
        // console.log('----@!@!2 stage probability -->', action.data);
        // console.log('_----->', action.data);
        draftState.oppsStages = action.data;
        break;
      }
      // case SAVE_OPPS_STAGE_PROBABILITY: {
      //   draftState.oppsStageProbabilityData = action.data;
      //   break;
      // }
      default:
        return state;
    }
  });

export default OpportunityPrimaryReducer;
