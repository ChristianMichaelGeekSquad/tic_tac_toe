export const CONSTANT_UNTYPED = {
  PLAYER_TYPE_ICON_SIZE: 50,
  CHECKMARK_ICON_SIZE: 25,
  MAX_NUM_CHARACTERS: 9,
};

/* NOTE* Leave type here to avoid circular dependency issue */
type ConstantKeys = typeof CONSTANT_UNTYPED;

export const CONSTANT: ConstantKeys = CONSTANT_UNTYPED;
