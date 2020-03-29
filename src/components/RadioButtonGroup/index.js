import React from 'react';
import {Field} from 'redux-form';
import RFRadioButton from '../ReduxFormComponents/RFRadioButton';

const RadioButtonGroup = props => {
  const {data, name, required, defaultValue} = props;
  return (
    <Field
      data={data}
      requied={required}
      name={name}
      defaultValue={defaultValue}
      component={RFRadioButton}
    />
  );
};

export default RadioButtonGroup;
