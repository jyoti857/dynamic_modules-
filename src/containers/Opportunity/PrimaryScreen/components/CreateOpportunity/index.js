import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CreateOpportunityForm from './CreateOpportunityForm';
import {OPP_FORM} from '../../constants';
import {reduxForm} from 'redux-form';
import FullPageModal from 'dynamic_modules/src/components/FullPageModal';
import {
  setCreateOpportunityModalVisibility,
  setNewOpportunity,
} from '../../actions';
import {connect} from 'react-redux';
import {compose} from 'redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {IconButton} from 'react-native-paper';
import Lo from 'lodash';
import {objectBuilder} from '../../../mappers';
import {CREATE_OPP} from '../../constants';

const CreateOpportunity = props => {
  const [calledForm] = useState(CREATE_OPP);
  const {
    modalOpen,
    dispatchCreateOpportunityModalVisibility,
    createNewOpportunity,
    handleSubmit,
    submitting,
    invalid,
    pristine,
  } = props;
  const _closeModal = () => {
    dispatchCreateOpportunityModalVisibility(false);
  };
  const onSubmit = values => {
    const serviceArr = [];
    const valueForm = JSON.stringify(values, null, 2);
    const objectForm = JSON.parse(valueForm);
    serviceArr.push(objectForm.opp_services);
    const objectBuilder1 = objectBuilder(objectForm, serviceArr);
    createNewOpportunity(objectBuilder1);
  };
  return (
    <FullPageModal
      visible={modalOpen}
      handleModalVisible={_closeModal}
      modalHeaderRightComponent={
        <IconButton
          icon={() => (
            <FontAwesome name="check-circle" color="#fff" size={25} solid />
          )}
          color="#fff"
          onPress={Lo.debounce(handleSubmit(onSubmit), 500, {trailing: true})}
          disabled={submitting || pristine || invalid}
        />
      }>
      <ScrollView>
        <CreateOpportunityForm calledForm={calledForm} />
      </ScrollView>
    </FullPageModal>
  );
};

const reduxFormOpportunity = reduxForm({
  form: OPP_FORM,
  enableReinitialize: true,
  destroyOnUnmount: true,
  keepDirtyOnReinitialize: false,
});

const mapDispatchToProps = dispatch => ({
  dispatchCreateOpportunityModalVisibility: modalState =>
    dispatch(setCreateOpportunityModalVisibility(modalState)),
  createNewOpportunity: value => dispatch(setNewOpportunity(value)),
});
const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  reduxFormOpportunity,
)(CreateOpportunity);
