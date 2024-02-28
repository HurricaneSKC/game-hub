// import useData from "../../hooks/useData";

import { useQuery } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import platforms from "../../data/platforms";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('1 day'),
    initialData: platforms
  })
}

export default usePlatforms