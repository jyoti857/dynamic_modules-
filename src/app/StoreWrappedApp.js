import React, {useEffect} from 'react';
import Authentication from './Authentication';
import {connect} from 'react-redux';
import {getUserData} from '../containers/Login/actions';

//---20th march
import {Provider as AuthProvider} from '../Contexts/AuthContext';

const StoreWrappedApp = props => {
  const {dispatchGetUserData} = props;
  useEffect(() => {
    console.log('#@&*@&#*&@#');
    dispatchGetUserData();
  }, [dispatchGetUserData]);
  return (
    <AuthProvider>
      <Authentication />
    </AuthProvider>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchGetUserData: () => dispatch(getUserData()),
});

export default connect(
  null,
  mapDispatchToProps,
)(StoreWrappedApp);
