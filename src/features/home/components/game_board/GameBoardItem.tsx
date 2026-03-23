import Button from 'components/button/Button';
import { CONSTANT } from 'features/home/constants/constant';
import { GameBoardItemProps, PlayerIconAndColor } from 'features/home/types';
import { gridBuilder, mapPlayerTypeToIconAndColor } from 'features/home/utils/utils';
import { View } from 'react-native';

const GameBoardItem = ({
  playerType,
  index,
  boardSize,
  onTilePressed,
  winnerObj,
}: GameBoardItemProps) => {
  const playerTypeIconAndColor: PlayerIconAndColor | null = mapPlayerTypeToIconAndColor(playerType);
  const gridBuilderStyle: string = gridBuilder(boardSize, index, winnerObj!);

  const onPress = (): void => onTilePressed(index);

  return (
    <Button className={gridBuilderStyle} onPress={onPress}>
      <View>
        {playerTypeIconAndColor?.Icon && (
          <playerTypeIconAndColor.Icon
            width={CONSTANT.GRID_ICON_SIZE}
            height={CONSTANT.GRID_ICON_SIZE}
            fill={playerTypeIconAndColor?.color}
          />
        )}
      </View>
    </Button>
  );
};

export default GameBoardItem;
