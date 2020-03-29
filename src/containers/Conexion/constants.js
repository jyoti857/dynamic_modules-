export const GET_IND_CONEXIONS = '@DYNAMIC/GET_IND_CONEXIONS';
export const SET_IND_CONEXIONS = '@DYNAMIC/SET_IND_CONEXIONS';

export const GET_ORG_CONEXIONS = '@DYNAMIC/GET_ORG_CONEXIONS';
export const SET_ORG_CONEXIONS = '@DYNAMIC/SET_ORG_CONEXIONS';
export const INDIVIDUAL = '@DYNAMIC/INDIVIDUAL';
export const ORGANIZATION = '@DYNAMIC/ORGANIZATION';

export const FETCH_DD_METADATA = '@DYNAMIC/FETCH_DD_METADATA';
export const SAVE_DD_METADATA = '@DYNAMIC/SAVE_DD_METADATA';
export const GET_ORG_DD_VALUE = '@DYNAMIC/GET_ORG_DD_VALUE';
export const SAVE_ORG_DD_VALUE = '@DYNAMIC/SAVE_ORG_DD_VALUE';
export const GET_USER_DD_VALUE = '@DYNAMIC/GET_USER_DD_VALUE';
export const SAVE_USER_DD_VALUE = '@DYNAMIC/SAVE_USER_DD_VALUE';

export const CREATE_INDIVIDUAL = '@DYNAMIC/CREATE_INDIVIDUAL';

export const CREATE_CONEXION_FORM = 'createConexion';

export const SET_INDIVIDUAL_MODAL = '@DYNAMIC/SET_INDIVIDUAL_MODAL';
export const SET_INDIVIDUAL_DETAILS = '@DYNAMIC/SET_INDIVIDUAL_DETAILS';

export const SET_EDIT_CONEXION = '@DYNAMIC/SET_EDIT_CONEXION';
export const METADATA_VARIABLE =
  'title,suffix,address_type,country_list,conexion_contact_preference';

export const PAGE_CONFIG = {pageNumber: 1, pageSize: 20};
export const STATUS = [
  {
    key: 'ACTIVE',
    value: 'ACTV',
    label: 'Active',
  },
  {
    key: 'INACTIVE',
    value: 'INAC',
    label: 'Inactive',
  },
];

export const shareTypeObj = {
  PRIVATE: 'PRIV',
  PUBLIC: 'PUBL',
  SHARED: 'SHAR',
};

export const shareTypes = [
  {value: 'PUBL', label: 'Public', key: 0},
  {value: 'PRIV', label: 'Private', key: 1},
  {value: 'SHAR', label: 'Shared', key: 3},
];
