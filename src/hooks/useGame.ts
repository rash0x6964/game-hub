import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clinet";
import { Game } from "../entities/Game";
import ms from "ms";

const apiClinet = new APIClient<Game>("/games");
function useGame(slug: string | number) {
  return useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiClinet.get(slug),
    staleTime: ms("24h"),
  });
}

export default useGame;
