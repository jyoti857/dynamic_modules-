import React from 'react';
import FullPageModal from '../../../../components/FullPageModal';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {INDIVIDUAL, EDIT_CNX_MODAL} from '../../constants';
import IndividualConexionForm from '../../PrimaryScreen/CreateIndividual/IndividualConexionForm';
import {reduxForm} from 'redux-form';
import {IconButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import {
  resetForm,
  setIndividualDetails,
  editIndividualConexion,
} from '../../actions';

const EditConexion = props => {
  const {
    modalOpen,
    conexionType,
    dispatchResetForm,
    dispatchIndividualDetails,
    dispatchEditIndividual,
    handleSubmit,
  } = props;
  const _closeModal = () => {
    const {modalOpenClose} = props;
    modalOpenClose(false);
    dispatchResetForm();
  };
  const onEditConexion = values => {
    const valuesForm = JSON.stringify(values, null, 2);
    const objForm = JSON.parse(valuesForm);
    if (conexionType === INDIVIDUAL) {
      dispatchIndividualDetails(objForm);
      dispatchEditIndividual();
    }
  };
  return (
    <FullPageModal
      visible={modalOpen}
      handleModalVisible={_closeModal}
      modalHeaderText={
        conexionType === INDIVIDUAL ? 'Edit Individual' : 'Edit Organization'
      }
      modalHeaderRightComponent={
        <IconButton
          icon={() => (
            <FontAwesome name="check-circle" size={20} color="#fff" light />
          )}
          color="#fff"
          onPress={_.debounce(handleSubmit(onEditConexion), 500, {
            trailing: true,
          })}
        />
      }>
      <IndividualConexionForm />
    </FullPageModal>
  );
};

const redux = reduxForm({
  form: EDIT_CNX_MODAL,
});
const mapStateToProps = ({ConexionReducer}) => ({
  editIndModal: ConexionReducer.editConexionModal,
});
const mapDispatchToProps = dispatch => ({
  dispatchIndividualDetails: values => dispatch(setIndividualDetails(values)),
  dispatchEditIndividual: () => dispatch(editIndividualConexion()),
  dispatchResetForm: () => dispatch(resetForm(EDIT_CNX_MODAL)),
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withConnect,
  redux,
)(EditConexion);
