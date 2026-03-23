import { useRoute } from '@react-navigation/native';
import GameBoard from 'features/home/components/game_board/GameBoard';
import GameHeader from 'features/home/components/game_header/GameHeader';
import GameInfoAndControls from 'features/home/components/game_info_and_controls/GameInfoAndControls';
import { useGameBoard } from 'features/home/hooks/useGameBoard';
import { GameBoardHook } from 'features/home/types';
import { HomeRouteProp } from 'navigation/types';
import { View } from 'react-native';

const Home = () => {
  const route = useRoute<HomeRouteProp>();
  const playerDetails = route.params ?? {};
  const gameBoardProps: GameBoardHook = useGameBoard(playerDetails.playerType);

  return (
    <View className="flex-1 px-3 bg-matcha-green">
      <GameHeader />
      <GameBoard {...playerDetails} {...gameBoardProps} />
      <GameInfoAndControls {...playerDetails} {...gameBoardProps} />
    </View>
  );
};

export default Home;
