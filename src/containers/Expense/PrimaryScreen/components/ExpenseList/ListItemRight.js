/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Title} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {statusColorMapper} from '../../../mappers';

const ListItemRight = props => {
  const {item} = props;
  return (
    <View style={{flexDirection: 'column', marginRight: 10}}>
      <View
        style={{
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <Title>{`${item.Currency && item.Currency.Value}${
            item.TotalAmount
          }`}</Title>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <Text style={{fontSize: 10, paddingRight: 5}}>
            {item.CurrentStatus && item.CurrentStatus.Value}
          </Text>
          <FontAwesome
            name="circle"
            color={statusColorMapper(
              item.CurrentStatus && item.CurrentStatus.Code,
            )}
            size={12}
          />
        </View>
      </View>
    </View>
  );
};

export default ListItemRight;
