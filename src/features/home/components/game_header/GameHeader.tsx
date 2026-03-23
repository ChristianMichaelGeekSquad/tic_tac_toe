import Text from 'components/text/Text';
import { COLOR, VARIANT } from 'components/text/types';
import { STRING } from 'features/home/constants/string';
import * as Animatable from 'react-native-animatable';

const GameHeader = () => {
  return (
    <Animatable.View animation={'wobble'} easing={'ease-in'} className="items-center mt-25p">
      <Text variant={VARIANT.MD} color={COLOR.COCOA_BROWN} className="font-nunito-black text-lg">
        {STRING.ticTacToe}
      </Text>
      <Text
        variant={VARIANT.RG}
        color={COLOR.MUTED_COCOA_BROWN}
        className="font-nunito-bold text-rg mt-1.5"
      >
        {STRING.subHeaderDescription}
      </Text>
    </Animatable.View>
  );
};

export default GameHeader;
