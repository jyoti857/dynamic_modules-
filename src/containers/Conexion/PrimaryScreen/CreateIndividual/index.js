import React from 'react';
import IndividualConexionForm from './IndividualConexionForm';
import {reduxForm} from 'redux-form';
import FullPageModal from '../../../../components/FullPageModal';

const CreateIndividual = props => {
  const _closeModal = () => {};
  return (
    <FullPageModal visible={true} handleModalVisible={false}>
      <IndividualConexionForm />
    </FullPageModal>
  );
};

const ReduxForm = reduxForm({
  form: 'CREATE_INDIVIDUAL',
});

export default ReduxForm(CreateIndividual);
