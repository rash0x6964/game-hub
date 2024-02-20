import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

function useGame(gameQuery: GameQuery) {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platfroms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );
}

export default useGame;
