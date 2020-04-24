import React from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const ExpenseFAB = props => {
  return (
    <FAB
      style={styles.fab}
      small
      icon="plus"
      //   label="extended tab jy"
      onPress={() => {
        console.log('item pressed');
      }}
    />
  );
};
const styles = StyleSheet.create({
  fab: {
    right: 16,
    bottom: 16,
    position: 'absolute',
  },
});

export default ExpenseFAB;
