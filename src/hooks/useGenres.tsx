import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clinet";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClinet = new APIClient<Genre>("/genres");

function useGenre() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClinet.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres, next: null },
  });
}

export default useGenre;
