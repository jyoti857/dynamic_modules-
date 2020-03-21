import React, {useState} from 'react';
import {Card, Subheading, Title, Avatar} from 'react-native-paper';
import {View} from 'react-native';

import {
  ImageBackground,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import {ListCardStyle, AvatarStyle} from '../../../../globalstyles/styles';
const avatar = require('../../../../assets/icons/indavatar.png');
const getIndSubDetails = conexion => {
  let sub = '';
  if (conexion.Organization) {
    sub += `${conexion.Organization.Name.trim()}`;
  }
  if (conexion.BusinessEmailAddress) {
    if (sub) {
      sub += ', ';
    }
    sub += `${conexion.BusinessEmailAddress.trim()}`;
  }
  if (conexion.BusinessTelephoneNumber) {
    if (sub) {
      sub += ', ';
    }
    sub += `${conexion.BusinessTelephoneNumber.trim()}`;
  }
  return sub;
};

const getIndAvatarText = (firstName, lastName) => {
  if (firstName && lastName) {
    const fn = firstName.toUpperCase().split('')[0];
    const ln = lastName.toUpperCase().split('')[0];
    return fn + ln;
  }
  return '';
};

const RenderListItem = props => {
  //   const [pressValue] = user;
  const {delay, onPressItem, item} = props;
  return (
    <Card key={item.ConexionId} style={(ListCardStyle.root, {width: '100%'})}>
      <Card.Title
        title={<Subheading>{item.DisplayName.trim()}</Subheading>}
        subtitle={getIndSubDetails(item)}
        left={leftProps => (
          <ImageBackground
            source={avatar || null}
            style={AvatarStyle.root}
            imageStyle={{borderRadius: 25}}
            {...leftProps}>
            <Title style={{color: '#000'}}>
              {getIndAvatarText(item.Name.trim(), item.LastName.trim())}
            </Title>
          </ImageBackground>
        )}
      />
    </Card>
  );
};

export default RenderListItem;
