import React from 'react';

import {View} from 'react-native';
import Details from './Details';
import Communication from './Communication';

const IndividualConexionForm = props => {
  return (
    <View>
      <Details />
      <Communication />
    </View>
  );
};

export default IndividualConexionForm;
