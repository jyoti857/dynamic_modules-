import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Opportunity from '../../containers/Opportunity';

const Opportunity_ = createStackNavigator();

const OpportunityStack = () => (
  <Opportunity_.Navigator
    initialRouteName="Oppos_jy"
    headerMode="screen"
    screenOptions={{
      headerTintColor: 'tomato',
      headerStyle: {backgroundColor: 'cyan'},
    }}>
    <Opportunity_.Screen name="home" component={Opportunity} />
  </Opportunity_.Navigator>
);
export default OpportunityStack;
