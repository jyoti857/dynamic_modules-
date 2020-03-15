import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native';
import {Provider} from 'react-redux';
import store from '../configureStore';
import Login from '../containers/Login/components/Login';
import AppRouter from '../routers';
import {NavigationContainer} from '@react-navigation/native';

const login = require('../assets/images/login1.png');
const App = props => {
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
  //   const appRouter = true ? <SignIn /> : <AppRouter />;
  const AuthFlow = () => {
    return (
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    );
  };
  return (
    <Provider store={store}>
      <AuthFlow />
    </Provider>
  );
};

export default App;
