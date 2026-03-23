const STRING_UNTYPED = {
  nameTextInputPlaceholder: 'Enter name e.g John Doe',
  pickPlayerType: 'Pick a Player Type',
  proceed: "Let's Play!",
};

/* NOTE* Leave type here to avoid circular dependency issue */
type StringsKeys = typeof STRING_UNTYPED;

export const STRING: StringsKeys = STRING_UNTYPED;
