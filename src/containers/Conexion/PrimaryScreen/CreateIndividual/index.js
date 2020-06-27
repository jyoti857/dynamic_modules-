import React from 'react';
import IndividualConexionForm from './IndividualConexionForm';
import {reduxForm} from 'redux-form';
import FullPageModal from '../../../../components/FullPageModal';
import {INDIVIDUAL, CREATE_CONEXION_FORM} from '../../constants';
import {IconButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  setIndividualDetails,
  dispatchCreateIndividual,
  getUserDDList,
  setEditConexion,
  setIndividualModalVisibility,
  resetForm,
} from '../../actions';
import {connect} from 'react-redux';
import {compose} from 'redux';

const CreateIndividual = props => {
  const {
    conexionType,
    pristine,
    submitting,
    invalid,
    handleSubmit,
    setIndividualDetails_,
    createIndividual,
    dispatchGetUserDDList,
    dispatchSetEditConexion,
    dispatchConexionModalState,
    dispatchResetForm,
    modalState,
  } = props;
  const _closeModal = () => {
    dispatchSetEditConexion(false);
    dispatchConexionModalState(false);
    dispatchResetForm();
  };
  const onCreateConexion = values => {
    const valuesForm = JSON.stringify(values, null, 2);
    const objForm = JSON.parse(valuesForm);
    console.log('from create individual conexion handle submit --->', objForm);
    setIndividualDetails_(objForm);
    createIndividual();
    dispatchGetUserDDList();
  };
  return (
    <FullPageModal
      visible={modalState}
      handleModalVisible={_closeModal}
      modalHeaderText={
        conexionType === INDIVIDUAL
          ? 'Create Individual'
          : 'Create Organization'
      }
      modalHeaderRightComponent={
        <IconButton
          icon={() => (
            <FontAwesome name="check-circle" color="#fff" size={25} solid />
          )}
          color="#fff"
          onPress={handleSubmit(onCreateConexion)}
          disabled={submitting || pristine || invalid}
        />
      }>
      <IndividualConexionForm />
    </FullPageModal>
  );
};
const mapStateToProps = ({ConexionReducer}) => {
  return {
    modalState: ConexionReducer.conexionModal,
  };
};
const mapDispatchToProps = dispatch => ({
  setIndividualDetails_: value => dispatch(setIndividualDetails(value)),
  createIndividual: () => dispatch(dispatchCreateIndividual()),
  dispatchGetUserDDList: () => dispatch(getUserDDList()),
  dispatchSetEditConexion: value => dispatch(setEditConexion(value)),
  dispatchConexionModalState: visibility =>
    dispatch(setIndividualModalVisibility(visibility)),
  dispatchResetForm: () => dispatch(resetForm(CREATE_CONEXION_FORM)),
});

const ReduxForm = reduxForm({
  form: CREATE_CONEXION_FORM,
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  ReduxForm,
  withConnect,
)(CreateIndividual);
