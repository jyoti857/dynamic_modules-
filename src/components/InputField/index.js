import React from 'react';
import {Field} from 'redux-form';
import {StyleSheet} from 'react-native';
import RFTextInput from '../ReduxFormComponents/RFTextInput';
import RFNumberInput from '../ReduxFormComponents/RFNumberInput';

export const TextInput = props => {
  const {
    label,
    name,
    required,
    helperText,
    multiline,
    disabled,
    defaultValue,
    onChangeTrigger,
  } = props;
  return (
    <Field
      style={styles.field}
      label={label}
      component={RFTextInput}
      required={required}
      onChangeTrigger={onChangeTrigger}
      defaultValue={defaultValue}
      name={name}
      multiline={multiline}
      helperText={helperText}
    />
  );
};

const styles = StyleSheet.create({
  field: {
    width: '100%',
    marginTop: 5,
  },
});

export const NumberInput = props => {
  const {
    label,
    name,
    required,
    helperText,
    onChangeTrigger,
    defaultValue,
    disabled,
  } = props;
  return (
    <Field
      label={label}
      name={name}
      component={RFNumberInput}
      required={required}
      helperText={helperText}
      onChangeTrigger={onChangeTrigger}
      defaultValue={defaultValue}
      disabled={disabled}
    />
  );
};
