/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {FlatList, ImageBackground, StyleSheet} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import {Card, Title, Subheading} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {CARD_BORDER_RADIUS} from '../../../../../../utils/valueConstants';

const profileBG = require('dynamic_modules/src/assets/images/opps.png');

const FlatListHeader = props => {
  const [fadeValue] = useState(new Animated.Value(1));
  const {delay, color1, color2, title, totalAmount, oppAmount} = props;
  useEffect(() => {
    Animated.timing(fadeValue, {
      toValue: 1,
      easing: Easing.Value,
      duration: 1200,
      delay: delay * 200,
      useNativeDriver: true,
    });
    return () => {
      null;
    };
  });
  return (
    <Animated.View>
      <Card>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={[color1, color2]}
          style={{flex: 1, borderRadius: CARD_BORDER_RADIUS}}>
          <ImageBackground
            source={profileBG}
            imageStyle={{borderRadius: CARD_BORDER_RADIUS}}
            style={styles.imageBG}
          />
          <Card.Content>
            <Title>{title}</Title>
            <Subheading>
              {totalAmount} | {oppAmount}
            </Subheading>
          </Card.Content>
        </LinearGradient>
      </Card>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  imageBG: {},
});

export default FlatListHeader;
