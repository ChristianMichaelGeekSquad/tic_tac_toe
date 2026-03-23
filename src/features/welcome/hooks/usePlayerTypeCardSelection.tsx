import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { WelcomePageState } from 'features/welcome/store/types';
import { useWelcomePageStore } from 'features/welcome/store/welcome_page';
import { PlayerTypeCardSelectionHook } from 'features/welcome/types';
import { ROUTE_NAME } from 'navigation/constant/constant';
import { RootStackParamList } from 'navigation/types';
import { useEffect } from 'react';

export const usePlayerTypeCardSelection = (): PlayerTypeCardSelectionHook => {
  const {
    selectedPlayerType,
    updateSelectedPlayerType,
    playerName,
    updateSelectedPlayerName,
    resetStore,
  } = useWelcomePageStore<WelcomePageState>(state => ({
    selectedPlayerType: state.selectedPlayerType,
    updateSelectedPlayerType: state.updateSelectedPlayerType,
    resetStore: state.resetStore,
    playerName: state.playerName,
    updateSelectedPlayerName: state.updateSelectedPlayerName,
  }));
  const { replace } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    return () => {
      resetStore();
    };
  }, []);

  const disableProceedButton: boolean = !!(selectedPlayerType && playerName);

  const onProceedButtonPressed = (): void =>
    replace(ROUTE_NAME.Home, { playerName, playerType: selectedPlayerType });

  return {
    playerName,
    selectedPlayerType,
    updateSelectedPlayerType,
    updateSelectedPlayerName,
    disableProceedButton,
    onProceedButtonPressed,
  };
};
