import { Platform } from "../PlatformSelector/usePlatforms";
import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../../services/api-client";
import { GameQuery } from "../../App";


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
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam = 1}) => 
      apiClient.getAll({
        params: { 
          genres: gameQuery.genre?.id, 
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.order,
          search: gameQuery.searchPhrase,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : 'undefined'
    },
    staleTime: 24 * 60 * 60 * 1000,
  })
}

export default useGames
