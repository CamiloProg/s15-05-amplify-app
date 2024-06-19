import { create } from "zustand";

interface StoreState {
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
}

const useStore = create<StoreState>((set) => ({
  selectedGenre: "Todos los Géneros",
  setSelectedGenre: (genre) => set({ selectedGenre: genre }),
}));

export default useStore;
