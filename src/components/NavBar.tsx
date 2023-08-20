import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="80px" />
      <Text>Maa Nainawati Public School</Text>
    </HStack>
  );
};

export default NavBar;
