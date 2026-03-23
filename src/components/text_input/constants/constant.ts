export const CONSTANT_UNTYPED = {
  RIGHT_ICON_SIZE: 20,
};

/* NOTE* Leave type here to avoid circular dependency issue */
type ConstantKeys = typeof CONSTANT_UNTYPED;

export const CONSTANT: ConstantKeys = CONSTANT_UNTYPED;
