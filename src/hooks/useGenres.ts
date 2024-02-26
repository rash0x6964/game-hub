import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clinet";
import genres from "../data/genres";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiClinet = new APIClient<Genre>("/genres");

function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClinet.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });
}

export default useGenres;
