import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExpenseScreen from '../../containers/Expense';
import GradientBackground from '../NavHeaderGradient';
import ExpenseSecondaryScreen from '../../containers/Expense/SecondaryScreen';

const ExpenseStackNavigator = createStackNavigator();

const ExpenseStack = () => {
  return (
    <ExpenseStackNavigator.Navigator headerMode="screen" title="ExpenseItem">
      <ExpenseStackNavigator.Screen
        name="Expense"
        component={ExpenseScreen}
        options={{
          title: 'Expense....',
          headerTitleStyle: {fontSize: 20},
          headerBackground: () => <GradientBackground />,
        }}
      />
      <ExpenseStackNavigator.Screen
        name="ExpenseSecondaryScreen"
        component={ExpenseSecondaryScreen}
        options={{
          title: 'Expense Details',
          headerTitleStyle: {fontSize: 20},
          headerBackground: () => <GradientBackground />,
        }}
      />
    </ExpenseStackNavigator.Navigator>
  );
};

export default ExpenseStack;
