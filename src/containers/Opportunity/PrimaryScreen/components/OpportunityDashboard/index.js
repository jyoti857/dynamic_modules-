import React from 'react';
import {ScrollView, Text} from 'react-native';
import {Row} from 'react-native-easy-grid';

const OpportunityDashboard = props => {
  const renderOpps = () => {
    const oppsAray = [];
    return <Text>Render opps frmo Opportunity Dashboard</Text>;
  };
  return (
    <ScrollView>
      <Row>{renderOpps()}</Row>
    </ScrollView>
  );
};

export default OpportunityDashboard;
