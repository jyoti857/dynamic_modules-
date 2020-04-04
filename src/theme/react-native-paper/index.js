import {DefaultTheme} from 'react-native-paper';
// import { Platform } from 'react-native';

// const fontConfig = {
//   regular: {
//     fontFamily: 'SF Pro Display',
//     fontWeight: 'normal',
//   },
//   medium: {
//     fontFamily: 'SF Pro Display',
//     fontWeight: 'normal',
//   },
//   light: {
//     fontFamily: 'SF Pro Display',
//     fontWeight: 'normal',
//   },
//   thin: {
//     fontFamily: 'SF Pro Display',
//     fontWeight: 'normal',
//   },
// };

const paperTheme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: '#164CE5',
    accent: '#E91E63',
    bgcolor: '#E9EAEF',
    link: '#0045C6',
    darkbluegrey: '#34495E',
    background: 'transparent',
    action: '#172b4d',
  },
  radius: {
    button: 8,
    dialog: 15,
    menu: 15,
  },
  // fonts: {
  //   ...DefaultTheme.fonts,
  //   regular: Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans-Regular',
  //   medium: Platform.OS === 'ios' ? 'Montserrat-Medium' : 'Montserrat-Medium',
  //   light: Platform.OS === 'ios' ? 'OpenSans-Light' : 'OpenSans-Light',
  //   thin: Platform.OS === 'ios' ? 'Montserrat-Thin' : 'Montserrat-Thin',
  // },
  // fonts: {
  //   ...DefaultTheme.fonts,
  //   regular: Platform.OS === 'ios' ? 'SF Pro Display' : 'System font',
  //   medium: Platform.OS === 'ios' ? 'SF Pro Display' : 'System font',
  //   light: Platform.OS === 'ios' ? 'SF Pro Display' : 'System font',
  //   thin: Platform.OS === 'ios' ? 'SF Pro Display' : 'System font',
  // },
  // fonts: fontConfig,
  isTablet: false,
};

export {paperTheme};
