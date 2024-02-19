import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  data: Game;
}

function GameCard({ data }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={data.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{data.name}</Heading>
        <PlatformIconList
          platforms={data.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
}

export default GameCard;
