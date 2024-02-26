import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/GameHub Resources/Logo/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
