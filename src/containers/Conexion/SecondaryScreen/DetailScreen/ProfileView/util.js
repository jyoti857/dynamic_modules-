import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import _ from 'lodash';
import * as Colors from '../../../../../utils/colorConstants';
import {CREATOR, MANAGER} from '../../../constants';

const EMPTY_TEXT = <Text>--</Text>;

export const getTitleName = (title, displayame) => {
  if (title) {
    return `${title}. ${displayame}`;
  }
  return displayame;
};

export const getOrgName = (jobTitle, org) => {
  if (!_.isEmpty(org)) {
    if (jobTitle && !_.isEmpty(org)) {
      return `${jobTitle} at ${org.Name.trim()}`;
    }
    if (jobTitle) {
      return jobTitle + org.Name.trim();
    }
    return org.Name.trim();
  }
  return EMPTY_TEXT;
};

export const getEmail = email => {
  if (email) {
    return <Title style={styles.headerText}>{email}</Title>;
  }
  return EMPTY_TEXT;
};

export const getPhone = phone => {
  if (phone) {
    return <Title style={styles.headerText}>{phone}</Title>;
  }
  return EMPTY_TEXT;
};

export const getContact = (email, phone) => {
  let contactBuffer = '';
  if (email) {
    contactBuffer = email;
  }
  if (phone) {
    if (contactBuffer !== '') {
      contactBuffer += ',';
    }
    contactBuffer += `${phone}`;
  }
  return <Text style={styles.headerText}>{contactBuffer}</Text>;
};
export const getCreateBy = createdBy => {
  if (createdBy) {
    return <Text style={styles.headerText}>{createdBy.Name}</Text>;
  }
  return EMPTY_TEXT;
};

export const getHomePage = page => {
  if (page) {
    return (
      <Text style={styles.headerText}>
        {page}>{page}
      </Text>
    );
  }
  return EMPTY_TEXT;
};

export const getShareUser = role => {
  if (role === CREATOR) {
    return Colors.ORANGE;
  }
  if (role === MANAGER) {
    return Colors.GREEN;
  }
  return Colors.PURPLE;
};
const styles = StyleSheet.create({
  headerText: {
    color: '#283747',
    margin: 5,
  },
  createdBy: {
    color: '#283747',
    margin: 5,
    fontSize: 18,
    fontStyle: 'italic',
  },
});
