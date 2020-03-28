import React, {useEffect, useState} from 'react';
import {Divider, Card} from 'react-native-paper';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Grid, Row, Col} from 'react-native-easy-grid';

import _ from 'lodash';
import {NumberInput, TextInput} from '../../../../components/InputField';
import Dropdown from '../../../../components/Dropdown';

const Communication = props => {
  const [contactPreference, setContactPreference] = useState([]);

  const {metaData} = props;

  useEffect(() => {
    if (
      !_.isEmpty(metaData) &&
      !_.isEmpty(metaData.conexion_contact_preference)
    ) {
      const mappedContactPreference = [];
      metaData.conexion_contact_preference.forEach(preference => {
        mappedContactPreference.push({
          label: preference.Text,
          value: preference.Value,
        });
      });
      setContactPreference(mappedContactPreference);
    }
  }, [metaData, props]);
  return (
    <Card elevation={4}>
      <Card.Content>
        <Grid>
          <Row>
            <Col>
              <NumberInput name="ind_primary_mobile" label="Primary Mobile " />
            </Col>
            <Col>
              <NumberInput
                name="ind_secondary_mobile"
                label="Secondary Mobile"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <NumberInput name="ind_business_phone" label="Business Phone" />
            </Col>
            <Col>
              <NumberInput
                name="ind_business_phone_2"
                label="Business Phone 2"
              />
            </Col>
            <Col>
              <NumberInput name="ind_business_fax" label="Business Fax" />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextInput label="Business Email" name="ind_business_email" />
            </Col>
            <Col>
              <TextInput
                label="Business Home Page"
                name="ind_business_home_page"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextInput label="LinkedIn" name="ind_linked_in" />
            </Col>
          </Row>
          <Divider style={{marginTop: 20, marginBottom: 10}} />
          <Row>
            <Col>
              <NumberInput label="Home Phone" name="ind_home_phone" />
            </Col>
            <Col>
              <NumberInput label="Home Phone 2" name="ind_home_phone_2" />
            </Col>
            <Col>
              <NumberInput label="Home Fax" name="ind_hom_fax" />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextInput label="Personal Email" name="ind_personal_email" />
            </Col>
            <Col>
              <TextInput
                label="Personal Home Page"
                name="ind_personal_home_page"
              />
            </Col>
          </Row>
          <Row>
            <Col style={{marginBottom: 80}}>
              <Dropdown
                label="select contact preference"
                name="ind_contact_preference"
                data={contactPreference}
              />
            </Col>
          </Row>
        </Grid>
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = ({ConexionReducer}) => {
  return {
    metaData: ConexionReducer.metaData,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Communication);
