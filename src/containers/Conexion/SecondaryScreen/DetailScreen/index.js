import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {getConexionDetails} from '../../actions';
import ProfileView from './ProfileView/Individual';
import Menus from '../../../../components/Menu';
import {Menu, withTheme} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {compose} from 'redux';

const DetailScreen = props => {
  const [title, setTitle] = useState('Profile');
  const {colors} = props.theme;
  const {
    navigation,
    route,
    dispatchGetConexionDetails,
    conexionDetails,
  } = props;
  const renderMobileOption = () => {
    <Menus size={18}>
      <Menu.Item
        title="Edit"
        icon={() => <FontAwesome name="edit" size={20} color={colors.action} />}
      />
      <Menu.Item
        title="Delete"
        icon={() => (
          <FontAwesome name="trash" size={20} color={colors.action} />
        )}
      />
      <Menu.Item
        title="Navigate"
        icon={() => <FontAwesome name="street-view" size={20} />}
      />
    </Menus>;
  };
  navigation.setOptions({
    headerTitle: title,
    headerRight: () => renderMobileOption(),
  });
  console.log('navigation -> ', navigation, '\n routes -->', route);
  const {selectedId} = route.params;
  useEffect(() => {
    dispatchGetConexionDetails();
  }, [dispatchGetConexionDetails]);
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <ProfileView conexionDetails={conexionDetails} />
    </ScrollView>
  );
};

const mapStateToProps = ({ConexionReducer}) => ({
  conexionDetails: ConexionReducer.individualConexionDetails,
});
const mapDispatchToProps = dispatch => ({
  dispatchGetConexionDetails: () => dispatch(getConexionDetails()),
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withTheme,
)(DetailScreen);
