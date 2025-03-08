import { Nationalities, User } from '@/types/user';
import { create } from 'zustand';

export type NationalityInput = Nationalities | 'all';

export const themes = ['lookinsure', 'emerald'] as const;
export type Themes = (typeof themes)[number];

interface GlobalStore {
  theme: Themes;
  setTheme: (value: Themes) => void;
  query: string;
  setQuery: (value: string) => void;
  nationality: NationalityInput;
  setNationality: (value: NationalityInput) => void;

  dialog:
    | {
        user: User;
        open: true;
      }
    | { user: null; open: false };
  openDialog: (user: User) => void;
  resetDialog: () => void;
}

const useGlobalStore = create<GlobalStore>()((set) => ({
  query: '',
  theme: 'lookinsure',
  nationality: 'all',
  dialog: {
    user: null,
    open: false,
  },
  setTheme: (value) => set({ theme: value }),
  setQuery: (value) => set({ query: value }),
  setNationality: (value) => set({ nationality: value }),
  openDialog: (user) =>
    set({
      dialog: {
        user,
        open: true,
      },
    }),

  resetDialog: () =>
    set({
      dialog: {
        user: null,
        open: false,
      },
    }),
}));

export default useGlobalStore;
