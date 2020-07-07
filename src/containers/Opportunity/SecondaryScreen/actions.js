import {SET_CLOSE_OPP_OBJECT, CLOSE_OPP} from './constants';

export const setCloseOppObject = values => ({
  type: SET_CLOSE_OPP_OBJECT,
  values,
});

export const closeOpp = () => ({
  type: CLOSE_OPP,
});
