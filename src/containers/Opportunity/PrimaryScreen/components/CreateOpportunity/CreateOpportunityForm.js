import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Animated,
  Easing,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {
  Card,
  TouchableRipple,
  IconButton,
  withTheme,
  Colors,
  Caption,
} from 'react-native-paper';
import {change, formValueSelector} from 'redux-form';
import {Grid, Row, Col} from 'react-native-easy-grid';
import {getIndDDList} from '../../actions';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {TextInput, NumberInput} from '../../../../../components/InputField';
import Dropdown from '../../../../../components/Dropdown';
import {OPP_FORM} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {oppProbabilityStageMapper} from '../../../mappers';
import DateTimePickerReduxForm from '../../../../../components/DateTimePickerReduxForm';

const {width} = Dimensions.get('window');
let oppForm = formValueSelector(OPP_FORM);
const CreateOpportunityForm = props => {
  const [fadeValue] = useState(new Animated.Value(0));
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  //   const {colors} = props.theme;
  const {
    changeRDXField,
    fetchIndDDList,
    serviceMetaData,
    stageMetadata,
    dealTypeMetadata,
    leadSourceMetadata,
    oppStageProbability,
    oppStage,
  } = props;
  useEffect(() => {
    Animated.timing(fadeValue, {
      toValue: 1,
      easing: Easing.linear,
      duration: 700,
      delay: 400,
      useNativeDriver: true,
    }).start();
  }, [fadeValue]);

  useEffect(() => {
    const oppProbability = oppProbabilityStageMapper(
      oppStageProbability,
      oppStage,
    );
  });
  console.log(' from create opportunity form --->', props.opp_close_date);
  const hideDateTimePicker = () => {
    setIsDatePickerVisible(false);
  };
  const showDateTimePicker = () => {
    setIsDatePickerVisible(true);
  };
  function renderServiceList() {
    const oppsService = [];
    serviceMetaData.map(service =>
      oppsService.push({
        key: service.Value,
        value: service.Value,
        label: service.Text,
      }),
    );
    return oppsService;
  }
  function renderStageList() {
    const oppsStageList = [];
    stageMetadata.map(stage =>
      oppsStageList.push({
        key: stage.Value,
        value: stage.Value,
        label: stage.Text,
      }),
    );
    return oppsStageList;
  }
  function renderLeadSourceList() {
    const oppLeadSource = [];
    leadSourceMetadata.map(lead =>
      oppLeadSource.push({
        key: lead.Value,
        value: lead.Value,
        label: lead.Text,
      }),
    );
    return oppLeadSource;
  }
  function renderDealTypeList() {
    const oppDealType = [];
    dealTypeMetadata.map(dealType =>
      oppDealType.push({
        key: dealType.Value,
        value: dealType.Value,
        label: dealType.Text,
      }),
    );
    return oppDealType;
  }
  return (
    <Animated.View>
      <Card style={{width}} elevation={4}>
        <Card.Content>
          <Grid>
            <Row style={styles.row}>
              <Col>
                <TextInput label="Opp Name" name="opps_name" required />
              </Col>
              <Col>
                <Dropdown
                  label="Opp Owner"
                  name="opp_owner"
                  required
                  data={['ewle']}
                />
              </Col>
            </Row>
            <Row style={styles.row}>
              <Col>
                <Dropdown
                  label="Select Organization"
                  name="oppOrganization"
                  required
                />
              </Col>
              <Col>
                <Dropdown label="Select Individual" name="opp_individual" />
              </Col>
            </Row>
            <Row style={styles.row}>
              <Col>
                <Dropdown
                  label="Select Services"
                  name="opp_services"
                  required
                />
              </Col>
              <Col>
                <TouchableRipple>
                  <View>
                    <IconButton
                      icon={() => (
                        <FontAwesome name="calendar" size={18} light />
                      )}
                      color="blue"
                      visible={isDatePickerVisible}
                      onPress={showDateTimePicker}
                    />
                    <Caption>Closed Date: </Caption>
                    <DateTimePickerReduxForm
                      mode="date"
                      visible={isDatePickerVisible}
                      onCancel={hideDateTimePicker}
                      name="opp_close_date"
                    />
                  </View>
                </TouchableRipple>
              </Col>
            </Row>
            <Row>
              <Col>
                <Dropdown
                  label="Select Stage"
                  name="oppStage"
                  required
                  //   data={renderStageList}
                />
              </Col>
              <Col>
                <NumberInput
                  label="probability"
                  name="oppProbability"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Dropdown
                  label="Select Deal Type"
                  name="opp_deal_type"
                  required
                  //   data={renderDealTypeList}
                />
              </Col>
              <Col>
                <NumberInput
                  label="Deal Length(months)"
                  name="opp_deal_length"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <TextInput label="Comments" name="opp_comments" multiline />
              </Col>
            </Row>
          </Grid>
        </Card.Content>
      </Card>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  row: {
    padding: 2,
  },
});

const mapDispatchToProps = dispatch => ({
  changeRDXField: (form, field, value) => dispatch(change(form, field, value)),
  fetchIndDDList: oppOrganization => dispatch(getIndDDList(oppOrganization)),
});
const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  connect(
    state => oppForm(state, 'opps_name', 'opp_owner', 'opp_close_date'),
    withConnect,
  ),
)(CreateOpportunityForm);

// export default withConnect(CreateOpportunityForm);
