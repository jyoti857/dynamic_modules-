import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {Row, Col} from 'react-native-easy-grid';
import Lo from 'lodash';
import FlatListHeader from './DashboardFlatList/FlatListHeader';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {FAB} from 'react-native-paper';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  setCreateOpportunityModalVisibility,
  setOppQuickViewModalState,
} from '../../actions';
import {createOpportunityModalStateSelector} from '../../selectors';
import CreateOpportunity from '../CreateOpportunity';

const OpportunityDashboard = props => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const {
    oppsListByStage,
    dispatchCreateOpportunityModalState,
    dispatchOppQuickViewModalState,
    modalState,
  } = props;
  const opportunityPress = oppId => {
    navigation.navigate('OpportunityDetail', {oppKey: oppId});
  };
  const createOpportunityTrigger = modalState1 => {
    dispatchCreateOpportunityModalState(modalState1);
  };
  console.log('modal state Opps --->', modalState);
  // const fetchSelectedServiceValues = () => {
  //   const defaultItem = Lo.find(serviceMetadata, ['Selected', true]);
  //   return defaultItem ? defaultItem.Value : null;
  // };
  // const fetchSelectedDefaultStageValue = () => {
  //   const defaultItem = Lo.find(stageMetadata, ['Selected', true]);
  //   return defaultItem ? defaultItem.Value : null;
  // };
  // const fetchSelectedDealType = () => {
  //   const defaultItem = Lo.find(dealTypeMetadata, ['Selected', true]);
  //   return defaultItem ? defaultItem.Value : null;
  // };
  // const fetchSelectedLeadSourceList = () => {
  //   const defaultItem = Lo.find(leadSourceMetadata, ['Selected', true]);
  //   return defaultItem ? defaultItem.Value : null;
  // };
  // const createOppIV = {
  //   oppProbability: '_',
  //   opp_close_date: new Date(moment()),
  //   opp_owner: currentUser.UserId ? currentUser.UserId.toString() : '',
  //   opp_services: fetchSelectedServiceValues(),
  //   oppStage: fetchSelectedDefaultStageValue(),
  //   opp_deal_type: fetchSelectedLeadSourceList(),
  // };

  const renderOpps = () => {
    const oppsArray = [];
    if (!Lo.isEmpty(oppsListByStage)) {
      oppsListByStage.map((opp, index) => {
        return oppsArray.push(
          <Col>
            <View style={styles.cardHeader}>
              <FlatListHeader
                color1={opp.colors.color1}
                color2={opp.colors.color2}
                title={opp.stage}
                delay={index}
                totalAmount={opp.data.TotalAmount}
                oppAmount={opp.data.WeightedOppAmount}
              />
            </View>
          </Col>,
        );
      });
      return <Text>Render opps frmo Opportunity Dashboard</Text>;
    }
  };
  return (
    <View style={styles.parentView}>
      <ScrollView>
        <Row>{renderOpps()}</Row>
        <CreateOpportunity modalOpen={modalState} />
      </ScrollView>
      {isFocused ? (
        <FAB
          icon="plus"
          color="white"
          onPress={() => {
            console.log('from fab ', modalState);
            return createOpportunityTrigger(true);
          }}
          style={styles.fab}
        />
      ) : null}
    </View>
  );
};

// const mapStateToProps = createStructuredSelector({
//   createModal: createOpportunityModalStateSelector(),
// });
const mapStateToProps = ({OpportunityPrimaryReducer}) => {
  console.log('dslds--->', OpportunityPrimaryReducer);
  return {
    modalState: createOpportunityModalStateSelector(OpportunityPrimaryReducer),
  };
};
const mapDispatchToProps = dispatch => ({
  dispatchCreateOpportunityModalState: visibility =>
    dispatch(setCreateOpportunityModalVisibility(visibility)),
  dispatchOppQuickViewModalState: visibility =>
    dispatch(setOppQuickViewModalState(visibility)),
});

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    marginTop: 10,
    borderRadius: 10,
    // borderWidth: 2,
    borderColor: 'grey',
    // padding: 30,
    margin: 1,
  },
  cardHeader: {
    height: 120,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'blue',
  },
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default withConnect(OpportunityDashboard);
