import React from 'react';
import {Field} from 'redux-form';
import RFMultiSelectDD from '../ReduxFormComponents/RFMultiSelectDD';

const MultiSelectDD = props => {
  const {label, items, name, required, icon, onSelect, avatarColor} = props;

  return (
    <Field
      label={label}
      items={items}
      name={name}
      component={RFMultiSelectDD}
      icon={icon}
      required={required}
      onSelect={onSelect}
      avatarColor={avatarColor}
    />
  );
};

export default MultiSelectDD;
