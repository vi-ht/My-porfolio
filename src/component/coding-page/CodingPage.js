//import css
import "./../../css/font.css";
//import component
import IntroContent from "./IntroContent";
import ProjectLayout from "./ProjectLayout";
import MainContent from "./MainContent";
//import image
import bg from "../../asset/image/pink-bg.png";
import purpleBg from "../../asset/image/Purple.png";
import GreenBg from "../../asset/image/Green.png";
import YellowBg from "../../asset/image/Yellow.png";
//-----------------------
import { Box } from "@chakra-ui/react";
//------------------------------------------
export default function CodingPage() {
  return (
    <Box w='100%'>
        <IntroContent/>
        <ProjectLayout bg={bg} pos='100vh'/>
        <MainContent/>
        <ProjectLayout bg={bg} pos='300vh'/>
        <ProjectLayout bg={YellowBg} pos='400vh'/>
        <ProjectLayout bg={GreenBg} pos='500vh'/>
        <ProjectLayout bg={purpleBg} pos='600vh'/>
    </Box>
  );
}
