import React from 'react';
import {View, Text} from 'react-native';
import FABUI from './PrimaryScreen/UIComponents/FAB';
import PrimaryScreen from './PrimaryScreen';

const Conexion = props => {
  const {} = props;
  return (
    <View>
      <PrimaryScreen />
      <FABUI />
    </View>
  );
};

export default Conexion;
