import { PlayerOIcon, PlayerXIcon } from 'assets/icons';
import Text from 'components/text/Text';
import { COLOR, VARIANT } from 'components/text/types';
import { STRING } from 'features/welcome/constants/string';
import { PlayerSelectionTypeProps } from 'features/welcome/types';
import { View } from 'react-native';
import { colors } from 'tailwindConfig';
import PlayerTypeCard from './PlayerTypeCard';

const PlayerSelectionType = (props: PlayerSelectionTypeProps) => {
  return (
    <View className="w-full mt-20p items-center">
      <Text
        variant={VARIANT.MD}
        color={COLOR.COCOA_BROWN}
        className="uppercase font-nunito-black text-md"
      >
        {STRING.pickPlayerType}
      </Text>
      <View className="flex-row mt-5 justify-between items-center w-full">
        <PlayerTypeCard Icon={PlayerXIcon} color={colors.charcoal} playerType="X" {...props} />
        <PlayerTypeCard
          Icon={PlayerOIcon}
          color={colors['olive-green']}
          playerType="O"
          {...props}
        />
      </View>
    </View>
  );
};

export default PlayerSelectionType;
