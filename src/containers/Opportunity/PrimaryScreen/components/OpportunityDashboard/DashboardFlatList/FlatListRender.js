import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import OpportunityCard from './OpportunityCard';
import {Card} from 'react-native-paper';
import {Text} from 'react-native';
import Lo from 'lodash';
import {connect} from 'react-redux';
import {getOppsListByStage} from '../../../actions';

const MAX_HEIGHT = 190;
const ITEM_HEIGHT = 190;
const FlatListRender = props => {
  const {itemPress, data, fetchOppsListByStage} = props;
  const [refreshing, setRefreshing] = useState(false);
  const [isSwitchOn] = useState(true);
  const handleRefresh = Lo.debounce(() => {
    setRefreshing(false);
    fetchOppsListByStage(isSwitchOn);
  }, 200);
  const renderEmptyList = () => {
    return (
      <Card style={styles.oppCardStyle}>
        <Text style={{alignSelf: 'center'}}>no data</Text>
      </Card>
    );
  };
  return (
    <FlatList
      style={styles.flatList}
      data={data}
      renderItem={({item, index}) => (
        <OpportunityCard
          data={item}
          oppId={item && item.OpportunityId}
          onPressItem={itemPress}
          delay={(index + 1) % 10}
          maximumHeight={MAX_HEIGHT}
        />
      )}
      keyExtractor={item => item && item.OpportunityId.toString()}
      ListEmptyComponent={renderEmptyList}
      onRefresh={handleRefresh}
      refreshing={refreshing}
      getItemLayout={(item, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,
      })}
    />
  );
};
const styles = StyleSheet.create({
  oppCardStyle: {
    margin: 5,
    width: 300,
    height: MAX_HEIGHT,
    borderRadius: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    margin: 5,
    marginTop: 0,
    marginBottom: 0,
  },
});

const mapDispatchToProps = dispatch => ({
  fetchOppsListByStage: isSwitchOn => dispatch(getOppsListByStage(isSwitchOn)),
});
const withConnect = connect(
  null,
  mapDispatchToProps,
);
export default withConnect(FlatListRender);
