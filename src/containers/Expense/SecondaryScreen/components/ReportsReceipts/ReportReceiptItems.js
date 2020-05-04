import React from 'react';
import {Card, IconButton, withTheme} from 'react-native-paper';
import {View, Image, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const loaderImage = require('dynamic_modules/src/assets/images/imgloader.png');

const ReportReceiptItem = props => {
  const {blobUrl, isDeleteEnabled} = props;
  const {colors} = props.theme;
  return (
    <Card style={styles.cardStyle}>
      {blobUrl.includes('.pdf') ? (
        <View style={styles.cardContainerStyle}>
          <FontAwesome5 name="file-pdf" color="#ff0000" size={30} soild />
        </View>
      ) : (
        <Image
          resizeMethod="cover"
          source={{isStatic: false, uri: blobUrl}}
          style={styles.imageContainer}
          defaultSource={loaderImage}
        />
      )}
      {isDeleteEnabled ? (
        <IconButton
          icon={() => (
            <FontAwesome5 name="trash" size={15} color={colors.accent} />
          )}
          style={styles.close}
        />
      ) : null}
    </Card>
  );
};
const styles = StyleSheet.create({
  cardStyle: {
    margin: 5,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'column',
    width: 90,
    height: 90,
  },
  cardContainerStyle: {justifyContent: 'center', alignItems: 'center', flex: 1},
  imageContainer: {
    height: 90,
    width: 90,
    borderRadius: 10,
  },
  close: {
    margin: 13,
    position: 'absolute',
    top: 0,
    left: 0,
    width: 30,
    height: 30,
  },
});

export default withTheme(ReportReceiptItem);
