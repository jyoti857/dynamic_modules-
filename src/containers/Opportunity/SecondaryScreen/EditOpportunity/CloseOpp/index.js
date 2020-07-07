import React from 'react';
import {CLOSE_OPP_FORM} from '../../constants';
import {reset} from 'redux-form';
import {connect} from 'react-redux';
import FullPageModal from '../../../../../components/FullPageModal';
import CloseOppForm from './CloseOppForm';
import {IconButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Lo from 'lodash';
import {oppCloseObjectBuilder} from '../../../mappers';
import {setCloseOppObject, closeOpp} from '../../actions';

const CloseOpp = props => {
  const {
    extraOppDD,
    dispatchFormReset,
    dispatchCloseOppModalState,
    modalOpen,
    handleSubmit,
    dispatchCloseOpp,
    dispatchSetCloseOppObject,
  } = props;
  const _closeModal = () => {
    dispatchCloseOppModalState(false);
    dispatchFormReset(CLOSE_OPP_FORM);
  };
  const onSubmit = values => {
    const valuesForm = JSON.stringify(values, null, 2);
    const objectForm = JSON.parse(valuesForm);
    const objectBuilder = oppCloseObjectBuilder(objectForm);

    dispatchSetCloseOppObject(objectBuilder);
    dispatchCloseOpp();
  };
  return (
    <FullPageModal
      hanndleModalVisible={_closeModal}
      visible={modalOpen}
      modalHeaderText="Close Opp"
      modalHeaderRightComponent={
        <IconButton
          icon={() => <FontAwesome name="check-circle" size={25} light />}
          color="#fff"
          onPress={Lo.debounce(handleSubmit(onSubmit))}
        />
      }>
      <CloseOppForm oppStageDD={extraOppDD} />
    </FullPageModal>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchFormReset: formName => dispatch(reset(formName)),
  dispatchCloseOppModalState: () => dispatch(),
  dispatchSetCloseOppObject: values => dispatch(setCloseOppObject(values)),
  dispatchCloseOpp: () => dispatch(closeOpp()),
});
const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default withConnect(CloseOpp);
