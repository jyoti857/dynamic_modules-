import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ConexionScreen from '../../containers/Conexion';
import GradientBackground from '../NavHeaderGradient';
import DetailScreen from '../../containers/Conexion/SecondaryScreen/DetailScreen';

const Conexion = createStackNavigator();

const ConexionStack = () => (
  <Conexion.Navigator
    screenOptions={{headerTintColor: 'white'}}
    headerMode="screen">
    <Conexion.Screen
      name="conexionPrimaryScreen"
      component={ConexionScreen}
      options={{
        title: 'Conexion',
        headerTitlestyle: {
          fontSize: 20,
        },
        headerBackground: () => <GradientBackground />,
      }}
    />
    <Conexion.Screen
      name="ConexionSecondaryScreen"
      component={DetailScreen}
      options={{
        title: 'Individual Details',
        headerTitleStyle: {fontSize: 20},
        headerBackground: () => <GradientBackground />,
      }}
    />
  </Conexion.Navigator>
);

export default ConexionStack;
