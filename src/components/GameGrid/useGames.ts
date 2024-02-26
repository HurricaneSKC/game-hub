import { GameQuery } from "../../App";
import { Platform } from "../PlatformSelector/usePlatforms";
import useData from "../../hooks/useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => useData<Game>('/games', { 
  params: { 
    genres: gameQuery.genre?.id, 
    parent_platforms: gameQuery.platform?.id,
    ordering: gameQuery.order,
    search: gameQuery.searchPhrase,
  }}, 
  [gameQuery])

export default useGames