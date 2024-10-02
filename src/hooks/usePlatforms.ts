import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APICLient from "../services/api-client";
import { Platform } from "../entities/Platform";
const apiClient = new APICLient<Platform>('/platforms/lists/parents');
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count: platforms.length, results: platforms, next: null}
  });

export default usePlatforms;
