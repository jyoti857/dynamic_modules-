import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';

const PrimaryScreen = props => {
  return (
    <View>
      <Text>Primary screen</Text>
    </View>
  );
};

const mapStateToProps = ({PrimaryOpportunityScreen}) => ({});

export default PrimaryScreen;
