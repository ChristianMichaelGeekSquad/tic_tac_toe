import Button from 'components/button/Button';
import { COLOR } from 'components/text/types';
import { CONSTANT } from 'components/text_input/constants/constant';
import { tailwindMerge } from 'general_utils/utils';
import { TextInput as RNTextInput, View } from 'react-native';
import { CustomTextInputProps } from './types';

const TextInput = ({
  RightIcon,
  onRightIconPressed,
  generalContainerStyle,
  className,
  rightIconStyle = '',
  nativeStyle,
  ...restProps
}: CustomTextInputProps) => {
  const flexRowStyle: string = RightIcon ? 'flex-row justify-between items-center' : '';
  const rightButtonMergeTwStyles: string = tailwindMerge('pr-5', rightIconStyle);

  return (
    <View className={`${flexRowStyle} ${generalContainerStyle}`} style={nativeStyle}>
      <RNTextInput className={className} {...restProps} />
      {RightIcon && (
        <Button className={rightButtonMergeTwStyles} onPress={onRightIconPressed}>
          <RightIcon
            width={CONSTANT.RIGHT_ICON_SIZE}
            height={CONSTANT.RIGHT_ICON_SIZE}
            fill={COLOR.WHITE}
          />
        </Button>
      )}
    </View>
  );
};

export default TextInput;
