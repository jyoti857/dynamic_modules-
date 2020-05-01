import React from 'react';
import {View, Text} from 'react-native';
import {Card, Caption} from 'react-native-paper';

const ReportHistory = props => {
  return (
    <View>
      <Text>sdlm.d report history</Text>
      <Card elevation={4}>
        <Card.Title>
          <Caption>this is report history caption</Caption>
        </Card.Title>
      </Card>
    </View>
  );
};
export default ReportHistory;
