import React from 'react';
import LottieView from 'lottie-react-native';
import {View, StyleSheet} from 'react-native';
import {Colors, Subheading} from 'react-native-paper';

const noAddress = require('../../assets/lottie/noAddress.json');
const NoData = props => {
  const {height, width, displayText} = props;
  return (
    <View style={styles.root}>
      <Subheading style={styles.text}>{displayText || 'No data'}</Subheading>
      <LottieView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          //   flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor: 'transparent',
          width: width || 100,
          height: height || 100,
        }}
        source={noAddress}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  text: {
    // alignContent: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.grey500,
  },
});

export default NoData;
