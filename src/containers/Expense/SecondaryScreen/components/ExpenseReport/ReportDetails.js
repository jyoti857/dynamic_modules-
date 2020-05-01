/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  Card,
  Colors,
  withTheme,
  IconButton,
  Divider,
  DataTable,
  Caption,
} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {compose} from 'redux';
const ReportDetails = props => {
  const {ExpenseUIActions, ExpenseDetail} = props.expenseDetails;
  const {colors} = props.theme;
  console.log('from ioee report details --->', props);
  return (
    <View>
      <Card elevation={4} style={styles.cardRoot}>
        <Card.Title
          title="Report Details"
          left={lProps => {
            return (
              <View
                style={[
                  styles.iconRoundBackground,
                  {backgroundColor: Colors.indigo50},
                ]}
                {...lProps}>
                <FontAwesome
                  name="file-invoice-dollar"
                  color={colors.primary}
                  size={20}
                />
              </View>
            );
          }}
          right={rProps => {
            return (
              <View {...rProps} style={styles.cardRight}>
                {ExpenseUIActions.EnableSubmit ? (
                  <IconButton
                    icon={() => (
                      <FontAwesome
                        name="paper-plane"
                        color={colors.primary}
                        size={20}
                        light
                      />
                    )}
                    color={colors.primary}
                  />
                ) : null}
                {ExpenseUIActions.EnableSubmit ? (
                  <IconButton
                    icon={() => (
                      <FontAwesome
                        name="edit"
                        size={20}
                        color={colors.primary}
                        light
                      />
                    )}
                    color={colors.primary}
                  />
                ) : null}
                {ExpenseUIActions.EnableSubmit ? (
                  <IconButton
                    icon={() => (
                      <FontAwesome
                        name="trash-alt"
                        color={colors.primary}
                        size={20}
                        light
                      />
                    )}
                    colors={colors.primary}
                  />
                ) : null}
              </View>
            );
          }}
        />
        <Divider />
        <Card.Content>
          <DataTable>
            <ScrollView style={{height: 150}}>
              <DataTable.Row>
                <View>
                  <Caption>Report Name</Caption>
                  <Text>{ExpenseDetail && ExpenseDetail.ReportName}</Text>
                </View>
              </DataTable.Row>
              <DataTable.Row>
                <View>
                  <Caption>BusinessUnit</Caption>
                  <Text>
                    {ExpenseDetail && ExpenseDetail.BusinessUnit.Value}
                  </Text>
                </View>
              </DataTable.Row>
              <DataTable.Row>
                <View>
                  <Caption>Cont center</Caption>
                  <Text>{ExpenseDetail && ExpenseDetail.CostCenter.Value}</Text>
                </View>
              </DataTable.Row>
              <DataTable.Row>
                <View>
                  <Caption>Business Purpose</Caption>
                  <Text>{ExpenseDetail && ExpenseDetail.BusinessPurpose}</Text>
                </View>
              </DataTable.Row>
              <DataTable.Row>
                <View>
                  <Caption>Created on</Caption>
                  <Text>{ExpenseDetail && ExpenseDetail.CreatedDate}</Text>
                </View>
              </DataTable.Row>
            </ScrollView>
          </DataTable>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardRoot: {
    // flex: 1,
    borderRadius: 10,
    margin: 10,
    // backgroundColor: 'cyan',
  },
  iconRoundBackground: {
    width: 45,
    height: 45,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardRight: {
    flexDirection: 'row',
    padding: 20,
  },
});
const mapStateToProps = ({ExpenseSecondaryReducer}) => ({
  expenseDetails: ExpenseSecondaryReducer.expenseDetails,
});
const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withConnect,
  withTheme,
)(ReportDetails);
