import React from 'react';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

export interface CustomTextInputProps extends TextInputProps {
  RightIcon?: React.ComponentType<SvgProps>;
  onRightIconPressed?: () => void;
  generalContainerStyle?: string;
  className?: string;
  rightIconStyle?: string;
  nativeStyle?: StyleProp<ViewStyle>;
}
