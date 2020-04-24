import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Address from './Address';
import Communications from './Communication';
import {Card, Title, Avatar, Colors, withTheme, FAB} from 'react-native-paper';
import {getTitleName, getOrgName, getCreateBy} from '../util';
import {CardStyle} from '../../../../../../globalstyles/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {openEmail, openPhone} from '../../../../../../utils';
import EditConexion from '../../../EditConexion';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {setEditConexionModal} from '../../../../actions';
import {editConexionMapper} from '../../../../mappers';
import {INDIVIDUAL} from '../../../../constants';

const ProfileView = props => {
  const {conexionDetails, dispatchIndEditModalState, editModal} = props;

  // let mappedValues = null;
  console.log('from mapped values ProfileView page -->', mappedValues);

  const setIndividualModalOpen = () => {
    dispatchIndEditModalState(true);
  };
  let mappedValues = useRef();

  mappedValues = editConexionMapper(conexionDetails);
  useEffect(() => {
    mappedValues;
    console.log('mapped values --->', mappedValues);
  }, []);

  const colors = props.theme;
  const linkCaption = {
    color: colors.link,
  };
  const EMPTY = '--';
  const ProfileCard = () => {
    return (
      <Card elevation={10} style={CardStyle.root}>
        <Card.Title
          title={
            <Title>
              {getTitleName(conexionDetails.Title, conexionDetails.DisplayName)}
            </Title>
          }
          subtitle={getOrgName(
            conexionDetails.JobTitle,
            conexionDetails.Organization,
          )}
          left={lProps => (
            <Avatar.Icon
              {...lProps}
              style={[CardStyle.roundIcon, {backgroundColor: Colors.cyan50}]}
              icon={() => (
                <FontAwesome
                  name="user"
                  size={20}
                  color={Colors.cyan900}
                  light
                />
              )}
            />
          )}
        />
        <Card.Content>
          <View style={[styles.row, {flexDirection: 'row'}]}>
            <View style={styles.col}>
              <FontAwesome
                name="envelope"
                size={15}
                color={Colors.indigo900}
                light
              />
            </View>
            <View>
              <Text
                style={linkCaption}
                onPress={() => {
                  openEmail(conexionDetails.BusinessEmailAddress);
                }}>
                {conexionDetails.BusinessEmailAddress || EMPTY}
              </Text>
            </View>
          </View>
          <View style={[styles.row, {flexDirection: 'row'}]}>
            <View style={styles.col}>
              <FontAwesome
                name="phone"
                size={15}
                color={Colors.indigo900}
                solid
              />
            </View>
            <View>
              <Text
                style={linkCaption}
                onPress={() => {
                  openPhone(conexionDetails.BusinessTelephoneNumber);
                }}>
                {conexionDetails.BusinessTelephoneNumber || EMPTY}
              </Text>
            </View>
          </View>
          <View style={[styles.row, {flexDirection: 'row'}]}>
            <View style={styles.col}>
              <FontAwesome
                name="user-plus"
                size={15}
                color={Colors.indigo900}
              />
            </View>
            <View>
              <Text style={linkCaption}>
                created by {getCreateBy(conexionDetails.CreatedBy)}
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    );
  };
  return (
    <View>
      <ProfileCard />
      <Communications data={conexionDetails} />
      <Address data={conexionDetails} />
      <FAB
        style={styles.fab}
        icon={() => (
          <FontAwesome name="pencil-square-o" color="#fff" size={22} />
        )}
        onPress={setIndividualModalOpen}
      />
      <EditConexion
        modalOpen={editModal}
        modalOpenClose={dispatchIndEditModalState}
        initialValues={mappedValues}
        conexionType={INDIVIDUAL}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    margin: 10,
    marginLeft: 0,
  },
  col: {
    width: '12%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  fab: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 16,
  },
});
const mapStateToProps = ({ConexionReducer}) => ({
  editModal: ConexionReducer.editConexionModal,
});
const mapDispatchToProps = dispatch => ({
  dispatchIndEditModalState: visibility =>
    dispatch(setEditConexionModal(visibility)),
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withConnect,
  withTheme,
)(ProfileView);
