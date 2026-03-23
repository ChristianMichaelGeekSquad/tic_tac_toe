import { Dimensions, Platform, StyleProp, ViewStyle } from 'react-native';
import { colors } from 'tailwindConfig';

const { height } = Dimensions.get('window');

export const gameBoardContainerStyle: StyleProp<ViewStyle> = {
  height: height / 2.2,
  ...Platform.select({
    ios: {
      shadowColor: colors['cocoa-brown'],
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 25,
    },
    android: {
      elevation: 10,
    },
  }),
};

export const versusContainerStyle: StyleProp<ViewStyle> = {
  ...Platform.select({
    ios: {
      shadowColor: colors.black,
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 12,
    },
    android: {
      elevation: 6,
    },
  }),
};
