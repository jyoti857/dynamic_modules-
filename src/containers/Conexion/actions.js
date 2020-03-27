import {
  GET_IND_CONEXIONS,
  SET_IND_CONEXIONS,
  GET_ORG_CONEXIONS,
  SET_ORG_CONEXIONS,
  SET_INDIVIDUAL_MODAL,
  FETCH_DD_METADATA,
  SAVE_DD_METADATA,
  GET_ORG_DD_VALUE,
  SAVE_ORG_DD_VALUE,
  SET_EDIT_CONEXION,
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

export const getMetaData = () => ({
  type: FETCH_DD_METADATA,
});

export const saveMetaData = metaData => ({
  type: SAVE_DD_METADATA,
  metaData,
});

export const getOrgDDList = () => ({
  type: GET_ORG_DD_VALUE,
});
export const saveOrgDDList = orgDDValues => ({
  type: SAVE_ORG_DD_VALUE,
  orgDDValues,
});

export const setEditConexion = value => ({
  type: SET_EDIT_CONEXION,
  value,
});
