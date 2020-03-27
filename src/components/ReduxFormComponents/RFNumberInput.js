import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';

const RFNumberInput = props => {
  const {
    input,
    label,
    required,
    HelperText,
    defaultValue,
    disabled,
    onChangeTrigger,
    meta: {error, touched},
  } = props;
  let hasError = false;

  const onChangeHandler = event => {
    input.onChange(event);
    if (onChangeTrigger) {
      onChangeTrigger(input.value);
    }
  };
  if (touched && error) {
    hasError = true;
  }
  if (disabled && error) {
    hasError = true;
  }
  return (
    <View style={styles.margin}>
      <TextInput
        {...input}
        onChange={event => onChangeHandler(event)}
        value={input.value || defaultValue}
        label={required ? `${label}*` : label}
        keyboardType="numeric"
        error={hasError}
        style={{width: '100%'}}
        disabled={disabled}
      />
      {touched && error ? (
        <HelperText type="error" visible={hasError}>
          {HelperText || error || `${label} is required`}
        </HelperText>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    margin: 8,
  },
});

export default RFNumberInput;
