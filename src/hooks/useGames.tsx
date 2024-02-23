import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-clinet";
import { FetchDataRes } from "../services/api-clinet";
import { Platform } from "./usePlatforms";

const apiClinet = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

function useGame(gameQuery: GameQuery) {
  return useQuery<FetchDataRes<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClinet.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platfroms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });
}

export default useGame;
