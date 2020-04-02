import React from 'react';
import {View, Text} from 'react-native';
import Address from './Address';

const ProfileView = props => {
  const {conexionDetails} = props;
  return (
    <View>
      <Address data={conexionDetails} />
    </View>
  );
};

export default ProfileView;
