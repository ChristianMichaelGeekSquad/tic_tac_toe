import { ReactNode } from 'react';
import { TextProps } from 'react-native';

export enum VARIANT {
  RG = 'rg',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  DEFAULT = '',
}

export enum COLOR {
  WHITE = 'white',
  MUTED_SAGE = 'muted-sage',
  MUTED_COCOA_BROWN = 'muted-cocoa-brown',
  WARM_NEUTRAL = 'warm-netral',
  MATCHA_GREEN = 'matcha-green',
  MUTED_ORANGE = 'muted-orange',
  COCOA_BROWN = 'cocoa-brown',
  OLIVE_GREEN = 'olive-green',
  CHARCOAL = 'charcoal',
  DEFAULT = '',
}

export interface TextProp extends TextProps {
  children: ReactNode;
  color?: COLOR;
  variant: VARIANT;
  className?: string;
}
