import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGame"


interface Props {
	data: Game
}

function GameCard({ data }: Props) {
  return (
	<Card borderRadius={10} overflow='hidden'>
		<Image src={data.background_image}/>
		<CardBody>
			<Heading fontSize='2xl'>{data.name}</Heading>
		</CardBody>
	</Card>
  )
}

export default GameCard
