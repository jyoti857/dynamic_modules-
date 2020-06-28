import {
  FETCH_OPPORTUNITY_METADATA,
  FETCH_OPPS_STAGE_PROBABILITY,
  FETCH_USER_DD_LIST,
  SAVE_USER_DD_LIST,
  FETCH_ORG_DD_LIST,
  SAVE_ORG_DD_LIST,
  SAVE_OPPS_METADATA,
  SAVE_OPPS_STAGE_PROBABILITY,
  FETCH_OPPS_STAGES,
  SAVE_OPPS_STAGES,
  SET_OPPORTUNITY_VISIBILITY,
  SET_QUICK_VIEW_MODAL_STATE,
  GET_IND_DD_VALUE,
  SET_NEW_OPPORTUNITY,
  GET_OPPS_LIST_BY_STAGE,
  SAVE_OPPS_LIST_BY_STAGE,
  SET_OPP_QUICK_VIEW_MODALSTATE,
  FETCH_OPP_DETAIL,
} from './constants';
import {Value} from 'react-native-reanimated';

export const fetchOpportunityMetadata = () => ({
  type: FETCH_OPPORTUNITY_METADATA,
});

// export const fetchOppsStageProbability = () => ({
//   type: FETCH_OPPS_STAGE_PROBABILITY,
// });
// export const saveOppsStageProbability = data => ({
//   type: SAVE_OPPS_STAGE_PROBABILITY,
//   data,
// });

export const setCreateOpportunityModalVisibility = visibility => ({
  type: SET_OPPORTUNITY_VISIBILITY,
  visibility,
});

export const setOppQuickViewModalState = visibility => ({
  type: SET_QUICK_VIEW_MODAL_STATE,
  visibility,
});
export const fetchOppsStages = showAll => ({
  type: FETCH_OPPS_STAGES,
  showAll,
});
export const saveOppsStages = data => ({
  type: SAVE_OPPS_STAGES,
  data,
});

export const saveUserDDList = data => ({
  type: SAVE_USER_DD_LIST,
  data,
});
export const getOppsListByStage = boolean => ({
  type: GET_OPPS_LIST_BY_STAGE,
  boolean,
});

export const fecthUserDDList = () => ({
  type: FETCH_USER_DD_LIST,
});
export const fetchOrgDDList = () => ({
  type: FETCH_ORG_DD_LIST,
});
export const saveOrgDDList = data => ({
  type: SAVE_ORG_DD_LIST,
  data,
});

export const saveOppsMetadata = data => ({
  type: SAVE_OPPS_METADATA,
  data,
});

export const getIndDDList = indDDValues => ({
  type: GET_IND_DD_VALUE,
  indDDValues,
});

export const setNewOpportunity = value => ({
  type: SET_NEW_OPPORTUNITY,
  value,
});

export const saveOppsListByStage = value => ({
  type: SAVE_OPPS_LIST_BY_STAGE,
  value,
});

export const getOppDetail = oppId => ({
  type: FETCH_OPP_DETAIL,
  oppId,
});
