import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
// import {createM} from '@react-navigation/material-bottom-tabs';
// import {isTablet} from 'react-native-device-detection';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {withTheme, Colors} from 'react-native-paper';
import {compose} from 'redux';
import jwt from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';
import MobileDrawerContent from './MobileDrawerContent';
import ConexionStack from './Stacks/ConexionStack';

const Drawer = createDrawerNavigator();

// const ModuleIcon = props => {
//   const {name, iProps} = props;

//   return (
//     <FontAwesome5
//       name={name}
//       size={18}
//       color={iProps.color}
//       solid={iProps.focused}
//     />
//   );
// };

const AppRouter = () => {
  const [roles, setRoles] = React.useState([]);
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let token;
      try {
        token = await AsyncStorage.getItem('@appusertoken');
        const decoded = jwt(token);
        setRoles(decoded.role);
      } catch (e) {}
    };
    bootstrapAsync();
  }, []);

  return (
    <Drawer.Navigator
      initialRouteName="Conexion Navigator"
      drawerContentOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        activeBackgroundColor: '#1724d',
        itemStyle: {
          flexDirection: 'row',
          marginVertical: 5,
          marginHorizontal: 6,
        },
        labelStyle: {fontSize: 16},
      }}
      drawerContent={dProps => <MobileDrawerContent {...dProps} />}>
      <Drawer.Screen
        name="Conexion"
        options={{
          drawerLabel: 'Conexion',
          //   drawerIcon: iProps => <ModuleIcon name="analytics" iProps={iProps} />,
        }}>
        {() => <ConexionStack />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

// export default compose(withTheme)(AppRouter);
export default AppRouter;
