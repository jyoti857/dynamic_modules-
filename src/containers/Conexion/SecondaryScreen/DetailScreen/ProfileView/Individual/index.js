import React from 'react';
import {View} from 'react-native';
import Address from './Address';
import Communications from './Communication';
import {Card, Title} from 'react-native-paper';
import {getTitle} from '../util';

const ProfileView = props => {
  const {conexionDetails} = props;

  const ProfileCard = () => {
    return (
      <Card>
        <Card.Title title={<Title>{getTitle(conexionDetails.Title)}</Title>} />
      </Card>
    );
  };
  return (
    <View>
      <ProfileCard />
      <Communications data={conexionDetails} />
      <Address data={conexionDetails} />
    </View>
  );
};

export default ProfileView;
