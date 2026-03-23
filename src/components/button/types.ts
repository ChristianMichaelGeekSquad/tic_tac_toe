import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

export interface ButtonProp extends TouchableOpacityProps {
  children: ReactNode;
  className?: string;
}

export interface CustomButtonProps extends TouchableOpacityProps {
  Icon: React.ComponentType<SvgProps>;
  text: string;
}
