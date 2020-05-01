/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {statusColorMapper} from '../../../mappers';
import _ from 'lodash';

const profileBG = require('../../../../../assets/images/cardbg4.png');
const SIMCARD = require('../../../../../assets/icons/simcardchip.png');

const ExpenseCard = props => {
  const {expenseDetail} = props;
  return (
    <Card style={styles.cardRoot} elevation={4}>
      <ImageBackground
        source={profileBG}
        style={styles.imageBG}
        imageStyle={styles.imageBorder}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', flex: 1, margin: 15}}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
              }}>
              <FontAwesome
                name="circle"
                size={18}
                color={statusColorMapper(
                  !_.isEmpty(expenseDetail) && expenseDetail.CurrentStatus.Code,
                )}
              />
              <Text style={{paddingLeft: 10}}>
                {!_.isEmpty(expenseDetail) && expenseDetail.CurrentStatus.Value}
              </Text>
            </View>
            <View
              style={{
                alignItems: 'flex-end',
                flex: 1,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 25}}>
                ${!_.isEmpty(expenseDetail) && expenseDetail.TotalAmount}
              </Text>
              <Text style={{fontWeight: '500', fontSize: 10}}>
                Total Amount
              </Text>
            </View>
          </View>
          <View>
            <View style={{marginLeft: 10}}>
              <Image source={SIMCARD} style={{height: 60, width: 60}} />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 14, fontWeight: '700'}}>
                {`XXXX XXXXX ${expenseDetail &&
                  expenseDetail.ExpenseKey.split('-')[0]} ${expenseDetail &&
                  expenseDetail.ExpenseKey.split('-')[1]}`}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', margin: 10, flex: 1}}>
            <View style={{flex: 1}}>
              <Text>Created By</Text>
              <Text>{expenseDetail && expenseDetail.CreatedBy.Name}</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Text>Report Date</Text>
              <Text>{expenseDetail && expenseDetail.ReportDate}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </Card>
  );
};
const styles = StyleSheet.create({
  cardRoot: {
    // flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  imageBorder: {
    borderRadius: 20,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  imageBG: {
    height: 190,
    width: 400,
    // borderTopEndRadius: 10,
    // margin: 40,
  },
});
export default ExpenseCard;
