import { RouteName } from 'navigation/types';

export const ROUTE_NAME: Record<RouteName, RouteName> = {
  Home: 'Home',
  Welcome: 'Welcome',
};

export const CONSTANT_UNTYPED = {};

/* NOTE* Leave type here to avoid circular dependency issue */
type ConstantKeys = typeof CONSTANT_UNTYPED;

export const CONSTANTS: ConstantKeys = CONSTANT_UNTYPED;
