import React, {useEffect} from 'react';
import Authentication from './Authentication';
import {connect} from 'react-redux';
import {getUserData} from '../containers/Login/actions';

const StoreWrappedApp = props => {
  const {dispatchGetUserData} = props;
  useEffect(() => {
    console.log('#@&*@&#*&@#');
    dispatchGetUserData();
  }, [dispatchGetUserData]);
  return <Authentication />;
};

const mapDispatchToProps = dispatch => ({
  dispatchGetUserData: () => dispatch(getUserData()),
});

export default connect(
  null,
  mapDispatchToProps,
)(StoreWrappedApp);
