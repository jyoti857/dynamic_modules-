import React from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Card, Caption} from 'react-native-paper';
import ListItemLeft from './ListItemLeft';
import ListItemRight from './ListItemRight';

const ExpenseListItem = props => {
  const {item, itemPress} = props;
  //   console.log('from EXxpense list item props item ', item);
  const _onPress = () => {
    itemPress(item.ExpenseId);
    console.log(
      'item pressed to navigate to the secondary screen',
      item.ExpenseId,
    );
  };
  return (
    <TouchableWithoutFeedback onPress={_onPress}>
      <Card>
        <Card.Title
          left={lProps => <ListItemLeft {...lProps} value={item.ExpenseKey} />}
          title={item.ReportName}
          subtitle={
            <Caption>{'Report date 23.23.23 | Created on 23.23.23'}</Caption>
          }
          right={rProps => <ListItemRight {...rProps} item={item} />}
        />
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default ExpenseListItem;
