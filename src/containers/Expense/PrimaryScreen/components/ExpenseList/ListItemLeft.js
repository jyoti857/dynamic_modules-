/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground, Text} from 'react-native';
import {AvatarStyle} from '../../../../../globalstyles/styles';

const avatar = require('../../../../../assets/icons/avatarorg.png');

const ListItemLeft = props => {
  const {avatarProp, value} = props;
  return (
    <ImageBackground
      source={avatar}
      style={AvatarStyle.root}
      imageStyle={{borderRadius: 25}}
      {...avatarProp}>
      <Text>{value && value.split('-')[0]}</Text>
      <Text>{value && value.split('-')[1]}</Text>
    </ImageBackground>
  );
};

export default ListItemLeft;
