import React from 'react';
import {FlatList, Text} from 'react-native';
import ExpenseListItem from './ExpenseListItem';
import _ from 'lodash';
import {Card, Divider} from 'react-native-paper';
import {getExpenseList} from '../../actions';
import {connect} from 'react-redux';

class ExpenseList extends React.Component {
  componentWillMount() {
    const {fetchExpenseList} = this.props;
    fetchExpenseList();
  }
  renderExpenseList = () => {
    const {expenseList, searchQuery} = this.props;
    // console.log('expense list from renderExpense list @*@&$@', expenseList);
    if (
      searchQuery &&
      searchQuery.searchString &&
      _.isEmpty(searchQuery && searchQuery.searchResult)
    ) {
      return expenseList;
    }
    // return searchQuery && searchQuery.searchResult;
    return expenseList;
  };
  renderListEmpty = () => {
    return (
      <Card>
        <Card.Content>
          {this.props.searchQuery && this.props.searchQuery.searchString ? (
            <Text>We found no expense with Search text</Text>
          ) : (
            <Text>We found no expense, You can create one</Text>
          )}
        </Card.Content>
      </Card>
    );
  };
  render() {
    return (
      <FlatList
        data={this.renderExpenseList()}
        renderItem={({item, index}) => (
          <ExpenseListItem
            item={item}
            delay={index % 10}
            itemPress={this.props.itemPress}
          />
        )}
        keyExtractor={item => item.ExpenseId && item.ExpenseId.toString()}
        ListEmptyComponent={this.renderListEmpty}
        ItemSeparatorComponent={() => <Divider />}
      />
    );
  }
}
const mapStateToProps = ({ExpensePrimaryReducer}) => ({
  expenseList: ExpensePrimaryReducer.expenseList,
});
const mapDispatchToProps = dispatch => ({
  fetchExpenseList: () => dispatch(getExpenseList()),
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(ExpenseList);
