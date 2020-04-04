import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Card,
  DataTable,
  withTheme,
  Colors,
  Divider,
  Text,
  Caption,
} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CardStyle} from '../../../../../../globalstyles/styles';
import _ from 'lodash';
import {openWeb, openPhone} from '../../../../../../utils';

const Communications = props => {
  const {data} = props;

  if (!_.isEmpty(data)) {
    return (
      <Card elevation={10} style={CardStyle.root}>
        <Card.Title
          title="Communications"
          left={lprops => (
            <View
              style={[
                CardStyle.roundIcon,
                {backgroundColor: Colors.deepPurple50},
              ]}
              {...lprops}>
              <FontAwesome
                name="paper-plane-o"
                size={20}
                color={Colors.deepPurple900}
              />
            </View>
          )}
        />
        <Divider />
        <Card.Content>
          <DataTable>
            <View style={styles.dataTableRowView}>
              <DataTable.Row>
                <Text style={{color: 'grey'}}>Personal Email Address</Text>
                <DataTable.Cell>
                  <Text
                    style={{
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                    }}>
                    {openWeb(data.PersonalEmailAddress)}
                  </Text>
                </DataTable.Cell>
              </DataTable.Row>
            </View>
            <View style={styles.dataTableRowView}>
              <DataTable.Row>
                <Text style={{color: 'grey'}}>Mobile1 Telephone number</Text>
                <DataTable.Cell>
                  <Caption>{openPhone(data.Mobile1TelephoneNumber)}</Caption>
                </DataTable.Cell>
              </DataTable.Row>
            </View>
            <View style={styles.dataTableRowView}>
              <DataTable.Row>
                <Text style={{color: 'grey'}}>Home Telephone Number</Text>
                <DataTable.Cell>
                  <Caption>{data.HomeTelephoneNumber}</Caption>
                </DataTable.Cell>
              </DataTable.Row>
            </View>
            <View style={styles.dataTableRowView}>
              <DataTable.Row>
                <Text style={{color: 'grey'}}>Personal Home Page </Text>
                <DataTable.Cell>
                  <Caption>{data.PersonalHomePage}</Caption>
                </DataTable.Cell>
              </DataTable.Row>
            </View>
            <DataTable.Row>
              <Text style={{color: 'grey'}}>Business Email Address</Text>
              <DataTable.Cell>
                <Caption style={{color: 'blue'}}>
                  {data.BusinessEmailAddress}
                </Caption>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <Text style={{color: 'grey'}}>Business Telephone Number</Text>
              <DataTable.Cell>
                <Caption>{data.BusinessTelephoneNumber}</Caption>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <Text style={{color: 'grey'}}>Business Fax Number </Text>
              <DataTable.Cell>
                <Caption>{data.BusinessFaxNumber}</Caption>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <Text style={{color: 'grey'}}>Business Home Page</Text>
              <DataTable.Cell>
                <Caption>{data.BusinessHomePage}</Caption>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <Text style={{color: 'grey'}}>Linkedin</Text>
              <DataTable.Cell>
                <Caption>{data.LinkedIn}</Caption>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </Card.Content>
      </Card>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  dataTableRowView: {
    // flex: 1,
    flexDirection: 'column',
    // position: 'absolute',
    paddingTop: 6,
  },
  cardContent: {
    borderRadius: 18,
    margin: 10,
  },
});

export default Communications;
