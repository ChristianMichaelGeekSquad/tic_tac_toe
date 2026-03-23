import Text from 'components/text/Text';
import { COLOR, VARIANT } from 'components/text/types';
import { CONSTANT } from 'features/home/constants/constant';
import { STRING } from 'features/home/constants/string';
import { PlayerIconAndColor, PlayerInfoProps } from 'features/home/types';
import { mapPlayerTypeToIconAndColor } from 'features/home/utils/utils';
import { View } from 'react-native';

const PlayerInfo = ({ playerName, playerType }: PlayerInfoProps) => {
  const formattedPlayerType: string = `${STRING.player} ${playerType}`;
  const playerTypeObj: PlayerIconAndColor | null = mapPlayerTypeToIconAndColor(playerType);

  return (
    <View className="items-center">
      <View className="ml-4 mb-2 items-center rounded-full">
        <Text
          variant={VARIANT.RG}
          color={COLOR.CHARCOAL}
          className="text-xxs font-nunito-bold color-muted-cocoa-brown uppercase"
        >
          {playerName}
        </Text>
      </View>
      <View className="flex-row items-center">
        {playerTypeObj && (
          <playerTypeObj.Icon
            width={CONSTANT.X_OR_O_ICON_SIZE}
            height={CONSTANT.X_OR_O_ICON_SIZE}
            fill={playerTypeObj.color}
          />
        )}
        <Text
          variant={VARIANT.RG}
          color={COLOR.COCOA_BROWN}
          className="font-nunito-black ml-2 text-rg uppercase"
        >
          {formattedPlayerType}
        </Text>
      </View>
    </View>
  );
};

export default PlayerInfo;
