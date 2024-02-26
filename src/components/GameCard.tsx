import { Card, CardBody, Heading, Image, HStack, Link } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Rating from "./Rating";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link href={`games/${game.slug}`}>{game.name}</Link>
        </Heading>
        <Rating rating={game.rating_top} />
      </CardBody>
    </Card>
  );
}

export default GameCard;
