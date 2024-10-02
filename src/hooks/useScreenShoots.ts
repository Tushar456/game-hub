import { useQuery } from "@tanstack/react-query";
import APICLient from "../services/api-client";
import { ScreenShot } from "../entities/ScreenShot";



const useScreenShoots = (gameId:number) =>   {
    const apiClient = new APICLient<ScreenShot>(`/games/${gameId}/screenshots`)

    return useQuery({
    
        queryKey: ["screenShots", gameId],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000,
      });
    
     
}

export default useScreenShoots;