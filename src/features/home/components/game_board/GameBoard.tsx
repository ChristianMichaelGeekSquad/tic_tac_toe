import GameBoardItem from 'features/home/components/game_board/GameBoardItem';
import { CONSTANT } from 'features/home/constants/constant';
import { gameBoardContainerStyle } from 'features/home/native_styles/styles';
import { GameBoardItemRender, GameBoardProps, PlayerType } from 'features/home/types';
import { FlatList, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const GameBoard = ({ boardArr, onTilePressed, winnerObj }: GameBoardProps) => {
  const keyExtractor = (playerType: PlayerType, index: number) => `${playerType}*${index}`;

  const renderItem = ({ item, index }: GameBoardItemRender) => {
    return (
      <GameBoardItem
        playerType={item}
        index={index}
        boardSize={CONSTANT.BOARD_SIZE}
        onTilePressed={onTilePressed}
        winnerObj={winnerObj}
      />
    );
  };

  return (
    <View className="items-center justify-center mt-10p">
      <Animatable.View
        animation={'fadeIn'}
        easing={'ease-in'}
        className="w-95p rounded-5p bg-muted-sage p-2"
        style={gameBoardContainerStyle}
      >
        <View className="w-full rounded-5p mt-5p overflow-hidden">
          <FlatList
            data={boardArr}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            numColumns={CONSTANT.BOARD_SIZE}
            scrollEnabled={false}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

export default GameBoard;
