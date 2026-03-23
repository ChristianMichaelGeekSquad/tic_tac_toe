import TextInput from 'components/text_input/TextInput';
import { CONSTANT } from 'features/welcome/constants/constant';
import { STRING } from 'features/welcome/constants/string';
import { generalContainerShadowStyle } from 'features/welcome/native_styles/styles';
import { PlayerCredentialsProps } from 'features/welcome/types';
import { View } from 'react-native';
import { colors } from 'tailwindConfig';

const PlayerCredentials = ({ playerName, updateSelectedPlayerName }: PlayerCredentialsProps) => {
  const onChangeText = (text: string) => updateSelectedPlayerName(text);

  return (
    <View className="w-full mt-15p items-center">
      <TextInput
        value={playerName}
        onChangeText={onChangeText}
        maxLength={CONSTANT.MAX_NUM_CHARACTERS}
        generalContainerStyle="rounded-10pixel w-full mt-5"
        placeholder={STRING.nameTextInputPlaceholder.toLocaleUpperCase()}
        placeholderTextColor={colors['cocoa-brown']}
        className="h-70pixel w-90p pl-10 font-nunito-black text-md color-cocoa-brown uppercase"
        nativeStyle={generalContainerShadowStyle}
        textAlign="center"
      />
    </View>
  );
};

export default PlayerCredentials;
