import { HStack } from "@chakra-ui/react";
import { IoStarSharp } from "react-icons/io5";
import { RiStarSLine } from "react-icons/ri";

interface Props {
  rating: number;
}

function Rating({ rating }: Props) {

	const stars = [1, 2, 3, 4, 5]

  return <HStack alignItems="center">
	{stars.map((star) => {
		if (star < rating)
	 		return <IoStarSharp key={star} size={20}/>
		return <RiStarSLine key={star} size={25}/>
	})}
  </HStack>;
}

export default Rating;
