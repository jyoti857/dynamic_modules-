import produce from 'immer';
import {
  SET_IND_CONEXIONS,
  SET_ORG_CONEXIONS,
  SET_INDIVIDUAL_MODAL,
  SAVE_DD_METADATA,
  SAVE_ORG_DD_VALUE,
  SET_EDIT_CONEXION,
  SAVE_USER_DD_VALUE,
  SET_INDIVIDUAL_DETAILS,
} from './constants';

export const conexionInitialState = {
  individualConexions: [],
  organizationConexions: [],
  createConexion: {
    data: {},
    types: '',
  },
  conexionModal: false,
  metaData: {},
  orgDropdown: [],
  userDropdown: [],
  individualDetails: {},
  editConexion: false,
};

const conexionStore = (state = conexionInitialState, action) =>
  produce(state, draft => {
    const draftState = draft;
    switch (action.type) {
      case SET_IND_CONEXIONS: {
        // console.log(
        //   'from Conexions reducer----------------------------------------------------------',
        // );
        if (action.indConexions.data && action.indConexions.data.length > 0) {
          if (action.indConexions.page === 1) {
            draftState.individualConexions = [];
            draftState.individualConexions = action.indConexions.data;
          } else {
            const obj = [...state.individualConexions];
            obj.push(...action.indConexions.data);
            draftState.individualConexions = obj;
          }
        }
        break;
      }
      case SET_ORG_CONEXIONS: {
        if (action.orgConexions.data && action.orgConexions.data.length > 0) {
          if (action.orgConexions.page === 1) {
            draftState.organizationConexions = [];
            draftState.organizationConexions = action.orgConexions.data;
          } else {
            const obj = [...state.organizationConexions];
            obj.push(...action.orgConexions.data);
            draftState.organizationConexions = obj;
          }
        }
        break;
      }
      case SET_INDIVIDUAL_MODAL: {
        draftState.conexionModal = action.visibility;
        break;
      }
      case SAVE_DD_METADATA: {
        draftState.metaData = action.metaData;
        break;
      }
      case SAVE_ORG_DD_VALUE: {
        draftState.orgDropdown = action.orgDDValues;
        break;
      }
      case SET_EDIT_CONEXION: {
        draftState.editConexion = action.value;
        break;
      }
      case SAVE_ORG_DD_VALUE: {
        draftState.organizationConexions = action.orgDDValues;
        break;
      }
      case SAVE_USER_DD_VALUE: {
        draftState.userDropdown = action.userDDValues;
        break;
      }
      case SET_INDIVIDUAL_DETAILS: {
        draftState.individualDetails = action.value;
        break;
      }
      default:
        return state;
    }
  });
export default conexionStore;
