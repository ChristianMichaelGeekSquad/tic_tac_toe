import { ProceedIcon } from 'assets/icons';
import CustomButton from 'components/button/CustomButton';
import GameHeader from 'features/home/components/game_header/GameHeader';
import PlayerCredentials from 'features/welcome/components/player_credentials/PlayerCredentials';
import PlayerSelectionType from 'features/welcome/components/player_type_selection/PlayerSelectionType';
import { STRING } from 'features/welcome/constants/string';
import { usePlayerTypeCardSelection } from 'features/welcome/hooks/usePlayerTypeCardSelection';
import { ScrollView, View } from 'react-native';

const Welcome = () => {
  const {
    selectedPlayerType,
    updateSelectedPlayerType,
    updateSelectedPlayerName,
    playerName,
    disableProceedButton = false,
    onProceedButtonPressed,
  } = usePlayerTypeCardSelection();

  return (
    <View className="flex-1 bg-matcha-green">
      <GameHeader />
      <ScrollView showsVerticalScrollIndicator={false} className="px-4">
        <PlayerCredentials
          playerName={playerName}
          updateSelectedPlayerName={updateSelectedPlayerName}
        />
        <PlayerSelectionType
          selectedPlayerType={selectedPlayerType}
          updateSelectedPlayerType={updateSelectedPlayerType}
        />
        <View className="w-full items-center mt-20p">
          <CustomButton
            Icon={ProceedIcon}
            text={STRING.proceed}
            disabled={!disableProceedButton}
            onPress={onProceedButtonPressed}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Welcome;
