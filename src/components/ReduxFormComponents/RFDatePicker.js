import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {HelperText} from 'react-native-paper';
import moment from 'moment';

const RFDatePicker = props => {
  console.log('RF date picker --->', input);
  let {
    setDatePickerVisibility,
    isVisible,
    mode,
    required,
    helperText,
    input,
    onCancel,
    onPressVisible,
    ...inputProps
  } = props;
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    onCancel();
  };
  //   const handleDateSelected = event => {
  //     input.onChange(event);
  //     onCancel();
  //   };
  const hideDatePicker = event => {
    input.onChange(event);
    onCancel();
  };
  let hasError = false;
  return (
    <View>
      <DateTimePickerModal
        {...inputProps}
        isVisible={isVisible}
        mode={mode || 'date'}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        titleStyle={styles.textStyle}
        confirmTextStyle={styles.textStyle}
        cancelTextStyle={styles.cancelStyle}
        date={input.value || new Date(moment())} // new Date() is the default value
      />
      {required ? (
        <HelperText type="error" visible={hasError}>
          {helperText || 'this field is required'}
        </HelperText>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    margin: 8,
  },
  textStyle: {
    color: 'blue',
    fontSize: 20,
  },
  cancelStyle: {
    color: 'grey',
    fontSize: 20,
  },
});
export default RFDatePicker;
