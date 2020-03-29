import React from 'react';

import {View} from 'react-native';
import Details from './Details';
import Communication from './Communication';
import ShareType from './ShareType';

const IndividualConexionForm = props => {
  return (
    <View>
      <Details />
      <Communication />
      <ShareType />
    </View>
  );
};

export default IndividualConexionForm;
