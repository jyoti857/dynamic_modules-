/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Row, Col} from 'react-native-easy-grid';
import {Card, Subheading, Caption, Menu, withTheme} from 'react-native-paper';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getDateByFormat} from '../../../../../utils/DateFormatter';
import Menus from '../../../../../components/Menu';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {MenuStyle} from '../../../../../globalstyles/styles';

const itemAvatar = require('../../../../../assets/icons/avatarorg.png');
const LeftCol = ({tDate}) => {
  return (
    <ImageBackground
      source={itemAvatar}
      imageStyle={{borderRadius: 40}}
      style={{
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
      }}>
      <Text>{getDateByFormat(tDate, 'MMM')}</Text>
      <Text>{getDateByFormat(tDate, 'YY')}</Text>
    </ImageBackground>
  );
};
const RenderReportItem = props => {
  const {expenseDetail, ExpenseDetail, ExpenseUIActions} = props.expenseDetails;
  const {data} = props;
  const {colors} = props.theme;
  console.log('data --->', data);

  return (
    <View style={{flex: 1}}>
      <Card
        style={{justifyContent: 'center', borderRadius: 10, paddingBottom: 10}}
        elevation={4}>
        <Row
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
          }}>
          <Col>
            <LeftCol tDate={data && data.TransactionDate} />
          </Col>
          <Col>
            <Subheading>{(data && data.ExpenseType.Value) || ''}</Subheading>
            <Caption>
              {data && data.BusinessPuprose && data.BusinessPuprose.trim()}
            </Caption>
            <View>
              {data && data.Miles ? (
                <Text>{`Miles: ${data.Miles}` || ''}</Text>
              ) : null}
              {ExpenseUIActions && ExpenseUIActions.EnableMultiCurrency ? (
                <Text>
                  {`Currency Exchange ${data &&
                    data.Currency &&
                    data.Currency.Value}${data && data.Amount}*`}
                  {` ${data && data.ExchangeRate} =`}
                  {`${ExpenseDetail &&
                    ExpenseDetail.Currency &&
                    ExpenseDetail.Currency.Value}${data &&
                    data.AmountInBaseCurrency} `}
                </Text>
              ) : null}
            </View>
          </Col>
          <Col
            style={{
              justifyContent: 'center',
              flexDirection: 'row-reverse',
              alignSelf: 'center',
            }}>
            <View
              style={{
                alignItems: 'flex-end',
              }}>
              <Text>{`${ExpenseDetail &&
                ExpenseDetail.Currency &&
                ExpenseDetail.Currency.Value}${data &&
                data.AmountInBaseCurrency}`}</Text>
              <Caption>
                {(data && data.PaymentType && data.PaymentType.Value) || ''}
              </Caption>
            </View>
          </Col>
          <Col>
            {ExpenseUIActions && ExpenseUIActions.EnableEdit ? (
              <Menus>
                <Menu.Item
                  onPress={() => {}}
                  title="edit"
                  color={colors.action}
                  icon={() => (
                    <FontAwesome5
                      name="edit"
                      size={15}
                      style={MenuStyle.icon}
                    />
                  )}
                  style={MenuStyle.item}
                />
                <Menu.Item
                  onPress={() => {}}
                  title="delete"
                  color={colors.action}
                  icon={() => (
                    <FontAwesome5
                      name="trash-alt"
                      color={colors.action}
                      size={15}
                      style={MenuStyle.icon}
                    />
                  )}
                  style={MenuStyle.item}
                />
                <Menu.Item
                  onPress={() => {}}
                  title="Add Receipt"
                  icon={() => (
                    <FontAwesome5
                      name="paperclip"
                      size={15}
                      style={MenuStyle.icon}
                    />
                  )}
                  style={MenuStyle.item}
                />
              </Menus>
            ) : null}
          </Col>
        </Row>
      </Card>
    </View>
  );
};

const mapStateToProps = ({ExpenseSecondaryReducer}) => ({
  expenseDetails: ExpenseSecondaryReducer.expenseDetails,
});

const withConnect = connect(
  mapStateToProps,
  null,
);
export default compose(
  withConnect,
  withTheme,
)(RenderReportItem);
