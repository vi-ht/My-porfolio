//import css
import "./../../css/font.css";
import "./../../css/Color.css";
//import component
import IntroContent from "./IntroContent";
import Quote from "./Quote";
import MonitoProject from "./MonitoProject";
import MainContent from "./MainContent";
import FelixzoneProject from "./FelixzoneProject";
import PorfolioProject from "./PorfolioProject";
//import image
import bg from "../../asset/image/pink-bg.png";
import purpleBg from "../../asset/image/Purple.png";
import GreenBg from "../../asset/image/Green.png";
import YellowBg from "../../asset/image/Yellow.png";
import Felix from "../../asset/image/Felix-mockups.png";
import MYB from "../../asset/image/MYB-mockups.png";
import Monito from "../../asset/image/Monito-mockups.png";
import Climate from "../../asset/image/Climate-mockups.png";
import Porfolio from "../../asset/image/Porfolio-mockups.png";
import Thesis from "../../asset/image/thesis.png";
//import chakra UI component
import { Grid, GridItem, Box, Text, Center, Flex, Container } from "@chakra-ui/react";
//------------------------------------------
// const GridLayout = () => {
//   return (

//   );
// };
export default function CodingPage() {
    return (
        <Box width="full">
            <IntroContent />
            <Quote/>
            <FelixzoneProject/>
            <MainContent />
            <PorfolioProject/>
            <MonitoProject/>
            {/* 
            
            <ProjectLayout bg={YellowBg} pos="500vh" mt="0vh">
                <Grid w="full" templateColumns="repeat(12, 1fr)" gap={4}>
                    <GridItem colSpan={5} colStart={1}>
                        hhhh
                    </GridItem>
                    <GridItem colSpan={7} colStart={6}>
                        <img
                            src={Monito}
                            alt="MYB Mockups"
                            style={{ width: "100%" }}
                        ></img>
                    </GridItem>
                </Grid>
            </ProjectLayout>
            <ProjectLayout bg={purpleBg} pos="600vh" mt="0vh">
                <Grid w="full" templateColumns="repeat(12, 1fr)" gap={4}>
                    <GridItem colSpan={7} colStart={1}>
                        <img
                            src={MYB}
                            alt="MYB Mockups"
                            style={{ width: "100%" }}
                        ></img>
                    </GridItem>
                    <GridItem colSpan={5} colStart={8}>
                        hhhh
                    </GridItem>
                </Grid>
            </ProjectLayout>
            <ProjectLayout bg={GreenBg} pos="700vh" mt="0vh">
                <Grid w="full" templateColumns="repeat(12, 1fr)" gap={4}>
                    <GridItem colSpan={5} colStart={1}>
                        hhhh
                    </GridItem>
                    <GridItem colSpan={7} colStart={6}>
                        <img
                            src={Climate}
                            alt="MYB Mockups"
                            style={{ width: "100%" }}
                        ></img>
                    </GridItem>
                </Grid>
            </ProjectLayout> */}
        </Box>
    );
}
