import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Dropdown as MaterialDropdown} from 'react-native-material-dropdown';

class RFDropdown extends React.Component {
  onChangeHandler = event => {
    const {input, onChangeTrigger} = this.props;
    input.onChange(event);
    if (onChangeTrigger) {
      onChangeTrigger();
    }
  };
  render() {
    const {
      required,
      input,
      label,
      data,
      disabled,
      meta: {error, touched},
      ...inputProps
    } = this.props;
    let hasError = false;
    if (required && touched && error) {
      hasError = true;
    }
    return (
      <View style={styles.parentView}>
        <MaterialDropdown
          {...inputProps}
          itemTextStyle={styles.picker}
          label={required ? `${label}*` : label}
          style={styles.dropDown}
          data={data}
          // labelTextStyle={styles.label}
          // titleTextStyle={styles.font}
          labelFontSize={12}
          value={input.value}
          onChangeText={this.onchangeHandler}
          onBlur={input.onBlur}
          error={hasError ? `${label} is required` : null}
          textColor="rgba(0, 0, 0, 0.8)"
          baseColor="rgba(0, 0, 0, 0.5)"
          disabled={disabled}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentView: {
    margin: 8,
    marginBottom: 0,
    marginTop: 0,
  },
  dropDown: {
    margin: 8,
    marginTop: 0,
    marginBottom: 0,
  },
});
export default RFDropdown;
