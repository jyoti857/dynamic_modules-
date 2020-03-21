import React, {useEffect, PureComponent} from 'react';
import {connect} from 'react-redux';
import {getIndConexions, getOrgConexions} from '../../actions';
import {createStructuredSelector} from 'reselect';
import {selectIndConexions} from '../../selectors';
import {View, Text, FlatList} from 'react-native';
import {Card} from 'react-native-paper';
import RenderListItem from './RenderListItem';
import {PAGE_CONFIG} from '../../constants';
import RenderOrgListItem from './RenderOrgListItem';

const ITEM_HEIGHT = 70;
class ConexionList extends PureComponent {
  state = {
    pageSize: PAGE_CONFIG.pageSize,
    pageNumber: PAGE_CONFIG.pageNumber,
    refreshing: false,
  };
  handleLoadMoreIndList = () => {
    const {pageNumber} = this.state;
    const {searchText} = this.props;
    this.setState(
      {
        pageNumber: pageNumber + 1,
      },
      () => {
        this.loadMoreIndConexions();
      },
    );
  };

  handleIndListRefresh = () => {
    this.setState(
      {
        pageNumber: 1,
        refreshing: true,
      },
      () => {
        this.loadMoreIndConexions();
      },
    );
  };
  loadMoreIndConexions = () => {
    const initialPage = {
      pageSize: this.state.pageSize,
      pageNumber: this.state.pageNumber,
    };
    this.props.fetchIndConexions(initialPage);
    this.setState({
      refreshing: false,
    });
  };
  // org list
  handleOrgListRefresh = () => {
    this.setState(
      {
        pageNumber: 1,
        refreshing: true,
      },
      () => {
        this.loadMoreOrgConexion();
      },
    );
  };
  loadMoreOrgConexion = () => {
    const initialPage = {
      pageSize: this.state.pageSize,
      pageNumber: this.state.pageNumber,
    };
    this.props.fetchOrgConexions(initialPage);
    this.setState({
      refreshing: false,
    });
  };
  handleLoadMoreOrgList = () => {
    const {pageNumber} = this.state;
    // const {searchText} = this.props;
    this.setState(
      {
        pageNumber: pageNumber + 1,
      },
      () => {
        this.loadMoreOrgConexion();
      },
    );
  };
  throwError = () => {
    throw new Error('I am crashed!');
  };
  getRenderPart = () => {
    const {getIndConexionLists, getOrgConexionLists, indSelected} = this.props;
    if (false) {
      return (
        <View>
          <FlatList
            data={getIndConexionLists}
            renderItem={({item, index}) => (
              <RenderListItem
                item={item}
                delay={index % 10}
                // onPressItem={onPressItem}
              />
            )}
            keyExtractor={item => item.ConexionId.toString()}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMoreIndList}
            onRefresh={this.handleIndListRefresh}
            onEndReachedThreshold={0.01}
            getItemLayout={(data, index) => ({
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
              index,
            })}
          />
        </View>
      );
    }
    return (
      <FlatList
        data={getOrgConexionLists}
        renderItem={({item, index}) => (
          <RenderOrgListItem
            item={item}
            delay={index % 10}
            //   onPressItem={onPressItem}
          />
        )}
        keyExtractor={item => item.ConexionId.toString()}
        onRefresh={this.handleOrgListRefresh}
        refreshing={this.state.refreshing}
        onEndReached={this.handleLoadMoreOrgList}
        onEndReachedThreshold={0.01}
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
      />
    );
  };
  render() {
    return this.getRenderPart();
  }
}

// const mapStateToProps = createStructuredSelector({
//   getIndConexionLists: selectIndConexions(),
// });
const mapStateToProps = state => {
  console.log('sdsd', state.ConexionReducer);
  const {ConexionReducer} = state;
  return {
    getIndConexionLists: ConexionReducer.individualConexions,
    getOrgConexionLists: ConexionReducer.organizationConexions,
  };
};
const mapDispatchToProps = dispatch => ({
  fetchIndConexions: initialPage => dispatch(getIndConexions(initialPage)),
  fetchOrgConexions: initialPage => dispatch(getOrgConexions(initialPage)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConexionList);
