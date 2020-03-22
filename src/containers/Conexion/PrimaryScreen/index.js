import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  getIndConexions,
  getOrgConexions,
  setIndividualModalVisibility,
} from '../actions';
import {createStructuredSelector} from 'reselect';
import {selectIndConexions} from '../selectors';
import {View, Text, FlatList} from 'react-native';
import {Card} from 'react-native-paper';
import RenderListItem from './ConexionList/RenderListItem';
import ConexionList from './ConexionList';
import {INDIVIDUAL} from '../constants';
import {useIsFocused, useNavigation} from '@react-navigation/native';

const PrimaryScreen = props => {
  const {
    fetchIndConexions,
    getIndConexionLists,
    fetchOrgConexions,
    dispatchConexionModalState,
  } = props;
  const [indSelected, setIndSelected] = useState(true);
  const [orgSelected, setOrgSelected] = useState(false);
  const [createConexionType, setCreateConexionType] = useState(INDIVIDUAL);
  const [conexionList, setConexionList] = useState([]);

  const isFocused = useIsFocused();
  const navigation = useNavigation();

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

  // handle conexion list
  const handleConexionSelect = id => {
    // secondary screen yet not developed
  };

  const getConexionList = () => {
    if (indSelected && conexionList.length === 0) {
      return getIndConexionLists;
    }
    if (orgSelected && conexionList.length === 0) {
      return getOrgConexions;
    }
    return conexionList;
  };

  // create conexion trigger
  const createConexionTrigger = (modalState, conexionType) => {
    //   setTabChange(conexionType); // as setTabChange has not been created
    dispatchConexionModalState(modalState);
  };

  const initialIndividualValues = {
    ind_shared_type: 'PUBL',
    ind_status: 'ACTV',
    org_statue: 'ACTV',
  };

  return (
    <View>
      <ConexionList indSelected={indSelected} />
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
    getOrgConexionLists: state.ConexionReducer.organizationConexions,
  };
};
const mapDispatchToProps = dispatch => ({
  fetchIndConexions: initialPage => dispatch(getIndConexions(initialPage)),
  fetchOrgConexions: initialPage => dispatch(getOrgConexions(initialPage)),
  dispatchConexionModalState: modalState =>
    dispatch(setIndividualModalVisibility(modalState)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrimaryScreen);
