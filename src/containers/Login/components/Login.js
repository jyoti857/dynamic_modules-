import React, {useState, useEffect} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectUserName, selectPassword, loginReducer__} from '../selectors';
import {
  setDispatchPassword,
  setDispatchUserName,
  dispatchSignin,
} from '../actions';

const Login = props => {
  const {dispatchSignIn, userName} = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //   useEffect(() => {
  //     console.log('use effect -->', userName);
  //   });
  return (
    <View style={styles.container}>
      <TextInput
        label="username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        style={styles.textField}
      />
      <TextInput
        label="password"
        value={password}
        onChangeText={setPassword}
        style={styles.textField}
      />
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => dispatchSignIn(username, password)}>
        Sign in
      </Button>
    </View>
  );
};

// const mapStateToProps = createStructuredSelector({
//   userName: selectUserName(),
//   password: selectPassword(),
// });

const mapStateToProps = ({LoginReducer}) => {
  return {
    userName: LoginReducer.username,
  };
};
const mapDispatchToProps = dispatch => ({
  //   setUserName: userName => dispatch(setDispatchUserName(userName)),
  //   setPassword: password => dispatch(setDispatchPassword(password)),
  dispatchSignIn: (username, password) =>
    dispatch(dispatchSignin(username, password)),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  textField: {
    width: 300,
    margin: 10,
    borderRadius: 20,
    // borderTopColor: 'red',
    // borderWidth: 10,
    borderTopStartRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    margin: 20,
    width: 200,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
