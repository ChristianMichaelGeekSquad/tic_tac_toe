import { RouteProp } from '@react-navigation/native';
import { PlayerType } from 'features/home/types';
import { ROUTE_NAME } from 'navigation/constant/constant';

export type RouteName = 'Home' | 'Welcome';

export type HomeParams = {
  playerType: PlayerType;
  playerName: string;
};

export type RootStackParamList = {
  [ROUTE_NAME.Home]: HomeParams;
  [ROUTE_NAME.Welcome]: undefined;
};

export type HomeRouteProp = RouteProp<{ [ROUTE_NAME.Home]: HomeParams }, 'Home'>;
