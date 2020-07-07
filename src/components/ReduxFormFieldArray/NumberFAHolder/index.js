import React from 'react';

import {Field} from 'redux-form';
import RFNumberInput from '../../ReduxFormComponents/RFNumberInput';

const NumberFAHolder = props => {
  const {fields, fieldLabels} = props;
  return fields.map((field, index) => (
    <Field
      key={`key${index}`}
      name={field}
      label={fieldLabels[index].name}
      required={fieldLabels[index].required}
      component={RFNumberInput}
    />
  ));
};

export default NumberFAHolder;
