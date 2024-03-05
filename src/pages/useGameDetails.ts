import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Game } from "../entitites/Game";

const apiClient = new APIClient<Game>(`/games`)

const useGameDetails = (slug?: string) => {
  return useQuery({
    queryKey: ['gameDetail', slug],
    queryFn: () => apiClient.getGameDetail(slug),
  })
}

export default useGameDetails
