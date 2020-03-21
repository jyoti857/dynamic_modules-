import * as React from 'react';
import {StatusBar, View, Image, Text} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import _ from 'lodash';

import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import AppRouter from '../../routers';
import Login from '../../containers/Login/components/Login';
import {
  dispatchUserAccessToken,
  getUserData,
} from '../../containers/Login/actions';

// added on 20th march
import {Context as authContext} from '../../Contexts/AuthContext';
const Stack = createStackNavigator();
const Authentication = props => {
  //   console.log('from authentication first line ', React.useContext(authContext));
  // const {state, signIn} = React.useContext(authContext);
  const {setUserAccessToken, accessToken, dispatchGetUserData} = props;
  //------------  start from here ----
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
      } catch (e) {
        // restoring token failed
        console.log('catch Authentication useEffect Token');
      }
      dispatch({type: 'RESTORE_TOKEN', token});
      dispatchGetUserData();
      setUserAccessToken(token);
    };
    bootstrapAsync();
  }, [setUserAccessToken, dispatchGetUserData]);

  const login = require('../../assets/images/login1.png');
  const SignIn_ = () => (
    <View style={{flex: 1}}>
      <Image
        source={login}
        style={{width: 900, height: 900, position: 'absolute'}}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <Text>fsdfsdf</Text> */}
        <Login />
      </View>
    </View>
  );
  const AppFlow = () => (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );

  if (_.isEmpty(state.userToken)) {
    return <SignIn_ />;
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
