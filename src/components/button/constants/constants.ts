export const CONSTANT_UNTYPED = {
  ACTIVE_OPACITY: 0.8,
  HIT_SLOP: 19,
  CUSTOM_BUTTON_ICON_SIZE: 18,
};

/* NOTE* Leave type here to avoid circular dependency issue */
type ConstantKeys = typeof CONSTANT_UNTYPED;

export const CONSTANT: ConstantKeys = CONSTANT_UNTYPED;
