import { BasicBoardState, GameBoardState } from 'features/home/store/types';
import { PlayerType } from 'features/home/types';
import { createWithEqualityFn } from 'zustand/traditional';

export const gameBoardInitialState: Partial<GameBoardState> = {
  winnerObj: null,
  isGameBoardFilled: false,
};

export const useGameBoardStore = createWithEqualityFn<GameBoardState>(set => ({
  boardArr: [],
  winningPermutationsArr: [],
  currentUserToPlay: '',
  isGameBoardFilled: false,
  winnerObj: null,
  fullBoardSize: 0,
  updateBoardArr: (boardArr: Array<PlayerType>) => set({ boardArr }),
  updateWinningPermutationsArr: (winningPermutationsArr: Array<Array<number>>) =>
    set({ winningPermutationsArr }),
  singleObjUpdate: (data: Partial<BasicBoardState>) =>
    set((state: GameBoardState) => ({
      ...state,
      ...data,
    })),
}));
