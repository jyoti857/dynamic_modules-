import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Menu, Provider, Divider, Button} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Menus extends React.Component {
  state = {
    isVisible: false,
  };

  _closeMenu = () => this.setState({isVisible: false});

  _openMenu = () => this.setState({isVisible: true});
  render() {
    const {style, size, children} = this.props;
    return (
      <View style={style}>
        <Menu
          visible={this.state.isVisible}
          onDismiss={this._closeMenu}
          anchor={
            <Button onPress={this._openMenu}>
              <FontAwesome name="ellipsis-v" size={size} />
            </Button>
          }
          theme={{roundness: 15}}>
          {children}
        </Menu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Menus;
