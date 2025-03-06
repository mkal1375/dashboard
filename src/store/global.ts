import { Nationalities } from '@/types/user';
import { create } from 'zustand';

export type NationalityInput = Nationalities | 'all';

interface GlobalStore {
  query: string;
  setQuery: (value: string) => void;
  nationality: NationalityInput;
  setNationality: (value: NationalityInput) => void;
}

const useGlobalStore = create<GlobalStore>()((set) => ({
  query: '',
  nationality: 'all',
  setQuery: (value) => set({ query: value }),
  setNationality: (value) => set({ nationality: value }),
}));

export default useGlobalStore;
