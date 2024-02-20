import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

function useGenre() {
  return useData<Genre>("/genres");
}

export default useGenre;
