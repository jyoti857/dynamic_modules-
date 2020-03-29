import React from 'react';
import {Field} from 'redux-form';
import RFDropdown from '../ReduxFormComponents/RFDropdown';

const Dropdown = props => {
  const {label, data, name, required, onChangeTrigger, disabled} = props;
  return (
    <Field
      label={label}
      name={name}
      data={data}
      component={RFDropdown}
      required={required}
      disabled={disabled}
      onChangeTrigger={onChangeTrigger}
    />
  );
};
export default Dropdown;
