import { Platform, StyleProp, ViewStyle } from 'react-native';
import { colors } from 'tailwindConfig';

export const generalContainerShadowStyle: StyleProp<ViewStyle> = {
  ...Platform.select({
    ios: {
      shadowColor: colors.charcoal,
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 15,
    },
    android: {
      elevation: 7,
    },
  }),
};
