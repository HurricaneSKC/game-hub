import { GameQuery } from "../../App";
import { Platform } from "../PlatformSelector/usePlatforms";
import apiClient, { FetchResponse } from "../../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

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
    queryFn: () => apiClient
      .get<FetchResponse<Game>>('/games', {
        params: { 
          genres: gameQuery.genre?.id, 
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.order,
          search: gameQuery.searchPhrase,
        }
      })
      .then((res) => res.data),
    staleTime: 10 * 1000,
  })
}

export default useGames