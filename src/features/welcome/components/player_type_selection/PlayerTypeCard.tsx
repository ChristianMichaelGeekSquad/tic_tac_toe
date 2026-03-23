import { CheckmarkIcon } from 'assets/icons';
import Button from 'components/button/Button';
import { CONSTANT } from 'features/welcome/constants/constant';
import { generalContainerShadowStyle } from 'features/welcome/native_styles/styles';
import { PlayerTypeCardProps } from 'features/welcome/types';
import { View } from 'react-native';
import { colors } from 'tailwindConfig';

const PlayerTypeCard = ({
  Icon,
  color,
  playerType,
  selectedPlayerType,
  updateSelectedPlayerType,
}: PlayerTypeCardProps) => {
  const isSelectedPlayerType: boolean = playerType === selectedPlayerType;

  const onButtonPressed = () => updateSelectedPlayerType(playerType);

  return (
    <View className="w-48p items-center">
      <Button
        onPress={onButtonPressed}
        className="w-full h-120pixel rounded-10pixel items-center justify-center"
        style={generalContainerShadowStyle}
      >
        <Icon
          width={CONSTANT.PLAYER_TYPE_ICON_SIZE}
          height={CONSTANT.PLAYER_TYPE_ICON_SIZE}
          fill={color}
        />
        {isSelectedPlayerType && (
          <View className="absolute items-center bottom-0">
            <CheckmarkIcon
              width={CONSTANT.CHECKMARK_ICON_SIZE}
              height={CONSTANT.CHECKMARK_ICON_SIZE}
              fill={colors['cocoa-brown']}
            />
          </View>
        )}
      </Button>
    </View>
  );
};

export default PlayerTypeCard;
