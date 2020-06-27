import React from 'react';
import {Field} from 'redux-form';
import RFDatePicker from '../ReduxFormComponents/RFDatePicker';

const DateTimePickerReduxForm = props => {
  const {
    name,
    required,
    visible,
    mode,
    defaultValue,
    onCancel,
    onPressVisible,
  } = props;
  return (
    <Field
      name={name}
      defaultValue={defaultValue}
      component={RFDatePicker}
      required={required}
      mode={mode}
      isVisible={visible}
      onCancel={onCancel}
      onPressVisible={onPressVisible}
    />
  );
};

export default DateTimePickerReduxForm;
