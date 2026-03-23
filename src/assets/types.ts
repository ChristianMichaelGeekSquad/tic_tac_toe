import { ViewProps, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

export type IconProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
} & ViewProps &
  SvgProps;

export interface ShareIconStyleProps extends ViewStyle {
  enableBackground?: string;
}
