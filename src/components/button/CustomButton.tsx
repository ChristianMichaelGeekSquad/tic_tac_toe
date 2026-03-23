import Button from 'components/button/Button';
import { CONSTANT } from 'components/button/constants/constants';
import { buttonContainerStyle } from 'components/button/native_styles/styles';
import { CustomButtonProps } from 'components/button/types';
import Text from 'components/text/Text';
import { COLOR, VARIANT } from 'components/text/types';
import { colors } from 'tailwindConfig';

const CustomButton = ({ Icon, text, ...restProps }: CustomButtonProps) => {
  const disabled: boolean = restProps?.disabled || false;
  const containerStyle: string = 'flex-row py-3 px-10 rounded-full justify-center items-center ';
  const backgroundColor: string = !disabled ? 'bg-vermillon' : 'bg-neutral-grey';
  const mergedStyle: string = `${containerStyle}${backgroundColor}`.trim();

  const textStyle: string = 'font-nunito-black ml-2 uppercase ';
  const textColor: string = !disabled ? 'color-white' : 'color-darker-grey';
  const mergedTextStyle: string = `${textStyle}${textColor}`;

  return (
    <Button
      disabled={disabled}
      className={mergedStyle}
      style={buttonContainerStyle}
      onPress={restProps?.onPress}
    >
      <Icon
        width={CONSTANT.CUSTOM_BUTTON_ICON_SIZE}
        height={CONSTANT.CUSTOM_BUTTON_ICON_SIZE}
        fill={!disabled ? colors.white : colors['darker-grey']}
      />
      <Text variant={VARIANT.RG} color={COLOR.MUTED_COCOA_BROWN} className={mergedTextStyle}>
        {text}
      </Text>
    </Button>
  );
};

export default CustomButton;
