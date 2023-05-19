//import css
import "./../../css/font.css";
import "./../../css/layout.css";
// import chakra components
import { Text, Box, Container, Flex, Center } from "@chakra-ui/react";
//import image

export default function ProjectLayout({children, pos, bg}) {
  return (
    <Center
      w="100%"
      h="100vh"
      mt="5vh"
    >
      {children}
      <img src={bg} alt="wave-hand " className="bg-2nd" style={{ top: `${pos}` }}/>
    </Center>
  );
}
