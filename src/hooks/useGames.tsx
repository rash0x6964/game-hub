import useData from "./useData";
import { Genre } from "./useGenres";

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

function useGame(
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) {
  return useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platfroms: selectedPlatform?.id } },
    [selectedGenre, selectedPlatform]
  );
}

export default useGame;
