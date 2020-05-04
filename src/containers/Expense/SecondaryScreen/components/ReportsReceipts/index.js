import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Card, withTheme, Colors, Divider} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {CardStyle} from '../../../../../globalstyles/styles';
import NoData from '../../../../../components/NoData';
import ReportReceiptItem from './ReportReceiptItems';
import {connect} from 'react-redux';
import {compose} from 'redux';

const ReportReceipts = props => {
  const {colors} = props.theme;
  const {expenseDetailsData} = props;
  console.log('expense details data ------->', expenseDetailsData);
  const renderReceipts = () => {
    return (
      <FlatList
        data={
          expenseDetailsData &&
          expenseDetailsData.ExpenseReceipts &&
          expenseDetailsData.ExpenseReceipts.Data
        }
        renderItem={({item}) => (
          <ReportReceiptItem
            item={item}
            id={item.ExpenseId}
            blobUrl={encodeURI(item.BlobUrl)}
            isDeleteEnabled={expenseDetailsData.ExpenseUIActions.EnableEdit}
          />
        )}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <NoData displayText="No receipts attached for this expense" />
        }
      />
    );
  };
  return (
    <View>
      <Card style={CardStyle.root} elevation={4}>
        <Card.Title
          title="Report Receipts"
          left={() => {
            return (
              <View
                style={[styles.cardStyle, {backgroundColor: Colors.pink50}]}>
                <FontAwesome5
                  name="receipt"
                  size={20}
                  light
                  color={Colors.pink900}
                />
              </View>
            );
          }}
        />
        <Divider />
        <Card.Content>
          <View>{renderReceipts()}</View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    height: 45,
    width: 45,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = ({ExpenseSecondaryReducer}) => {
  return {
    expenseDetailsData: ExpenseSecondaryReducer.expenseDetails,
  };
};
const withConnect = connect(
  mapStateToProps,
  null,
);
export default compose(
  withConnect,
  withTheme,
)(ReportReceipts);
