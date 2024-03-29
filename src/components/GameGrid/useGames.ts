import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../../services/api-client";
import ms from "ms";
import useGameQueryStore from "../../store/store";
import { Game } from "../../entitites/Game";


const apiClient = new APIClient<Game>('/games')

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam = 1}) => 
    apiClient.getAll({
      params: { 
        genres: gameQuery.genreId, 
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.order,
        search: gameQuery.searchPhrase,
        page: pageParam,
      },
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : 'undefined'
    },
    staleTime: ms('1 day'),
  })
}

export default useGames


// const useGames = (gameQuery: GameQuery) => useData<Game>('/games', { 
//   params: { 
//     genres: gameQuery.genre?.id, 
//     parent_platforms: gameQuery.platform?.id,
//     ordering: gameQuery.order,
//     search: gameQuery.searchPhrase,
//   }}, 
//   [gameQuery])