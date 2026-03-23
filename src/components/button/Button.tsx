import { CONSTANT } from 'components/button/constants/constants';
import { ButtonProp } from 'components/button/types';
import { TouchableOpacity } from 'react-native';

const Button = ({ children, ...restProps }: ButtonProp) => {
  return (
    <TouchableOpacity
      hitSlop={CONSTANT.HIT_SLOP}
      activeOpacity={CONSTANT.ACTIVE_OPACITY}
      {...restProps}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;
