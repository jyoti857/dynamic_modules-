/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import ExpenseFAB from '../ExpenseFAB';
import ExpenseList from '../ExpenseList';
import AnalyticCard from './AnalyticCard';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const ExpenseDashboard = props => {
  // console.log("dskldsa", expenseSummary);

  const navigation = useNavigation();
  const expenseItemPress = expenseId => {
    navigation.navigate('ExpenseSecondaryScreen', {expenseKey: expenseId});
  };
  const renderCards = () => {
    const {expenseSummary} = props;
    const expenseCategory = [];
    expenseSummary.map((expense, index) =>
      expenseCategory.push(
        <AnalyticCard summary={expense} title={expense.Description} />,
      ),
    );
    return expenseCategory;
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={renderCards()}
        renderItem={({item}) => item}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        style={styles.flatListStyle}
      />
      <ExpenseList itemPress={expenseItemPress} />
      <ExpenseFAB />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListStyle: {
    padding: 10,
    paddingBottom: 0,
    minHeight: 120,
    maxHeight: 120,
    marginTop: 15,
  },
});

const mapStateToProps = ({ExpensePrimaryReducer}) => ({
  expenseSummary: ExpensePrimaryReducer.expenseSummary,
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default withConnect(ExpenseDashboard);
