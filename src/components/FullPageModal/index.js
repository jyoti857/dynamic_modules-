import React, {useState} from 'react';
import {IconButton, Title, Headline, withTheme} from 'react-native-paper';
import {
  Modal,
  View,
  Platform,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import * as colors from '../../utils/colorConstants';
import {LINEAR_START, LINEAR_END} from '../../utils/valueConstants';
import {BackgroundStyle} from '../../globalstyles/styles';
import {Col, Row} from 'react-native-easy-grid';
import Feather from 'react-native-vector-icons/FontAwesome';
import Details from '../../containers/Conexion/PrimaryScreen/CreateIndividual/Details';
import IndividualConexionForm from '../../containers/Conexion/PrimaryScreen/CreateIndividual/IndividualConexionForm';

const {height} = Dimensions.get('window');

const FullPageModal = props => {
  const [screenHeight, setScreenHeight] = useState(0);
  const {isTablet} = props.theme;
  const {visible, modalHeaderText, modalHeaderRightComponent, loader} = props;
  function onContentSizeChange(contentWidth, contentHeight) {
    setScreenHeight(contentHeight);
  }
  function closeModal() {
    props.handleModalVisible(false);
  }
  const getStatusBarStyle = () => {
    const BarHeight = StatusBar.currentHeight;
    if (isTablet) {
      return {
        height: Platform.OS === 'android' ? BarHeight * 2 : BarHeight,
        paddingTop: 10,
        paddingBottom: Platform.OS === 'android' ? 10 : 0,
      };
    }
    return {
      heigt: Platform.OS === 'ios' ? 80 : 50,
      paddingTop: Platform.OS === 'ios' ? 30 : 0,
    };
  };
  function getScrollViewContent() {
    const scrollEnabled = screenHeight > height;
    const {children} = props;
    if (Platform.OS === 'ios') {
      return (
        <KeyboardAwareScrollView
          style={{flex: 1}}
          contentContainerStyle={styles.scrollView}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={onContentSizeChange}>
          {children}
        </KeyboardAwareScrollView>
      );
    }
    return children;
  }
  return (
    <View>
      <Modal
        animationType="slide"
        onRequestClose={() => {}}
        transparent={false}
        visible={visible}>
        {/* {visible ? <Loader loading = {loader} /> : null} */}
        <View style={BackgroundStyle.root}>
          <LinearGradient
            start={LINEAR_START}
            end={LINEAR_END}
            colors={['#6a11cb', '#2575fc']}
            style={[styles.titleView, getStatusBarStyle()]}>
            <Row>
              <Col size={20} style={styles.closeIcon}>
                <IconButton
                  icon={() => (
                    <Feather name="times-circle" color="#fff" size={30} bold />
                  )}
                  color="green"
                  onPress={closeModal}
                />
              </Col>
              <Col size={60} style={styles.headerTitle}>
                {!isTablet ? (
                  <Title style={styles.headerText}>{modalHeaderText}</Title>
                ) : (
                  <Headline style={styles.headerText}>
                    {modalHeaderText}
                  </Headline>
                )}
              </Col>
              <Col size={20} style={styles.doneIcon}>
                {modalHeaderRightComponent}
              </Col>
            </Row>
          </LinearGradient>
          {getScrollViewContent()}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {color: '#fff'},
  titleView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  closeIcon: {
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginHorizontal: 10,
  },
  doneIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'center',
    marginEnd: 10,
  },
  headerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent: 'center',
  },
  scrollView: {
    flexGrow: 1,
  },
  headerText: {
    color: '#fff',
  },
});

export default withTheme(FullPageModal);
