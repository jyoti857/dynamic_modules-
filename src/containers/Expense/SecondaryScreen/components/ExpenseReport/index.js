/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import ExpenseCard from './ExpenseCard';
import {connect} from 'react-redux';
import {View, ScrollView} from 'react-native';
import ReportDetails from './ReportDetails';
import {Grid, Row, Col} from 'react-native-easy-grid';
import ReportHistory from './ReportHistory';
import ReportItems from '../ReportItems';

const ExpenseReport = props => {
  const {expenseDetails} = props;
  console.log('Expense Report =---->', expenseDetails);
  return (
    <ScrollView style={{marginBottom: 30}}>
      <View>
        <ExpenseCard
          expenseDetail={expenseDetails && expenseDetails.ExpenseDetail}
        />
      </View>
      <View>
        <ReportDetails />
      </View>
      <View>
        <ReportItems />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = ({ExpenseSecondaryReducer}) => {
  console.log(
    'map state to Props Expense report --->',
    ExpenseSecondaryReducer,
  );
  return {
    expenseDetails: ExpenseSecondaryReducer.expenseDetails,
  };
};
const withConnect = connect(
  mapStateToProps,
  null,
);

export default withConnect(ExpenseReport);
