import React from 'react';

import Communications from 'react-native-communications';
import {PixelRatio, Dimensions} from 'react-native';

export const Util = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
};

export const find75PercentWidthOfView = width => {
  const viewFullWidth = width;
  const width75Percent = (75 * viewFullWidth) / 100;
  const width25percent = viewFullWidth - width75Percent;
  return {width75Percent, width25percent};
};
export const openEmail = email => {
  if (email) {
    Communications.email([email], null, null, '', '');
  }
  return null;
};
export const openPhone = number => {
  if (number) {
    Communications.phonecall(number, true);
  }
  return null;
};
export const openWeb = url => {
  if (url) {
    Communications.web(url);
  }
  return null;
};
