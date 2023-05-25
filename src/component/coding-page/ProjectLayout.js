//import css
import "./../../css/font.css";
import "./../../css/layout.css";
// import chakra components
import { Text, Box, Container, Flex, Center } from "@chakra-ui/react";
//import image
import Felix from "../../asset/image/Felix-mockups.png";
//import chakra UI component
import { Grid, GridItem } from "@chakra-ui/react";
export default function ProjectLayout({ children, pos, bg, mt }) {
  return (
    <Center
      w="100%"
      h="100vh"
      mt={mt}
    >
      {children}     
      <img
        src={bg}
        alt="wave-hand "
        className="bg-2nd"
        style={{ top: `${pos}` }}
      />
    </Center>
  );
}
