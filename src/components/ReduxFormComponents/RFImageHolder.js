/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

const pdfImage = require('dynamic_modules/src/assets/images/bgimage.jpg');
const loaderImage = require('dynamic_modules/src/assets/images/bgimage.jpg');

const RFImageHolder = props => {
  const {input, viewImage, ...inputProps} = props;
  const isUrl = s => {
    const regexp = /(ftp|http|https):/;
    return regexp.test(s);
  };
  if (input.value.includes('.pdf')) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          width: 90,
          height: 90,
        }}>
        <Image
          resizeMethod="auto"
          style={styles.imageContainerPdf}
          defaultSource={pdfImage}
        />
      </View>
    );
  }
  return (
    <TouchableRipple onPress={() => viewImage(input.value)}>
      <Image
        {...inputProps}
        source={{
          isStatic: !isUrl(input.value),
          uri: isUrl(input.value)
            ? input.value
            : `data:image/jpeg;base64,
           ${input.value}`,
        }}
        style={styles.imageContainer}
        defaultSource={loaderImage}
      />
    </TouchableRipple>
  );
};
const styles = StyleSheet.create({
  imageContainerPdf: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
});
export default RFImageHolder;
