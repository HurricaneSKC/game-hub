import { GameQuery } from "../../App";
import { Platform } from "../PlatformSelector/usePlatforms";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../../services/api-client";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>('/games')

// const useGames = (gameQuery: GameQuery) => useData<Game>('/games', { 
//   params: { 
//     genres: gameQuery.genre?.id, 
//     parent_platforms: gameQuery.platform?.id,
//     ordering: gameQuery.order,
//     search: gameQuery.searchPhrase,
//   }}, 
//   [gameQuery])

const useGames = (gameQuery: GameQuery) => {
  return useQuery({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient.getAll({
      params: { 
        genres: gameQuery.genre?.id, 
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.order,
        search: gameQuery.searchPhrase,
      }
    }),
    staleTime: 10 * 1000,
  })
}

export default useGames
