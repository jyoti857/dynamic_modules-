import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native';
import {Provider} from 'react-redux';
import store from '../configureStore';
import Login from '../containers/Login/components/Login';
import AppRouter from '../routers';
import {NavigationContainer} from '@react-navigation/native';
import Authentication from './Authentication';
import StoreWrappedApp from './StoreWrappedApp';

const App = props => {
  return (
    <Provider store={store}>
      <StoreWrappedApp />
    </Provider>
  );
};

export default App;
