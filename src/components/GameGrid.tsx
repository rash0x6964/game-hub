import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGame();

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid spacing={3} columns={{sm: 1, md: 2, lg: 3, xl: 5}}>
        {games.map((game) => (
          <GameCard key={game.id} data={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
