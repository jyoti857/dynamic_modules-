import React from 'react';
import * as Animatable from 'react-native-animatable';
import {
  Card,
  Subheading,
  Divider,
  Caption,
  Button,
  IconButton,
} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {View, Text, StyleSheet} from 'react-native';
import {CARD_BORDER_RADIUS} from '../../../../../../utils/valueConstants';
import {Row, Col} from 'react-native-easy-grid';
import {connect} from 'react-redux';
import {setOppQuickViewModalState, getOppDetail} from '../../../actions';

const OpportunityCard = props => {
  const {
    data,
    delay,
    maximumHeight,
    dispatchOppQuickViewModalState,
    fetchOppDetail,
    oppId,
    onPressItem,
  } = props;
  //   const {radius} = props.theme;
  console.log(' oppportunity card props --> data -->', data);
  const quickViewTrigger = () => {
    dispatchOppQuickViewModalState(true);
    fetchOppDetail(oppId);
  };
  function _onPress() {
    onPressItem(data.OpportunityId);
  }
  return (
    <Animatable.View animation="slideInUp" duration={delay * 800}>
      <Card style={[styles.oppCardStyle, {height: maximumHeight}]}>
        <Card.Title
          title={<Subheading>{data && data.Name}</Subheading>}
          right={() => <FontAwesome name="fire" size={18} color="orange" />}
        />
        <Divider />
        <View style={styles.mainView}>
          <Row>
            <Col style={styles.colStart}>
              <Text style={styles.organizationTitle}>
                {data.Organization.Value}
              </Text>
              <Caption>{data.Individual.Value}</Caption>
            </Col>
            <Col style={styles.colEnd}>
              <Subheading>
                <Text>{data.Amount}</Text>
              </Subheading>
            </Col>
          </Row>
          <Row style={styles.contentRow}>
            <Col style={styles.colStart}>
              <Button
                mode="outlined"
                onPress={_onPress}
                uppercase
                theme={{roundness: 20}}>
                {data.SystemOppId} ({data.OpportunityKey})
              </Button>
            </Col>
            <Col style={styles.colEnd}>
              <IconButton
                icon={() => (
                  <FontAwesome name="eye" size={15} solid color="orange" />
                )}
                color="red"
                size={25}
                onPress={quickViewTrigger}
              />
              {!data.OwnedByMe ? (
                <IconButton
                  icon={
                    <FontAwesome name="users" size={15} solid color="orange" />
                  }
                />
              ) : null}
            </Col>
          </Row>
        </View>
      </Card>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  oppCardStyle: {
    margin: 5,
    borderRadius: CARD_BORDER_RADIUS,
    width: 300,
  },
  mainView: {
    flex: 1,
    margin: 10,
  },
  contentRow: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  fireIconMargin: {
    margin: 10,
  },
  colStart: {
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '60%',
  },
  colEnd: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '40%',
  },
  organizationTitle: {
    fontWeight: '500',
  },
  cardContentContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
    flexGrow: 1,
    margin: 5,
    backgroundColor: 'transparent',
  },
  avatar: {
    backgroundColor: 'transparent',
  },
});

const mapDispatchToProps = dispatch => ({
  dispatchOppQuickViewModalState: visibility =>
    dispatch(setOppQuickViewModalState(visibility)),
  fetchOppDetail: oppId => dispatch(getOppDetail(oppId)),
});
const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default withConnect(OpportunityCard);
