import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clinet";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClinet = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClinet.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { results: platforms },
  });

export default usePlatforms;
