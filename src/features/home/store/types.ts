import { PlayerType, WinnerObj } from 'features/home/types';

export type BasicBoardState = {
  boardArr: Array<PlayerType>;
  winningPermutationsArr: Array<Array<number>>;
  currentUserToPlay: PlayerType;
  isGameBoardFilled: boolean;
  winnerObj?: WinnerObj | 'tie' | null;
  fullBoardSize?: number;
};

export type GameBoardState = {
  updateBoardArr: (boardArr: Array<PlayerType>) => void;
  updateWinningPermutationsArr: (winningPermutationsArr: Array<Array<number>>) => void;
  singleObjUpdate: (data: Partial<BasicBoardState>) => void;
  //   resetStore: () => void;
} & BasicBoardState;
