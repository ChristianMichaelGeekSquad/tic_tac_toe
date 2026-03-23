import { PlayerType } from 'features/home/types';
import { WelcomePageState } from 'features/welcome/store/types';
import { createWithEqualityFn } from 'zustand/traditional';

const initialState = (): Partial<WelcomePageState> => ({
  selectedPlayerType: '',
  playerName: '',
});

export const useWelcomePageStore = createWithEqualityFn<WelcomePageState>(set => ({
  selectedPlayerType: '',
  playerName: '',
  updateSelectedPlayerName: (playerName: string) => set({ playerName }),
  updateSelectedPlayerType: (selectedPlayerType: PlayerType) => set({ selectedPlayerType }),
  resetStore: () => set(() => initialState()),
}));
