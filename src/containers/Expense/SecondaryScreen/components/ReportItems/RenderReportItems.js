/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Row, Col} from 'react-native-easy-grid';
import {Card} from 'react-native-paper';

const itemAvatar = require('../../../../../assets/icons/avatarorg.png');

const RenderReportItem = props => {
  const LeftCol = props => {
    return (
      <ImageBackground
        source={itemAvatar}
        imageStyle={{borderRadius: 40}}
        style={{height: 50, width: 50}}>
        <Text>kdslsf</Text>
        <Text>kdslsfadnkad</Text>
      </ImageBackground>
    );
  };
  return (
    <View>
      <Card>
        <Row>
          <Col>
            <LeftCol />
          </Col>
        </Row>
      </Card>
    </View>
  );
};
export default RenderReportItem;
