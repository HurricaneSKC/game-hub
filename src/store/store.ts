import { create } from "zustand"

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  order?: string;
  searchPhrase?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  updateGenreId: (genreId: number) => void;
  updatePlatformId: (platformId: number) => void;
  updateOrder: (order: string) => void;
  updateSearchPhrase:(searchPhrase: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set=>({
  gameQuery: {},
  updateGenreId: (genreId) => set((store) =>({ gameQuery: { ...store.gameQuery, genreId } })),
  updatePlatformId: (platformId) => set((store) =>({ gameQuery: { ...store.gameQuery,platformId }})),
  updateOrder: (order) => set((store)=>({ gameQuery: { ...store.gameQuery,order } })),
  updateSearchPhrase:(searchPhrase) => set(()=>({ gameQuery: { searchPhrase } })),
}))

export default useGameQueryStore