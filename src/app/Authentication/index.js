import * as React from 'react';
import {StatusBar, View, Image, Text} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import AppRouter from '../../routers';
import Login from '../../containers/Login/components/Login';
import {
  dispatchUserAccessToken,
  getUserData,
} from '../../containers/Login/actions';

const Stack = createStackNavigator();
const Authentication = props => {
  const {setUserAccessToken, accessToken, dispatchGetUserData} = props;

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          console.log('from authentication reducer -->', prevState);
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            userToken: null,
          };
        default:
          return null;
      }
    },
    {
      userToken: null,
      isLoading: false,
    },
  );
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let token;
      try {
        token = await AsyncStorage.getItem('@appusertoken');
        console.log(
          'from authentication useEffect token state-->',
          //   token,
          //   state.userToken,
        );
      } catch (e) {
        // restoring token failed
        console.log('catch Authentication useEffect Token');
      }
      dispatch({type: 'RESTORE_TOKEN', token});
      dispatchGetUserData();
      setUserAccessToken(token);
    };
    bootstrapAsync();
  }, [accessToken, setUserAccessToken, dispatchGetUserData]);

  //   React.useEffect(() => {
  //     console.log('Signout useEffect Authentication useReducer');
  //     dispatch({type: 'SIGN_OUT'});
  //   }, [accessToken]);

  //   React.useEffect(() => {
  //     // hoping for calling userGetData action here, let's see
  //     dispatchGetUserData();
  //   }, [dispatchGetUserData]);

  const login = require('../../assets/images/login1.png');
  const SignIn = () => (
    <View style={{flex: 1}}>
      <Image
        source={login}
        style={{width: 900, height: 900, position: 'absolute'}}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>fsdfsdf</Text>
        <Login />
      </View>
    </View>
  );
  const AppFlow = () => (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );

  if (!state.userToken) {
    return <SignIn />;
  }
  return <AppFlow />;
};
const mapStateToProps = ({LoginReducer}) => ({
  accessToken: LoginReducer.token,
});
const mapDispatchToProps = dispatch => ({
  dispatchGetUserData: () => dispatch(getUserData()),
  setUserAccessToken: token => dispatch(dispatchUserAccessToken(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Authentication);
