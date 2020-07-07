import React, {useState, useEffect} from 'react';
import Animated, {Easing} from 'react-native-reanimated';
import {Card, TouchableRipple, IconButton, Caption} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';
import Dropdown from '../../../../../components/Dropdown';
import {CardStyle} from '../../../../../globalstyles/styles';
import {TextInput} from '../../../../../components/InputField';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {formValueSelector} from 'redux-form';
import {CLOSE_OPP_FORM} from '../../constants';

const close_opp_form = formValueSelector(CLOSE_OPP_FORM);
const CloseOppForm = props => {
  const [fadeValue] = useState(new Animated.Value(0));
  const [contEndDateVisible, setContEndDateVisible] = useState(false);
  const [remindDateVisible, setRemindDateVisible] = useState(false);
  const {oppStageDD} = props;
  const moment = moment();

  useEffect(() => {
    Animated.timing(fadeValue, {
      toValue: 1,
      easing: Easing.linear,
      duration: 600,
      delay: 400,
      useNativeDriver: true,
    }).start();
  }, [fadeValue]);
  return (
    <Animated.View style={{opacity: fadeValue}}>
      <Card elevation={3} style={CardStyle.root}>
        <Card.Content>
          <Dropdown name="opp_stage" label="Opp stage" required />
          <TextInput name="opp_comment" label="Comment" multiline required />
          <TouchableRipple
            onPress={() => setContEndDateVisible(true)}
            style={styles.touchableRipple}>
            <View style={styles.dateView}>
              <IconButton
                icon={() => <FontAwesome name="calendar" size={18} light />}
                color="blue"
                mode="outlined"
                onPress={() => setContEndDateVisible(true)}
              />
            </View>
            <Caption>Contract End Date:</Caption>
            <Text style={{color: 'blue'}}>"MMMM DD yy" </Text>
          </TouchableRipple>
          <TouchableRipple
            onPress={() => setRemindDateVisible(true)}
            style={styles.touchableRipple}>
            <View style={styles.dateView}>
              <IconButton
                icon={() => (
                  <FontAwesome name="calendar" size={20} light color="blue" />
                )}
                color="blue"
                mode="outlined"
                onPress={() => setRemindDateVisible(true)}
              />
              <Caption> Remind me on:</Caption>
            </View>
          </TouchableRipple>
        </Card.Content>
        <DateTimePicker
          mode="date"
          visible={contEndDateVisible}
          onCancel={() => setContEndDateVisible(false)}
          name="opp_contract_end_date"
        />
        <DateTimePicker
          mode="date"
          visible={remindDateVisible}
          onCancel={() => setRemindDateVisible(false)}
          name="opp_remind_me_on"
        />
      </Card>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  touchableRipple: {
    marginTop: 25,
  },
  dateView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
export default compose(
  connect(state =>
    close_opp_form(
      state,
      'opp_stage',
      'opp_comment',
      'opp_contract_end_date',
      'opp_remind_me_on',
    ),
  ),
)(CloseOppForm);
