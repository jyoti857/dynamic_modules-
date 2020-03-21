import React, {useState, useEffect} from 'react';
import {Card, Subheading, Title} from 'react-native-paper';
import {
  ImageBackground,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import {AvatarStyle, ListCardStyle} from '../../../../globalstyles/styles';
const avatar = require('../../../../assets/icons/avatarorg.png');

const getOrgSubDetails = conexion => {
  let sub = '';
  if (conexion.BusinessHomePage) {
    sub += `${conexion.BusinessHomePage.trim()},`;
  }
  if (conexion.BusinessTelephoneNumber) {
    sub += `${conexion.BusinessTelephoneNumber.trim()}`;
  }
  return sub;
};

const getOrgAvatarText = name => {
  const nameSplit = name.toUpperCase().split('')[0];
  return nameSplit;
};
const RenderOrgListItem = props => {
  const {delay, item} = props;
  return (
    <TouchableWithoutFeedback>
      <Card>
        <Card.Title
          title={<Subheading>{item.DisplayName.trim()}</Subheading>}
          subtitle={getOrgSubDetails(item)}
          left={leftProps => (
            <ImageBackground
              source={avatar || null}
              style={AvatarStyle.root}
              imageStyle={{borderRadius: 25}}
              {...leftProps}>
              <Title>{getOrgAvatarText(item.Name, item.LastName)}</Title>
            </ImageBackground>
          )}
        />
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default RenderOrgListItem;
