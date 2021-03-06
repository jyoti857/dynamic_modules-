import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar} from 'react-native';
import {LINEAR_END, LINEAR_START} from '../utils/valueConstants';
import * as colors from '../utils/colorConstants';
const GradientBackground = () => (
  <LinearGradient
    style={{flex: 1}}
    start={LINEAR_START}
    end={LINEAR_END}
    // colors={colors.DEAFULT_HEADER}
    colors={['#6a11cb', '#2575fc']}>
    <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor="transparent"
    />
  </LinearGradient>
);

export default GradientBackground;
