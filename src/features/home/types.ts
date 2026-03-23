import { BasicBoardState } from 'features/home/store/types';
import { SvgProps } from 'react-native-svg';

export type PlayerType = 'X' | 'O' | '';

export interface PlayerInfoProps {
  playerType: PlayerType;
  playerName: string;
}

export type PlayerIconAndColor = {
  Icon: React.ComponentType<SvgProps>;
  color: string;
};

export type GameBoardItemRender = {
  item: PlayerType;
  index: number;
};

export interface GameBoardItemProps extends Pick<BasicBoardState, 'winnerObj'> {
  playerType: PlayerType;
  boardSize: number;
  index: number;
  onTilePressed: (index: number) => void;
}

export interface GameInfoAndControlsProp extends Partial<GameBoardHook> {
  playerType: PlayerType;
  playerName: string;
}

export type GameBoardProps = {} & GameInfoAndControlsProp &
  Pick<GameBoardItemProps, 'onTilePressed'>;

export type GameBoardHook = {
  onTilePressed: (index: number) => void;
  resetBoard: () => void;
} & BasicBoardState;

export type WinnerObj = {
  playerType: PlayerType;
  currWinningPermutation: Array<number>;
};
