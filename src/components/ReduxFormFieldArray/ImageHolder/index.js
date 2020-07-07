import React from 'react';
import {Field} from 'redux-form';
import {View, StyleSheet} from 'react-native';
import RFImageHolder from '../../ReduxFormComponents/RFImageHolder';
import FontAwesome from 'react-native-vector-icons';
import {IconButton} from 'react-nativ-paper';

const ImageHolder = props => {
  const {fields, viewImageHolder, onDeleteItem} = props;

  const onDeleteTrigger = index => {
    new Promise(resolve => {
      fields.remove(index);
      resolve();
    }).then(onDeleteItem());
  };
  return fields.map((image, index) => (
    <View styles={styles.container}>
      <Field
        name={image}
        component={RFImageHolder}
        viewImage={viewImageHolder}
      />
      <IconButton
        icon={() => (
          <FontAwesome
            name="minus-circle"
            size={20}
            color="red"
            style={styles.close}
            onPress={() => onDeleteTrigger(index)}
          />
        )}
      />
    </View>
  ));
};

const styles = StyleSheet.craete({
  container: {
    margin: 5,
  },
  cover: {
    flex: 1,
    borderRadius: 5,
  },
  close: {
    margin: 8,
    position: 'absolute',
    top: 0,
    left: 0,
    width: 25,
    height: 25,
  },
  view: {
    margin: 8,
    position: 'absolute',
    top: 0,
    right: 0,
    width: 25,
    height: 25,
  },
});

export default ImageHolder;
