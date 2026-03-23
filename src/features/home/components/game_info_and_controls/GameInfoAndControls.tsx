import { ResetIcon } from 'assets/icons';
import CustomButton from 'components/button/CustomButton';
import Text from 'components/text/Text';
import { COLOR, VARIANT } from 'components/text/types';
import PlayerInfo from 'features/home/components/player_info/PlayerInfo';
import { STRING } from 'features/home/constants/string';
import { versusContainerStyle } from 'features/home/native_styles/styles';
import { GameInfoAndControlsProp, PlayerType } from 'features/home/types';
import {
  computeComputerPlayerType,
  resetOrPlayAgain,
  winnerMessage,
} from 'features/home/utils/utils';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const GameInfoAndControls = ({
  playerName,
  playerType,
  isGameBoardFilled,
  winnerObj,
  resetBoard,
}: GameInfoAndControlsProp) => {
  const computerPlayerType: PlayerType = computeComputerPlayerType(playerType);
  const resetOrPlayAgainText: string = resetOrPlayAgain(isGameBoardFilled!, winnerObj!);

  const renderGameOverContainer = () => {
    const winnerMsg: string = winnerMessage(winnerObj!, playerType);

    return (
      <Animatable.View animation={'bounceIn'} easing={'ease-in'} className="mt-7 items-center">
        <Text
          variant={VARIANT.RG}
          color={COLOR.MUTED_COCOA_BROWN}
          className="font-nunito-black text-rg color-cocoa-brown uppercase"
        >
          {winnerMsg}
        </Text>
      </Animatable.View>
    );
  };

  return (
    <Animatable.View animation="pulse" easing={'ease-in'} className="mt-12p items-center">
      <View className="w-82p flex-row justify-between items-center">
        <PlayerInfo playerName={playerName} playerType={playerType} />
        <View
          className="w-40pixel h-40pixel mt-2 rounded-full items-center justify-center bg-cocoa-brown"
          style={versusContainerStyle}
        >
          <Text
            variant={VARIANT.RG}
            color={COLOR.MUTED_COCOA_BROWN}
            className="font-nunito-black text-rg color-white"
          >
            {STRING.versus}
          </Text>
        </View>
        <PlayerInfo playerName={STRING.computer} playerType={computerPlayerType} />
      </View>
      <View className="w-full items-center mt-10p">
        <CustomButton Icon={ResetIcon} text={resetOrPlayAgainText} onPress={resetBoard} />
      </View>
      {winnerObj && renderGameOverContainer()}
    </Animatable.View>
  );
};

export default GameInfoAndControls;
