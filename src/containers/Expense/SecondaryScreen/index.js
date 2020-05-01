import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import ExpenseReport from './components/ExpenseReport';
import {connect} from 'react-redux';
import {getExpenseDetails, setCurrentExpenseId} from './actions';

const ExpenseSecondaryScreen = props => {
  const {expenseDetails, setExpenseId} = props;
  console.log('expense secondary screen -->', props.route.params.expenseKey);
  const {expenseKey} = props.route.params;
  useEffect(() => {
    setExpenseId(expenseKey);
  }, [expenseKey, setExpenseId]);
  useEffect(() => {
    expenseDetails();
  }, [expenseDetails]);
  return (
    <View>
      <Text>This is Expense secondary screen {expenseKey}</Text>
      <ExpenseReport />
    </View>
  );
};
const mapDispatchToProps = dispatch => ({
  expenseDetails: () => dispatch(getExpenseDetails()),
  setExpenseId: id => dispatch(setCurrentExpenseId(id)),
});
const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default withConnect(ExpenseSecondaryScreen);
