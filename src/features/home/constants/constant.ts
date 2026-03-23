export const CONSTANT_UNTYPED = {
  X_OR_O_ICON_SIZE: 25,
  BOARD_SIZE: 3,
  GRID_ICON_SIZE: 38,
  BOARD_MINIMUM_MOVES: 3,
  COMPUTER_PLAY_TIMEOUT: 400,
};

/* NOTE* Leave type here to avoid circular dependency issue */
type ConstantKeys = typeof CONSTANT_UNTYPED;

export const CONSTANT: ConstantKeys = CONSTANT_UNTYPED;
