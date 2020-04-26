/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';

import {StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {
  LINEAR_GRADIENT_START_VAL,
  LINEAR_GRADIENT_END_VAL,
  WHITE,
} from '../../constants';
import {connect} from 'react-redux';
import {statusColorMapper, gradientColorMapper} from '../../../mappers';
import {setExpenseStatus} from '../../actions';

const computeStatusColor = (selectedColor, status, currentStatus) => {
  return {
    color: status === currentStatus ? WHITE : selectedColor,
  };
};
const computedMainCardStyle = (selectedColor, status, currentStatus) => {
  return {
    borderTopColor: selectedColor,
    borderTopWidth: status === currentStatus ? 0 : 6,
  };
};

const AnalyticCard = props => {
  const [defaultColor, setDefaultColor] = useState([WHITE, WHITE, WHITE]);
  const [linearColor, setLinearColor] = useState([WHITE, WHITE, WHITE]);
  const [statusColor, setStatusColor] = useState(WHITE);
  const [selectedColor, setSelectedColor] = useState(WHITE);

  const {
    summary,
    currentStatus,
    expenseList,
    title,
    dispatchExpenseStatus,
    expenseQueryFilter,
  } = props;
  const {Count, Status} = props.summary;

  useEffect(() => {
    setSelectedColor(statusColorMapper(Status));
    setLinearColor(gradientColorMapper(Status));
  }, [Status]);

  // when a card is clicked
  function cardClicked() {
    dispatchExpenseStatus({
      ...expenseQueryFilter,
      status: Status,
    });
  }

  return (
    <Card
      elevation={4}
      style={[
        styles.cardStyle,
        computedMainCardStyle(selectedColor, Status, currentStatus),
      ]}
      onPress={cardClicked}>
      <LinearGradient
        start={LINEAR_GRADIENT_START_VAL}
        end={LINEAR_GRADIENT_END_VAL}
        colors={Status === currentStatus ? linearColor : defaultColor}
        style={[styles.linearGradStyle]}>
        <View style={styles.subCard}>
          <Text
            style={[
              styles.textStyle,
              {fontSize: 40},
              computeStatusColor(selectedColor, Status, currentStatus),
            ]}>
            {Count}
          </Text>
          <Text
            style={[
              styles.textStyle,
              {marginLeft: 30},
              computeStatusColor(selectedColor, Status, currentStatus),
            ]}>
            {title}
          </Text>
        </View>
      </LinearGradient>
    </Card>
  );
};
const styles = StyleSheet.create({
  linearGradStyle: {
    flex: 1,
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    // height: 100,
  },
  cardStyle: {
    borderRadius: 10,
    flex: 1,
    // paddingRight: 15,
    // paddingLeft: 15,
    margin: 10,
    // height: 100,
  },
  subCard: {
    flex: 1,
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    // padding: 20,
  },
  textStyle: {fontWeight: 'bold', fontSize: 20},
});
const mapStateToProps = ({ExpensePrimaryReducer}) => ({
  currentStatus: ExpensePrimaryReducer.expenseFilter.status,
  expenseList: ExpensePrimaryReducer.expenseList,
  expenseQueryFilter: ExpensePrimaryReducer.expenseFilter,
});
const mapDispatchToProps = dispatch => ({
  dispatchExpenseStatus: status => dispatch(setExpenseStatus(status)),
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default withConnect(AnalyticCard);
