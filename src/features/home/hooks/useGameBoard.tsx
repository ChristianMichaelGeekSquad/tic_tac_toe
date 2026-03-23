import { CONSTANT } from 'features/home/constants/constant';
import { gameBoardInitialState, useGameBoardStore } from 'features/home/store/game_boards';
import { GameBoardState } from 'features/home/store/types';
import { GameBoardHook, PlayerType, WinnerObj } from 'features/home/types';
import {
  computeComputerPlayerType,
  generatePossibleWinningIndexesArr,
  getBestMinimaxMove,
  isGameBoardFull,
  validateIfThereIsAWinner,
} from 'features/home/utils/utils';
import { useEffect, useRef } from 'react';

const fullBoardSize: number = Math.pow(CONSTANT.BOARD_SIZE, 2);
const EMPTY_BOARD_ARR = Array(fullBoardSize).fill('');

export const useGameBoard = (playerType: PlayerType): GameBoardHook => {
  const computerPlayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const computerPlayerType: PlayerType = computeComputerPlayerType(playerType);

  const {
    boardArr,
    winnerObj,
    winningPermutationsArr,
    currentUserToPlay,
    singleObjUpdate,
    isGameBoardFilled,
  } = useGameBoardStore<GameBoardState>(state => ({
    boardArr: state.boardArr,
    winningPermutationsArr: state.winningPermutationsArr,
    currentUserToPlay: state.currentUserToPlay,
    updateBoardArr: state.updateBoardArr,
    updateWinningPermutationsArr: state.updateWinningPermutationsArr,
    singleObjUpdate: state.singleObjUpdate,
    isGameBoardFilled: state.isGameBoardFilled,
    winnerObj: state.winnerObj,
  }));

  useEffect(() => {
    initGameBoard();

    return () => {
      clearAllPendingTimers();
    };
  }, []);

  /* Handle computer or AI Game play */
  useEffect(() => {
    if (currentUserToPlay === computerPlayerType) {
      computerPlayTimeoutRef.current = setTimeout(() => {
        const computerMoveToMake: number | null = getBestMinimaxMove(
          boardArr,
          playerType,
          computerPlayerType,
          winningPermutationsArr,
        );
        if (computerMoveToMake !== null) {
          const boardArrClone: Array<PlayerType> = [...boardArr];
          boardArrClone[computerMoveToMake] = computerPlayerType;

          /* perform a one time batch update to prevent multiple re-renders */
          singleObjUpdate({
            currentUserToPlay: playerType,
            boardArr: boardArrClone,
            isGameBoardFilled: isGameBoardFull(boardArrClone),
          });
        }
      }, CONSTANT.COMPUTER_PLAY_TIMEOUT);
    }
  }, [currentUserToPlay]);

  /* Handle when there's a winner */
  useEffect(() => {
    const winnerObj: WinnerObj | 'tie' | null = validateIfThereIsAWinner(
      boardArr,
      winningPermutationsArr,
    );

    if (winnerObj) {
      singleObjUpdate({ winnerObj });
    }
  }, [boardArr]);

  const clearAllPendingTimers = () => {
    if (computerPlayTimeoutRef.current !== null) {
      clearTimeout(computerPlayTimeoutRef.current);
      computerPlayTimeoutRef.current = null;
    }
  };

  const initGameBoard = () => {
    const winningPermutationsArr: Array<Array<number>> = generatePossibleWinningIndexesArr(
      CONSTANT.BOARD_SIZE,
    );
    singleObjUpdate({
      boardArr: EMPTY_BOARD_ARR,
      winningPermutationsArr,
      currentUserToPlay: playerType,
      fullBoardSize,
    });
  };

  const resetBoard = (): void => {
    const boardStateToReset: Partial<GameBoardState> = {
      boardArr: EMPTY_BOARD_ARR,
      ...gameBoardInitialState,
      currentUserToPlay: playerType,
    };

    singleObjUpdate({ ...boardStateToReset });
  };

  const onTilePressed = (index: number): void => {
    /* If it's not actual human's turn to play exit and do nothing */
    if (currentUserToPlay !== playerType) {
      return;
    }

    /* First check if there is a winner if there is, then stop the game */
    if (winnerObj) return;

    const isFreeTileToPlay: boolean = boardArr[index] === '';

    /* Then check If the tile is not empty do nothing */
    if (!isFreeTileToPlay) return;

    const boardArrClone: Array<PlayerType> = [...boardArr];

    /* Update user game play at the user's desired index */
    boardArrClone[index] = playerType;

    /* perform a one time batch update to prevent multiple re-renders */
    singleObjUpdate({
      currentUserToPlay: computerPlayerType,
      boardArr: boardArrClone,
      isGameBoardFilled: isGameBoardFull(boardArrClone),
    });
  };

  return {
    boardArr,
    winningPermutationsArr,
    onTilePressed,
    currentUserToPlay,
    isGameBoardFilled,
    winnerObj,
    resetBoard,
  };
};
