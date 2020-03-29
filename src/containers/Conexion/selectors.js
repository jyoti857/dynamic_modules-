import {conexionInitialState} from './reducer';
import {createSelector} from 'reselect';

const conexionStore = () => conexionInitialState;

export const selectIndConexions = () =>
  createSelector(
    conexionStore,
    dataState => dataState.individualConexions,
  );
export const selectIndividualDetails = ({ConexionReducer}) =>
  ConexionReducer.individualDetails;
