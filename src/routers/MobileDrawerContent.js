/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';

import {ScrollView, StyleSheet, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {Avatar, withTheme, Subheading, Text, Title} from 'react-native-paper';
// import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import {Row, Col} from 'react-native-easy-grid';
import AsyncStorage from '@react-native-community/async-storage';
import {DrawerItemList} from '@react-navigation/drawer';
// added import on 20th march
import {Context as authContext} from '../Contexts/AuthContext';

const MobileDrawer = props => {
  const {colors} = props.theme;
  const [displayName, setDisplayName] = useState('');
  const [avatar, setAvatar] = useState(
    'https://img.icons8.com/pastel-glyph/2x/person-male.png',
  );
  const [email, setEmail] = useState(null);

  // added on 20th march for authContext practice on trial
  const {state, signOut} = React.useContext(authContext);

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('@userdata');
    // console.log('from mobile drawer -->', userData);
    if (userData) {
      const parsed = JSON.parse(userData);
      // console.log('from mobile drawer parsed -->', parsed);
      setDisplayName(parsed.DisplayName);
      setEmail(parsed.Email);
      setAvatar(parsed.AvatarUrl);
    }
  };

  useEffect(() => {
    console.log(
      'from mobile drawer useEffect state auth context state -->',
      state.jyoti,
    );
    getUserData();
  });
  const _signoutAsync = async () => {
    await AsyncStorage.clear();
    signOut();
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.safeArea}
        forceInset={{top: 'always', horizontal: 'always'}}>
        <Row style={styles.srow}>
          <Col>
            <Avatar.Image source={{uri: avatar}} />
          </Col>
          <Col>
            <Title style={{color: 'white'}}>{displayName || 'Jyoti'} </Title>
            <Text style={{color: 'white'}}>{email || 'jyoti@cnxsi.com'}</Text>
          </Col>
        </Row>
      </SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
          <DrawerItemList {...props} />
        </ScrollView>
        <Row onPress={_signoutAsync}>
          {/* <Row> */}
          <Col style={{width: 'auto'}}>
            {/* <FontAwesome name="sign-out" size={25} color="grey" /> */}
          </Col>
          <Col style={{justifyContent: 'center'}}>
            <Subheading style={{color: 'red', fontSize: 20, margin: 20}}>
              Sign out
            </Subheading>
          </Col>
        </Row>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  row: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  footer: {
    height: 70,
    backgroundColor: '#FBFBFB',
  },
  safeArea: {
    backgroundColor: '#6208FF',
    height: 80,
  },
  srow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
export default compose(withTheme)(MobileDrawer);
