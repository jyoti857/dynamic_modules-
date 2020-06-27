import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';

const RFTextInput = props => {
  const {
    input,
    label,
    required,
    HelperText,
    multiline,
    disabled,
    defaultValue,
    onChangeTrigger,
    meta: {error, touched},
    ...inputProps
  } = props;
  let hasError = false;
  if (required && touched && error) {
    hasError = true;
  }
  const onChangeHandler = event => {
    input.onChange(event);
    if (onChangeTrigger) {
      onChangeTrigger();
    }
  };
  return (
    <View style={styles.item}>
      <TextInput
        {...inputProps}
        label={required ? `${label}*` : label}
        onChange={onChangeHandler}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value || defaultValue}
        style={{width: '100%'}}
        error={hasError}
        disabled={disabled}
        multiline={multiline}
        maxLength={2000}
        mode="outlined"
        underlineColor={'transparent'}
      />
      {required && hasError ? (
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

export default RFTextInput;
