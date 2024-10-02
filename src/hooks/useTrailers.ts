import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import APICLient from "../services/api-client";



const useTrailers = (gameId:number) =>   {
    const apiClient = new APICLient<Trailer>(`/games/${gameId}/movies`)

    return useQuery({
    
        queryKey: ["trailers", gameId],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000,
      });
    
     
}

export default useTrailers;