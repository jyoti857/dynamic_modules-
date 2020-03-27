import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Dropdown as MaterialDropdown} from 'react-native-material-dropdown';

class RFDropdown extends React.Component {
  onChangeHandler = event => {
    const {input, onChangeTrigger} = this.props;
    input.onChange(event);
    // if (onChangeTrigger) {
    //   onChangeTrigger();
    // }
  };
  render() {
    const {
      required,
      input,
      label,
      data,
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
          label={required ? `${label}*` : label}
          data={data}
          style={styles.dropDown}
          value={input.value}
          onChangeText={this.onChangeHandler}
          error={hasError ? `${label} is required` : null}
          labelFontSize={12}
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
