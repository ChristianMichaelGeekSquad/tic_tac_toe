import { PlayerType } from 'features/home/types';
import { SvgProps } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PlayerSelectedTypeObj extends Omit<
  PlayerTypeCardSelectionHook,
  'playerName' | 'updateSelectedPlayerName' | 'onProceedButtonPressed'
> {}

export interface PlayerTypeCardProps extends PlayerSelectedTypeObj {
  Icon: React.ComponentType<SvgProps>;
  color: string;
  playerType: PlayerType;
}

export type PlayerTypeCardSelectionHook = {
  playerName: string;
  selectedPlayerType: PlayerType;
  updateSelectedPlayerType: (selectedPlayerType: PlayerType) => void;
  updateSelectedPlayerName: (playerName: string) => void;
  disableProceedButton?: boolean;
  onProceedButtonPressed: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PlayerSelectionTypeProps extends PlayerSelectedTypeObj {}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PlayerCredentialsProps extends Pick<
  PlayerTypeCardSelectionHook,
  'playerName' | 'updateSelectedPlayerName'
> {}
