import * as React from 'react';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import Opportunity from '../../containers/Opportunity';
import GradientBackground from '../NavHeaderGradient';
import OpportunityDetails from '../../containers/Opportunity/SecondaryScreen';

const Opportunity_ = createStackNavigator();

const OpportunityStack = () => (
  <Opportunity_.Navigator
    initialRouteName="Oppos_jy"
    headerMode="screen"
    screenOptions={{
      headerTintColor: '#fff',
      headerStyle: {backgroundColor: 'cyan'},
    }}>
    <Opportunity_.Screen
      name="home"
      component={Opportunity}
      options={{
        title: 'Opps',
        // headerStyle: {fontSize: 20},
        // overrides the headerStyle in screenOptions
        headerBackground: () => <GradientBackground />,
      }}
    />
    <Opportunity_.Screen
      name="OpportunityDetails"
      component={OpportunityDetails}
      options={{
        title: 'opp details',
        // headerStyle: {fontSize: 20},
        headerBackground: () => <GradientBackground />,
      }}
    />
  </Opportunity_.Navigator>
);
export default OpportunityStack;
