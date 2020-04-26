import React from 'react';
import {View, Text} from 'react-native';
import ExpenseReport from './components/ExpenseReport';

const ExpenseSecondaryScreen = props => {
  console.log('expense secondary screen -->', props.route.params.expenseKey);
  const {expenseKey} = props.route.params;
  return (
    <View>
      <Text>This is Expense secondary screen {expenseKey}</Text>
      <ExpenseReport />
    </View>
  );
};

export default ExpenseSecondaryScreen;
