/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {Card, Caption, Colors, withTheme, Divider} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {CardStyle} from '../../../../../globalstyles/styles';
import {connect} from 'react-redux';
import {getDateByFormat} from '../../../../../utils/DateFormatter';
import {compose} from 'redux';

const EXPENSE_HISTORY_ICON = require('dynamic_modules/src/assets/icons/expense.png');

const ReportHistory = props => {
  const {expenseDetailsData} = props;
  const {colors} = props.theme;
  const _renderItem = ({item}) => {
    const empty = '';
    return (
      <View style={{flex: 1, width: 170}}>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Text>{item.NewStatus.Value || empty}</Text>
        </View>
        <View style={styles.iconLine}>
          <View style={{flexDirection: 'column'}}>
            <FontAwesome5 name="dollar-sign" color="#34496E" size={20} solid />
          </View>
          <View style={styles.line} />
        </View>
        <View style={styles.lineText}>
          <Caption style={{paddingBottom: 10}}>
            {getDateByFormat(item.StatusChangeDate, 'L') || ''}
          </Caption>
        </View>
      </View>
    );
  };
  const _renderHeader = () => {
    return (
      <View style={styles.lineHeader}>
        <View style={styles.iconLine}>
          <View style={styles.col}>
            <Image
              style={{width: 40, height: 40}}
              source={EXPENSE_HISTORY_ICON}
            />
          </View>
          <View style={styles.line} />
        </View>
      </View>
    );
  };
  const _renderFooter = () => {
    return (
      <View style={styles.lineFooter}>
        <View style={styles.iconLine}>
          <View style={styles.col}>
            <FontAwesome5
              name="caret-right"
              color={colors.action}
              size={25}
              solid
              style={styles.footerEndIcon}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Card elevation={4} style={CardStyle.root}>
        <Card.Title
          title="Report History"
          left={lProps => (
            <View
              style={[CardStyle.roundIcon, {backgroundColor: Colors.amber50}]}
              {...lProps}>
              <FontAwesome5
                name="history"
                color={Colors.amber900}
                size={20}
                light
              />
            </View>
          )}
        />
        <Divider />
        <Card.Content style={styles.cardContent}>
          <FlatList
            data={
              expenseDetailsData &&
              expenseDetailsData.ExpenseHistories &&
              expenseDetailsData.ExpenseHistories.Data.sort(
                (a, b) => a.ExpenseHistoryId - b.ExpenseHistoryId,
              )
            }
            renderItem={_renderItem}
            keyExtractor={item => item.ExpenseHistoryId.toString()}
            horizontal
            ListHeaderComponent={_renderHeader}
            ListFooterComponent={_renderFooter}
          />
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    marginTop: 20,
    marginBottom: 10,
  },
  col: {
    flexDirection: 'column',
    paddingBottom: 10,
  },
  line: {
    borderTopColor: '#34495E',
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
  },
  lineHeader: {
    flex: 1,
    paddingBottom: 15,
    width: 100,
  },
  iconLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  lineText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerEndIcon: {
    alignItems: 'center',
    alignContent: 'center',
  },
  lineFooter: {
    flex: 1,
    width: 100,
    paddingBottom: 10,
  },
});

const mapStateToProps = ({ExpenseSecondaryReducer}) => ({
  expenseDetailsData: ExpenseSecondaryReducer.expenseDetails,
});
const withConnect = connect(
  mapStateToProps,
  null,
);
export default compose(
  withConnect,
  withTheme,
)(ReportHistory);
