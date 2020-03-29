import React from 'react';

import {View, StyleSheet} from 'react-native';
import {Paragraph, RadioButton, TouchableRipple} from 'react-native-paper';
import {Text} from 'react-native';
import {Col, Row} from 'react-native-easy-grid';

class RFRadioButton extends React.Component {
  touchableClickChange = value => {
    this.props.input.onChange(value);
  };

  render() {
    const {
      input,
      required,
      data,
      defaultValue,
      meta: {error, touched},
      ...inputProps
    } = this.props;
    let hasError = false;
    let errorField = null;
    if (required && touched && error) {
      hasError = true;
      if (typeof error === 'string') {
        errorField = <Text>{`${error}`}</Text>;
      }
    }
    return (
      <View>
        <RadioButton.Group
          value={input.value || defaultValue}
          onValueChange={input.onChange}
          {...inputProps}>
          <Row>
            {data.map(radio => (
              <Col key={radio.key}>
                <TouchableRipple>
                  <View style={styles.row}>
                    <Paragraph>{radio.label}</Paragraph>
                    <RadioButton value={radio.label} />
                  </View>
                </TouchableRipple>
              </Col>
            ))}
          </Row>
        </RadioButton.Group>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  label: {
    fontWeight: '400',
    marginLeft: 10,
    color: '#C0392B',
  },
  parentView: {
    margin: 10,
    marginTop: 0,
    marginBottom: 0,
  },
});

export default RFRadioButton;
