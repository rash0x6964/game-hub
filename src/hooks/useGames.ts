import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchDataRes } from "../services/api-clinet";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

const apiClinet = new APIClient<Game>("/games");

function useGames() {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchDataRes<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClinet.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platfroms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),

    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.next) return undefined;
      return allPages.length + 1;
    },
    staleTime: ms("24h"),
  });
}

export default useGames;
