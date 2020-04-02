import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {getConexionDetails} from '../../actions';
import ProfileView from './ProfileView/Individual';

const DetailScreen = props => {
  const {
    navigation,
    route,
    dispatchGetConexionDetails,
    conexionDetails,
  } = props;
  console.log('navigation -> ', navigation, '\n routes -->', route);
  const {selectedId} = route.params;
  useEffect(() => {
    dispatchGetConexionDetails();
  }, [dispatchGetConexionDetails]);
  return (
    <View>
      <Text>this is detail Screen of id {selectedId}</Text>
      <ProfileView conexionDetails={conexionDetails} />
    </View>
  );
};

const mapStateToProps = ({ConexionReducer}) => ({
  conexionDetails: ConexionReducer.individualConexionDetails,
});
const mapDispatchToProps = dispatch => ({
  dispatchGetConexionDetails: () => dispatch(getConexionDetails()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailScreen);
