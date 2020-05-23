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
} from './constants';

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
