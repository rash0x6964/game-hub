import { HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "../components/ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Prop {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Prop) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
