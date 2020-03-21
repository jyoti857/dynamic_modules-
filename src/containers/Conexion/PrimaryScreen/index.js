import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getIndConexions, getOrgConexions} from '../actions';
import {createStructuredSelector} from 'reselect';
import {selectIndConexions} from '../selectors';
import {View, Text, FlatList} from 'react-native';
import {Card} from 'react-native-paper';
import RenderListItem from './ConexionList/RenderListItem';
import ConexionList from './ConexionList';

const PrimaryScreen = props => {
  const {fetchIndConexions, getIndConexionLists, fetchOrgConexions} = props;
  useEffect(() => {
    const initialPage = {
      pageSize: 20,
      pageNumber: 1,
    };
    fetchIndConexions(initialPage);
    fetchOrgConexions(initialPage);
    console.log('iier920i209i39()$@)$(@)($)', getIndConexionLists);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <ConexionList />
    </View>
  );
};

// const mapStateToProps = createStructuredSelector({
//   getIndConexionLists: selectIndConexions(),
// });
const mapStateToProps = state => {
  console.log('sdsd', state.ConexionReducer);
  return {
    getIndConexionLists: state.ConexionReducer.individualConexions,
  };
};
const mapDispatchToProps = dispatch => ({
  fetchIndConexions: initialPage => dispatch(getIndConexions(initialPage)),
  fetchOrgConexions: initialPage => dispatch(getOrgConexions(initialPage)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrimaryScreen);
