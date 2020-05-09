import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withTheme} from 'react-native-paper';
import {
  fetchOppsStageProbability,
  fetchOpportunityMetadata,
  fetchUserDDList,
  fetchOppsStages,
} from './actions';
import OpportunityDashboard from './components/OpportunityDashboard';

const PrimaryScreen = props => {
  const {
    dispatchOppsStageProbability,
    dispatchOpportunityMetaData,
    oppsStageProbabilityData,
    showAll,
    dispatchOppsStages,
    oppsStages,
  } = props;
  useEffect(() => {
    dispatchOppsStages(showAll);
    console.log('-------->');
  }, [dispatchOppsStages, showAll]);
  console.log('opwepe, ', oppsStages);
  return (
    <View>
      <OpportunityDashboard oppsListByStage={oppsStages} />
    </View>
  );
};

const mapStateToProps = ({OpportunityPrimaryReducer}) => ({
  oppsMetaData: OpportunityPrimaryReducer.opportunityMetadata,
  oppsStageProbabilityData: OpportunityPrimaryReducer.oppsStageProbabilityData,
  oppsStages: OpportunityPrimaryReducer.oppsStages,
});
const mapDispatchtoProps = dispatch => ({
  dispatchOppsStageProbability: () => dispatch(fetchOppsStageProbability()),
  dispatchOpportunityMetaData: () => dispatch(fetchOpportunityMetadata()),
  dispatchUserDDList: () => dispatch(fetchUserDDList()),
  dispatchOppsStages: showAll => dispatch(fetchOppsStages(showAll)),
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchtoProps,
);
export default compose(
  withTheme,
  withConnect,
)(PrimaryScreen);
