import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  getIndConexions,
  getOrgConexions,
  setIndividualModalVisibility,
  getMetaData,
  getOrgDDList,
  saveSelectedConexionId,
} from '../actions';
import {createStructuredSelector} from 'reselect';
import {selectIndConexions} from '../selectors';
import {View, Text, FlatList} from 'react-native';
import {Card} from 'react-native-paper';
import RenderListItem from './ConexionList/RenderListItem';
import ConexionList from './ConexionList';
import {INDIVIDUAL} from '../constants';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import FABUI from './UIComponents/FAB';
import CreateIndividual from './CreateIndividual';
import SafeAreaView from 'react-native-safe-area-view';

const PrimaryScreen = props => {
  const {
    fetchIndConexions,
    getIndConexionLists,
    fetchOrgConexions,
    dispatchConexionModalState,
    fetchDropDownValues,
    dispatchGetOrgDDList,
    dispatchSetConexionId,
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
    fetchDropDownValues();
    dispatchGetOrgDDList();
    // console.log('iier920i209i39()$@)$(@)($)', getIndConexionLists);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // handle conexion list
  const handleConexionSelect = id => {
    // secondary screen yet not developed
    dispatchSetConexionId(id);
    console.log('id -->', id);
    navigation.navigate('ConexionSecondaryScreen', {
      selectedValue: indSelected,
      selectedId: id,
    });
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
    <SafeAreaView forceInset={{bottom: 'never'}}>
      <CreateIndividual />
      <ConexionList
        indSelected={indSelected}
        onPressItem={handleConexionSelect}
      />
      <FABUI handleConexionCreate={createConexionTrigger} />
    </SafeAreaView>
  );
};

// const mapStateToProps = createStructuredSelector({
//   getIndConexionLists: selectIndConexions(),
// });
const mapStateToProps = state => {
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
  fetchDropDownValues: () => dispatch(getMetaData()),
  dispatchGetOrgDDList: () => dispatch(getOrgDDList()),
  dispatchSetConexionId: id => dispatch(saveSelectedConexionId(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrimaryScreen);
