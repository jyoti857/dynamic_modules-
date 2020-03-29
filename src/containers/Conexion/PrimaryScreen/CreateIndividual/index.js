import React from 'react';
import IndividualConexionForm from './IndividualConexionForm';
import {reduxForm} from 'redux-form';
import FullPageModal from '../../../../components/FullPageModal';
import {INDIVIDUAL} from '../../constants';
import {IconButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {setIndividualDetails, dispatchCreateIndividual} from '../../actions';
import {connect} from 'react-redux';
import {compose} from 'redux';

const CreateIndividual = props => {
  const {
    conexionType,
    pistine,
    submitting,
    invalid,
    handleSubmit,
    setIndividualDetails_,
    createIndividual,
  } = props;
  const _closeModal = () => {};
  const onCreateConexion = values => {
    const valuesForm = JSON.stringify(values, null, 2);
    const objForm = JSON.parse(valuesForm);
    console.log('from create individual conexion handle submit --->', objForm);
    setIndividualDetails_(objForm);
    createIndividual();
  };
  return (
    <FullPageModal
      visible={true}
      handleModalVisible={false}
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
          disabled={submitting || pistine || invalid}
        />
      }>
      <IndividualConexionForm />
    </FullPageModal>
  );
};

const mapDispatchToProps = dispatch => ({
  setIndividualDetails_: value => dispatch(setIndividualDetails(value)),
  createIndividual: () => dispatch(dispatchCreateIndividual()),
});

const ReduxForm = reduxForm({
  form: 'CREATE_INDIVIDUAL',
});
const withConnect = connect(
  null,
  mapDispatchToProps,
);
export default compose(
  ReduxForm,
  withConnect,
)(CreateIndividual);
