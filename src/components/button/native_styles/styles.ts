import { StyleProp, ViewStyle } from 'react-native';
import { colors } from 'tailwindConfig';

export const buttonContainerStyle: StyleProp<ViewStyle> = {
  shadowColor: colors.black,
  shadowOffset: { width: 1, height: 2 },
  shadowOpacity: 0.4,
  shadowRadius: 12,
};
