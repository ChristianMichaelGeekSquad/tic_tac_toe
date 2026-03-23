import { PlayerOIcon, PlayerXIcon } from 'assets/icons';
import { CONSTANT } from 'features/home/constants/constant';
import { STRING } from 'features/home/constants/string';
import { PlayerIconAndColor, PlayerType, WinnerObj } from 'features/home/types';
import { colors } from 'tailwindConfig';

export const computeComputerPlayerType = (humanPlayerType: PlayerType): PlayerType => {
  if (humanPlayerType === 'X') {
    return 'O';
  }
  return 'X';
};

export const mapPlayerTypeToIconAndColor = (playerType: PlayerType): PlayerIconAndColor | null => {
  switch (playerType) {
    case 'X':
      return { Icon: PlayerXIcon, color: colors.charcoal };
    case 'O':
      return { Icon: PlayerOIcon, color: colors['olive-green'] };
  }

  return null;
};

export const resetOrPlayAgain = (
  isBoardFull: boolean,
  winnerObj: WinnerObj | 'tie' | null,
): string => (!isBoardFull && !winnerObj ? STRING.reset : STRING.playAgain);

export const gridBuilder = (
  boardSize: number,
  index: number,
  winnerObj: WinnerObj | 'tie' | null,
): string => {
  const fullBoardSize: number = Math.pow(boardSize, 2);
  const isLastRow = (index + 1) % boardSize === 0;
  const isBottomRow = index >= fullBoardSize - boardSize;

  let defaultStyle: string = 'w-1/3 aspect-square items-center justify-center';

  if (!isLastRow) {
    defaultStyle += ' border-r-4 border-cocoa-brown';
  }

  if (!isBottomRow) {
    defaultStyle += ' border-b-4 border-cocoa-brown';
  }

  if (winnerObj && winnerObj !== 'tie') {
    const { currWinningPermutation } = winnerObj;
    if (currWinningPermutation.includes(index)) {
      defaultStyle += ' bg-beige';
    }
  }

  return defaultStyle;
};

export const winnerMessage = (
  winnerObj: WinnerObj | 'tie' | null,
  humanPlayerType: PlayerType,
): string => {
  let message: string = '';

  if (winnerObj) {
    if (winnerObj === 'tie') {
      message = STRING.aTie;
    } else {
      message = winnerObj?.playerType === humanPlayerType ? STRING.youWon : STRING.youlost;
    }
  }

  return `${STRING.gameOver} ${message}`;
};

export const horizontalRowWinningPermutations = (boardSize: number): Array<Array<number>> => {
  const horizontalWinningArrayPermutations: Array<Array<number>> = [];

  for (let row = 0; row < boardSize; row++) {
    const currRow: Array<number> = [];

    for (let col = 0; col < boardSize; col++) {
      currRow.push(row * boardSize + col);
    }
    horizontalWinningArrayPermutations.push(currRow);
  }

  return horizontalWinningArrayPermutations;
};

export const verticalColumnWinningPermutations = (boardSize: number): Array<Array<number>> => {
  const verticalWinningArrayPermutations: Array<Array<number>> = [];

  for (let col = 0; col < boardSize; col++) {
    const currColumn: Array<number> = [];

    for (let row = 0; row < boardSize; row++) {
      currColumn.push(row * boardSize + col);
    }
    verticalWinningArrayPermutations.push(currColumn);
  }

  return verticalWinningArrayPermutations;
};

export const diagonalsWinningPermutations = (boardSize: number): Array<Array<number>> => {
  const leftDiagonalWinningArr: Array<number> = [];
  const rightDiagonalWinningArr: Array<number> = [];

  /* Left diagonal winning array */
  for (let i = 0; i < boardSize; i++) {
    leftDiagonalWinningArr.push(i * boardSize + i);
  }

  /* Right diagonal winning array */
  for (let i = 0; i < boardSize; i++) {
    rightDiagonalWinningArr.push(i * boardSize + (boardSize - 1 - i));
  }

  return [leftDiagonalWinningArr, rightDiagonalWinningArr];
};

export const generatePossibleWinningIndexesArr = (boardSize: number): Array<Array<number>> => {
  let winningArrayPermutations: Array<Array<number>> = [];

  /* Generate winning permutations for each horizontal row */
  const eachRowWinPermutationsArr: Array<Array<number>> =
    horizontalRowWinningPermutations(boardSize);

  /* Generate winnning permuations for each vertical columns */
  const eachColumnWinPermutationsArr: Array<Array<number>> =
    verticalColumnWinningPermutations(boardSize);

  /* Generate winning permutations for each diagonal ( left or right ) */
  const eachDigonalWinPermutationArr: Array<Array<number>> =
    diagonalsWinningPermutations(boardSize);

  winningArrayPermutations = [
    ...eachRowWinPermutationsArr,
    ...eachColumnWinPermutationsArr,
    ...eachDigonalWinPermutationArr,
  ];

  return winningArrayPermutations;
};

