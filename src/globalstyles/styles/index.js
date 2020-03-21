import {StyleSheet} from 'react-native';

import {CARD_BORDER_RADIUS, MARGIN} from '../../utils/valueConstants';

const CardStyle = StyleSheet.create({
  root: {
    borderRadius: CARD_BORDER_RADIUS,
    margin: MARGIN,
  },
  roundIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 100,
  },
});

const MenuStyle = StyleSheet.create({
  icon: {
    paddingHorizontal: 12,
    paddingVertical: 3,
  },
  item: {padding: 0, borderRadius: 8},
});

const AvatarStyle = StyleSheet.create({
  root: {
    width: 45,
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

const BackgroundStyle = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#E9EAEF',
  },
});

const SearchStyle = StyleSheet.create({
  root: {
    elevation: 0,
  },
});

const ListCardStyle = StyleSheet.create({
  root: {
    marginTop: 0.5,
  },
});
const ActionSheetBgStyle = StyleSheet.create({
  root: {
    backgroundColor: '#E9EAEF',
  },
});

export {
  CardStyle,
  MenuStyle,
  AvatarStyle,
  BackgroundStyle,
  SearchStyle,
  ListCardStyle,
  ActionSheetBgStyle,
};
