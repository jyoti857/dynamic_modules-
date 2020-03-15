import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ConexionScreen from '../../containers/Conexion';
import GradientBackground from '../NavHeaderGradient';

const Conexion = createStackNavigator();

const ConexionStack = () => (
  <Conexion.Navigator
    screenOptions={{headerTintColor: 'blue'}}
    headerMode="screen">
    <Conexion.Screen
      name="conexionPrimaryScreen"
      component={ConexionScreen}
      options={{
        title: 'Conexion',
        headerTitlestyle: {
          fontSize: 20,
        },
        // headerBackground: () => <GradientBackground />,
      }}
    />
  </Conexion.Navigator>
);

export default ConexionStack;
