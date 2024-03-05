// import useData from "../../hooks/useData";

import { useQuery } from "@tanstack/react-query";
import APIClient  from "../../services/api-client";
import genres from "../../data/genres";
import ms from "ms";
import { Genre } from "../../entitites/Genre";

const apiClient = new APIClient<Genre>('/genres')

// const useGenres = () => useData<Genre>('/genres')
// const useGenres = () => ({ data:genres, isLoading:false, error:null })
const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('1 day'),
    initialData: genres
  })
}

export default useGenres
