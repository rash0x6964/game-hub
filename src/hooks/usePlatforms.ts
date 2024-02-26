import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clinet";
import platforms from "../data/platforms";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiClinet = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClinet.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
