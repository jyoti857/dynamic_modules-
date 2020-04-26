import React from 'react';
import ExpenseDashboard from './components/ExpenseDashboard';
import {getExpenseMetaData} from './actions';
import {connect} from 'react-redux';

class ExpensePrimaryScreen extends React.Component {
  componentWillMount() {
    this.props.fetchExpenseMetaData();
  }
  render() {
    return <ExpenseDashboard metaData={this.props.exMetaData} />;
  }
}

const mapStateToProps = ({ExpensePrimaryReducer}) => ({
  exMetaData: ExpensePrimaryReducer.expenseMetaData,
});
const mapDispatchToProps = dispatch => ({
  fetchExpenseMetaData: () => dispatch(getExpenseMetaData()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default withConnect(ExpensePrimaryScreen);
