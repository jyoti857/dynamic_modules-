import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Row, Col} from 'react-native-easy-grid';
import Lo from 'lodash';
import FlatListHeader from './DashboardFlatList/FlatListHeader';

const uuidv1 = require('uuid/v1');

const OpportunityDashboard = props => {
  const {oppsListByStage} = props;
  const renderOpps = () => {
    const oppsArray = [];
    if (!Lo.isEmpty(oppsListByStage)) {
      oppsListByStage.map((opp, index) => {
        return oppsArray.push(
          <Col key={uuidv1()}>
            <View>
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
      // return <Text>Render opps frmo Opportunity Dashboard</Text>;
    }
  };
  return (
    <ScrollView>
      <Row>{renderOpps()}</Row>
    </ScrollView>
  );
};

export default OpportunityDashboard;
