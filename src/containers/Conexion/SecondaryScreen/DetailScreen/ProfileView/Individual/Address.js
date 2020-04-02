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
import {Row, Col} from 'react-native-easy-grid';
import _ from 'lodash';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {CardStyle} from '../../../../../../globalstyles/styles';

// import {
//   CardStyle,
//   MenuStyle,
//   AvatarStyle,
// } from '../../../../../../globalstyles/styles';
// import Config from '../../../../config';

const Address = props => {
  const {data} = props;
  const {colors} = props.theme;
  const renderAddress = () => {
    if (data.Addresses && data.Addresses.length > 0) {
    }
  };
  console.log('dsidsio', data);
  return (
    <View>
      <Card style={{margin: 10, borderRadius: 10}}>
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
                // light
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
        <View />
      </Card>
    </View>
  );
};

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
