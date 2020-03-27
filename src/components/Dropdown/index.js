import React from 'react';
import {Field} from 'redux-form';
import RFDropdown from '../ReduxFormComponents/RFDropdown';

// simple dropdown
import {Dropdown as MaterialDropDown} from 'react-native-material-dropdown';

const Dropdown = props => {
  const {label, data, name, required, onChangeTrigger, disabled} = props;
  return (
    <Field
      label={label}
      //   name={name}
      data={data}
      component={RFDropdown}
      //   required={required}
      //   disabled={disabled}
      //   onChangeTrigger={onChangeTrigger}
    />
  );
};
export default Dropdown;

const SimpleDropdown = props => {
  return (
    <MaterialDropDown
      data={[
        {
          value: 'Banana',
        },
        {
          value: 'Mango',
        },
        {
          value: 'Pear',
        },
      ]}
      label="simple"
    />
  );
};

export {SimpleDropdown};
