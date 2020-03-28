import React from 'react';
import {Card, Divider, Title, Colors} from 'react-native-paper';

import {connect} from 'react-redux';
import {compose} from 'redux';

const ShareType = props => {
  const {userDDList, currentUserm, ind_shared_users} = props;

  return (
    <Card>
      <Card.Content>
        <Title>Sharing</Title>
        <Divider />
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = ({ConexionReducers}) => {
  return {
    userDropdown: ConexionReducers.userDropdown,
  };
};

export default connect(
  mapStateToProps,
  null,
)(ShareType);
