import produce from 'immer';
import {SET_IND_CONEXIONS, SET_ORG_CONEXIONS} from './constants';

export const conexionInitialState = {
  individualConexions: [],
  organizationConexions: [],
  createConexion: {
    data: {},
    types: '',
  },
};

const conexionStore = (state = conexionInitialState, action) =>
  produce(state, draft => {
    const draftState = draft;
    switch (action.type) {
      case SET_IND_CONEXIONS: {
        console.log(
          'from Conexions reducer----------------------------------------------------------',
        );
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
      default:
        return state;
    }
  });
export default conexionStore;
