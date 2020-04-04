import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native';
import {Provider} from 'react-redux';
import store from '../configureStore';
import Login from '../containers/Login/components/Login';
import AppRouter from '../routers';
import {NavigationContainer} from '@react-navigation/native';
import Authentication from './Authentication';
import StoreWrappedApp from './StoreWrappedApp';
import {Provider as PaperProvider} from 'react-native-paper';
import {paperTheme as themes} from '../theme/react-native-paper';

const App = props => {
  const [isTablet, setIsTablet] = useState(false);

  const paperTheme = {
    ...themes,
    isTablet,
  };
  return (
    <PaperProvider theme={paperTheme}>
      <Provider store={store}>
        <StoreWrappedApp />
      </Provider>
    </PaperProvider>
  );
};

export default App;
