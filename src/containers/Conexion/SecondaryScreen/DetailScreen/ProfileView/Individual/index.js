import React from 'react';
import {View} from 'react-native';
import Address from './Address';
import Communications from './Communication';

const ProfileView = props => {
  const {conexionDetails} = props;
  return (
    <View>
      <Communications data={conexionDetails} />
      <Address data={conexionDetails} />
    </View>
  );
};

export default ProfileView;
