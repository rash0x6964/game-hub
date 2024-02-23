import { useQuery } from "@tanstack/react-query";
import { FetchDataRes } from "../services/api-clinet";
import apiClinet from "../services/api-clinet";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

function useGenre() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClinet.get<FetchDataRes<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
	initialData: { results: genres }
  });
}

export default useGenre;
