const STRING_UNTYPED = {
  ticTacToe: 'Tic Tac Toe',
  subHeaderDescription: 'Play . Win . Enjoy',
  player: 'Player',
  versus: 'vs',
  reset: 'Reset',
  computer: 'Computer',
  playAgain: "Let's play again!",
  youWon: 'You Won!!',
  youlost: 'You Lost!!',
  aTie: "It's a Tie!!",
  gameOver: 'Game Over!',
};

/* NOTE* Leave type here to avoid circular dependency issue */
type StringsKeys = typeof STRING_UNTYPED;

export const STRING: StringsKeys = STRING_UNTYPED;
