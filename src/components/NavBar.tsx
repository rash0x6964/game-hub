import { HStack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

function NavBar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"/>
	  <Text>Game Hub</Text>
    </HStack>
  );
}

export default NavBar;
