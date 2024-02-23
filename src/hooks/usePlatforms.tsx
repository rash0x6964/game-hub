import { useQuery } from "@tanstack/react-query";
import { FetchDataRes } from "../services/api-clinet";
import apiClinet from "../services/api-clinet";
import platforms from "../data/platforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClinet
        .get<FetchDataRes<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { results: platforms }
  });

export default usePlatforms;
