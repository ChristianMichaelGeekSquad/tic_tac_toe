import { PlayerType } from 'features/home/types';
import { PlayerTypeCardSelectionHook } from 'features/welcome/types';

export type WelcomePageState = {
  selectedPlayerType: PlayerType;
  playerName: string;
  resetStore: () => void;
} & Pick<PlayerTypeCardSelectionHook, 'updateSelectedPlayerType' | 'updateSelectedPlayerName'>;
