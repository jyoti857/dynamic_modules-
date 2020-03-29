import React from 'react';
import {Card, Divider, Title, Colors} from 'react-native-paper';

import {connect} from 'react-redux';
import {compose} from 'redux';
import RadioButtonGroup from '../../../../components/RadioButtonGroup';
import {shareTypeObj, shareTypes} from '../../constants';
import {View} from 'react-native';
import MultiSelectDD from '../../../../components/MultiSelectDD';
import _ from 'lodash';

const ShareType = props => {
  const {userDDList, ind_shared_users, currentUser} = props;

  const handleOnSelect = id => {
    let sharedUsers = ind_shared_users ? _.clone(ind_shared_users) : [];
    if (!sharedUsers.includes(id)) {
      sharedUsers.push(id);
    } else {
      sharedUsers = sharedUsers.filter(v => v !== id);
    }
    // create conexion form
    // edit conexion form
    // need to be created later sometime
  };

  return (
    <Card>
      <Card.Content>
        <Title>Sharing</Title>
        <Divider />
        <RadioButtonGroup
          defaultValue={shareTypeObj.PUBLIC}
          data={shareTypes}
          name="ind_shared_type"
        />
        <View>
          {props.ind_shared_type === shareTypeObj.SHARED ? (
            <MultiSelectDD
              label="select users"
              items={userDDList.filter(
                user => user.value !== currentUser.UserId,
              )}
              onSelect={handleOnSelect}
              name="ind_shared_users"
              icon="user-alt"
              avatarColor={Colors.teal500}
            />
          ) : null}
        </View>
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = ({ConexionReducer, LoginReducer}) => {
  return {
    userDropdown: ConexionReducer.userDropdown,
    currentUser: LoginReducer.user,
  };
};

export default connect(
  mapStateToProps,
  null,
)(ShareType);
