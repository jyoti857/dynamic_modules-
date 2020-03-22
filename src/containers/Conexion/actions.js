import {
  GET_IND_CONEXIONS,
  SET_IND_CONEXIONS,
  GET_ORG_CONEXIONS,
  SET_ORG_CONEXIONS,
  SET_INDIVIDUAL_MODAL,
} from './constants';

export const getIndConexions = initialPage => {
  console.log('get ind conexions ', initialPage);
  return {
    type: GET_IND_CONEXIONS,
    initialPage,
  };
};

export const saveIndConexions = indConexions => {
  console.log('set ind conexions ', indConexions);
  return {
    type: SET_IND_CONEXIONS,
    indConexions,
  };
};

export const getOrgConexions = initialPage => ({
  type: GET_ORG_CONEXIONS,
  initialPage,
});

export const saveOrgConexions = orgConexions => {
  return {
    type: SET_ORG_CONEXIONS,
    orgConexions,
  };
};

export const setIndividualModalVisibility = visibility => {
  return {
    type: SET_INDIVIDUAL_MODAL,
    visibility,
  };
};
