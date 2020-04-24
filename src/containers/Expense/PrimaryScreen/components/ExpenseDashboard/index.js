/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import ExpenseFAB from '../ExpenseFAB';
import ExpenseList from '../ExpenseList';

const ExpenseDashboard = props => {
  return (
    <View style={{flex: 1}}>
      <Text>Expense dashboard </Text>
      <ExpenseList />
      <ExpenseFAB />
    </View>
  );
};

export default ExpenseDashboard;