export const isGameBoardFull = (boardArr: Array<PlayerType>): boolean =>
  boardArr.every((playerTile: PlayerType) => playerTile !== '');

export const validateIfThereIsAWinner = (
  boardArr: Array<PlayerType>,
  winningPermutations: Array<Array<number>>,
): WinnerObj | 'tie' | null => {
  const boardArrClone: Array<PlayerType> = [...boardArr];

  /* Dont waste space running below if board has less than 3 moves */
  const hasAtLeastThreeMoves: boolean =
    boardArrClone.filter((playerType: PlayerType) => playerType !== '').length >=
    CONSTANT.BOARD_MINIMUM_MOVES;

  if (!hasAtLeastThreeMoves) return null;

  /* Avoid JS reference issues ahead of time and know peace eventually */
  const winningPermutationsClone: Array<Array<number>> = [...winningPermutations];

  for (const currWinningPermutation of winningPermutationsClone) {
    const currentPlayerType: PlayerType = boardArrClone[currWinningPermutation[0]];

    if (!currentPlayerType) continue;

    const isAWinner: boolean = currWinningPermutation.every(
      (index: number) => boardArrClone[index] === currentPlayerType,
    );

    if (isAWinner) return { playerType: currentPlayerType, currWinningPermutation };
  }

  const isDraw: boolean = isGameBoardFull(boardArrClone);
  return isDraw ? 'tie' : null;
};

const minimizeOrMaximizeWinningsHelper = (
  boardArr: Array<PlayerType>,
  humanPlayerType: PlayerType,
  computerPlayerType: PlayerType,
  winningPermutations: Array<Array<number>>,
  depth: number,
  isMaximizing: boolean,
): number => {
  let bestScore: number = isMaximizing ? -Infinity : Infinity;

  for (let i = 0; i < boardArr.length; i++) {
    if (boardArr[i] === '') {
      const currentPlayer: PlayerType = isMaximizing ? computerPlayerType : humanPlayerType;
      boardArr[i] = currentPlayer;

      const score = minimax(
        boardArr,
        winningPermutations,
        humanPlayerType,
        depth + 1,
        !isMaximizing,
      );

      boardArr[i] = '';
      bestScore = isMaximizing ? Math.max(bestScore, score) : Math.min(bestScore, score);
    }
  }

  return bestScore;
};

/* NOTE* Got code inspiration from from chatGPT and modified it to fit my code */
export const minimax = (
  boardArr: Array<PlayerType>,
  winningPermutations: Array<Array<number>>,
  humanPlayerType: PlayerType,
  depth: number,
  isMaximizing: boolean,
): number => {
  const computerPlayerType: PlayerType = computeComputerPlayerType(humanPlayerType);

  const winnerObj: WinnerObj | 'tie' | null = validateIfThereIsAWinner(
    boardArr,
    winningPermutations,
  );

  if (winnerObj) {
    if (winnerObj === 'tie') return 0;
    if (winnerObj.playerType === computerPlayerType) return 10 - depth;
    if (winnerObj.playerType === humanPlayerType) return depth - 10;
    return 0;
  }

  return minimizeOrMaximizeWinningsHelper(
    boardArr,
    humanPlayerType,
    computerPlayerType,
    winningPermutations,
    depth,
    isMaximizing,
  );
};

/* NOTE* Got code inspiration from from chatGPT and modified it to fit my code */
export const getBestMinimaxMove = (
  boardArr: Array<PlayerType>,
  humanPlayerType: PlayerType,
  computerPlayerType: PlayerType,
  winningPermutations: Array<Array<number>>,
): number | null => {
  const boardArrCloned: Array<PlayerType> = [...boardArr];
  let bestScore: number = -Infinity;
  let bestMove: number | null = null;

  for (let i = 0; i < boardArrCloned.length; i++) {
    if (boardArrCloned[i] === '') {
      boardArrCloned[i] = computerPlayerType;

      const score: number = minimax(boardArrCloned, winningPermutations, humanPlayerType, 0, false);

      boardArrCloned[i] = '';

      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  return bestMove;
};
