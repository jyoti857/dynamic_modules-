import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, IconButton, withTheme, Colors, Divider} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {compose} from 'redux';
import RenderReportItem from './RenderReportItems';

const ReportItems = props => {
  const {colors} = props.theme;
  const {ExpenseUIActions, ExpenseDetail} = props.expenseDetails;
  return (
    <View style={styles.main}>
      <Card style={styles.cardRoot}>
        <Card.Title
          style={styles.cardTitle}
          title="Report Items"
          left={lProps => (
            <View
              style={[styles.iconBackground, {backgroundColor: Colors.green50}]}
              {...lProps}>
              <IconButton
                icon={() => (
                  <FontAwesome5
                    name="list-ul"
                    color={Colors.green90}
                    size={20}
                    light
                  />
                )}
                color={Colors.green100}
              />
            </View>
          )}
          right={rProps =>
            ExpenseUIActions.EnableEdit ? (
              <IconButton
                icon={() => (
                  <FontAwesome5
                    name="plus-circle"
                    size={30}
                    light
                    color={Colors.indigo500}
                  />
                )}
                size={25}
                color={colors.primary}
              />
            ) : null
          }
        />
        <Divider />
        <Card.Content>
          <RenderReportItem />
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
  cardRoot: {margin: 10, borderRadius: 10},
  iconBackground: {
    height: 45,
    width: 45,
    borderRadius: 40,
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
)(ReportItems);
