/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {FlatList, ImageBackground, StyleSheet, View, Text} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import {Card, Title, Subheading} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {CARD_BORDER_RADIUS} from '../../../../../../utils/valueConstants';
import {CardStyle} from '../../../../../../globalstyles/styles';

// const profileBG = require('dynamic_modules/src/assets/images/opps.png');
const profileBG = require('../../../../../../assets/images/opps.png');

const FlatListHeader = props => {
  const [fadeValue] = useState(new Animated.Value(1));
  const {
    delay,
    color1,
    color2,
    title,
    totalAmount,
    oppAmount,
    noOfDeals,
  } = props;
  useEffect(() => {
    Animated.timing(fadeValue, {
      toValue: 1,
      easing: Easing.Value,
      duration: 600,
      delay: delay * 100,
      useNativeDriver: true,
    });
  });
  return (
    <Animated.View style={{flex: 1, opacity: fadeValue}}>
      <Card style={[CardStyle.root, styles.oppHeaderStyle]}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={[color1, color2]}
          style={{flex: 1, borderRadius: CARD_BORDER_RADIUS}}>
          <ImageBackground
            source={profileBG}
            imageStyle={{borderRadius: CARD_BORDER_RADIUS}}
            style={styles.imageBG}>
            <Card.Content style={{margin: 10}}>
              <Title>{title}</Title>
              <Subheading>
                {totalAmount} | {oppAmount}
              </Subheading>
              <Text>{`${noOfDeals} Deals`}</Text>
            </Card.Content>
          </ImageBackground>
        </LinearGradient>
      </Card>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  imageBG: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
  },
  oppHeaderStyle: {
    marginTop: 0,
    flex: 1,
    width: 300,
    backgroundColor: 'transparent',
  },
});

export default FlatListHeader;
