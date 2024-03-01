import { create } from "zustand"
import { GameQuery } from "../App"

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