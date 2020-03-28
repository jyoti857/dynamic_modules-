/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';
import {Card} from 'react-native-paper';
import {TextInput} from '../../../../components/InputField';
import {CardStyle} from '../../../../globalstyles/styles';
import Dropdown, {SimpleDropdown} from '../../../../components/Dropdown';
import {STATUS} from '../../constants';
import {connect} from 'react-redux';
import _ from 'lodash';

const {width, height} = Dimensions.get('window');
const Details = props => {
  const {metaData, organization, editConexion, orgId} = props;
  const [title, setTitle] = useState([]);
  const [suffix, setSuffix] = useState([]);

  useEffect(() => {
    if (
      !_.isEmpty(metaData) &&
      !_.isEmpty(metaData.title) &&
      !_.isEmpty(metaData.suffix)
    ) {
      const mappedTitle = [];
      const mappedSuffix = [];
      metaData.title.forEach(data => {
        mappedTitle.push({label: data.Text, value: data.Value});
      });
      metaData.suffix.forEach(data => {
        mappedSuffix.push({label: data.Text, value: data.Value});
      });
      console.log('metadata#*@___>', organization);
      setTitle(mappedTitle);
      setSuffix(mappedSuffix);
    }
  }, [metaData, organization, props]);
  console.log('title --->', title);
  return (
    <Card
      elevation={4}
      // style={
      //   (CardStyle.root, {width: width - 60, height: height - 300, margin: 30})
      // }
    >
      <Card.Content>
        <Grid>
          <Row>
            <Col>
              <TextInput name="ind_first_name" label="First Name" required />
            </Col>
            <Col>
              <TextInput label="Middle Name" name="ind_middle_name" />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextInput label="Last Name" name="ind_last_name" required />
            </Col>
            <Col>
              <TextInput label="Job Title" name="ind_job_title" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Dropdown label="Title" name="ind_title" data={title} />
            </Col>
            <Col>
              <Dropdown label="Suffix" name="ind_suffix" data={suffix} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Dropdown
                label="select organization"
                name="ind_select_organization"
                data={organization}
                disabled={!!orgId}
                defaultValue={orgId}
              />
            </Col>
            {/* <Col>
              <SimpleDropdown />
            </Col> */}
            <Col>
              <Dropdown
                label="Staus"
                name="ind_status"
                data={STATUS}
                disabled={!editConexion}
              />
            </Col>
          </Row>
        </Grid>
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = ({ConexionReducer}) => ({
  metaData: ConexionReducer.metaData,
  organization: ConexionReducer.orgDropdown,
  editConexion: ConexionReducer.editConexion,
});

export default connect(
  mapStateToProps,
  null,
)(Details);
