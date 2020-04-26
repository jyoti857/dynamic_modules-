import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

const profileBG = require('../../../../../assets/images/cardbg4.png');
const SIMCARD = require('../../../../../assets/icons/simcardchip.png');

const ExpenseCard = props => {
  return (
    <Card style={styles.cardRoot} elevation={4}>
      <ImageBackground
        source={profileBG}
        style={styles.imageBG}
        imageStyle={styles.imageBorder}
      />
    </Card>
  );
};
const styles = StyleSheet.create({
  cardRoot: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  imageBorder: {
    borderRadius: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBG: {
    height: 180,
    width: 380,
    borderTopEndRadius: 30,
  },
});
export default ExpenseCard;
