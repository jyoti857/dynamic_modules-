import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Connect} from 'react-redux';
import {
  Divider,
  Card,
  IconButton,
  Text,
  withTheme,
  Menu,
  Colors,
} from 'react-native-paper';
import {Grid, Row, Col} from 'react-native-easy-grid';
import _ from 'lodash';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {CardStyle, AvatarStyle} from '../../../../../../globalstyles/styles';
import NoData from '../../../../../../components/NoData';
import Menus from '../../../../../../components/Menu';

const Address = props => {
  const {data} = props;
  const {colors} = props.theme;

  const HOME = (
    <View style={AvatarStyle.root}>
      <FontAwesome name="home" color={colors.action} size={15} />
    </View>
  );
  const WORK = (
    <View style={AvatarStyle.root}>
      <FontAwesome name="briefcase" color={colors.action} size={15} />
    </View>
  );
  const OTHER = (
    <View style={AvatarStyle.root}>
      <FontAwesome name="map-marker" size={15} />;
    </View>
  );
  const getAddress = type => {
    if (type === 'HOME') {
      return HOME;
    }
    if (type === 'WORK') {
      return WORK;
    }
    return OTHER;
  };
  const renderAddressCard = () => {
    if (data.Addresses && data.Addresses.length > 0) {
      return data.Addresses.map(add => (
        <View
          key={add.ConexionAddressId}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            padding: 20,
            marginVertical: 5,
            flexDirection: 'row',
          }}>
          <Row style={styles.leftCol} size={10}>
            {getAddress(add.AddressType)}
          </Row>
          <Text style={{justifyContent: 'center', marginRight: 40}}>
            {add.DisplayAddress}
          </Text>
          <Menus style={{marginLeft: -60}} size={18}>
            <Menu.Item
              title="Edit"
              icon={() => (
                <FontAwesome name="edit" size={20} color={colors.action} />
              )}
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
          </Menus>
        </View>
      ));
    }
    return (
      <NoData
        displayText=" no Adress found for this individual"
        width={150}
        height={150}
      />
    );
  };
  return (
    <View style={styles.parentView}>
      <Card elevation={10} style={CardStyle.root}>
        <Card.Title
          title="Address"
          left={lProps => (
            <View
              style={[CardStyle.roundIcon, {backgroundColor: Colors.green100}]}
              {...lProps}>
              <FontAwesome
                name="address-card-o"
                color={Colors.green900}
                size={20}
                light
              />
            </View>
          )}
          right={rProps => (
            <IconButton
              {...rProps}
              icon={() => (
                <FontAwesome
                  name="plus-circle"
                  color={colors.primary}
                  size={30}
                  light
                />
              )}
              color={colors.primary}
            />
          )}
        />
        <Divider />
        <View style={styles.cardContent}>{renderAddressCard()}</View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  parentView: {
    // flex: 1,
  },
  cardContent: {
    paddingBottom: 10,
    marginVertical: 2,
    // flex: 1,
  },
  leftCol: {
    // width: 'auto',
    // alignContent: 'flex-start',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    paddingRight: 5,
    // paddingLeft: 5,
    marginRight: 40,
  },
  rightCol: {
    // width: 'auto',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 200,
  },
  addressText: {
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 3,
  },
});
const mapStateToProps = ({ConexionReducer}) => ({
  details: ConexionReducer.individualConexionDetails,
});

const withConnect = connect(
  null,
  null,
);
export default compose(
  withConnect,
  withTheme,
)(Address);
