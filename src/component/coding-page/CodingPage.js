//import css
import "./../../css/font.css";
import "./../../css/Color.css";
//import hook
import { useEffect, useLayoutEffect } from "react";
//import component
import IntroContent from "./IntroContent";
import Footer from "../../layout/Footer";
import Quote from "./Quote";
import MonitoProject from "./MonitoProject";
import MainContent from "./MainContent";
import FelixzoneProject from "./FelixzoneProject";
import PorfolioProject from "./PorfolioProject";
import MYBProject from "./MYBProject";
import NatureProject from "./NatureProject";
//import chakra UI component
import { Box } from "@chakra-ui/react";
//------------------------------------------

export default function CodingPage() {
    return (
        <Box width="full">
            <IntroContent />
            <Quote />
            <FelixzoneProject />
            <MainContent />
            <PorfolioProject />
            <MonitoProject />
            <MYBProject />
            <NatureProject />
            <Footer mt={10}/>
        </Box>
    );
}
