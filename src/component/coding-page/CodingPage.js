//import css
import "./../../css/font.css";
import "./../../css/Color.css";
//import hook
import { useTitle } from "./../../customHook/useTitle";
import IUHProject from "./iuhPage";
import MIDProject from "./mid-project";
//import component
import IntroContent from "./IntroContent";
import Footer from "../../layout/Footer";
import FactorazyProject from "./FactorazyPage";
import MonitoProject from "./MonitoProject";
import MainContent from "./MainContent";
import FelixzoneProject from "./FelixzoneProject";
import PorfolioProject from "./PorfolioProject";
import MYBProject from "./MYBProject";
import NatureProject from "./NatureProject";
import InternoProject from "./InternoProject";
import ProjectQuote from "./project-quote";
import Quote from "../homepage/Quote";
//import chakra UI component
import { Box } from "@chakra-ui/react";
//------------------------------------------

export default function CodingPage() {
    useTitle(`Coding projects | Thanh Vi's portfolio`);
    return (
        <Box width="full">
            <IntroContent />
            <Quote />
            <FelixzoneProject />
            <FactorazyProject />
            <MIDProject />
            <IUHProject />
            <ProjectQuote />

            <MainContent />
            <PorfolioProject />
            <MonitoProject />
            <MYBProject />
            <NatureProject />
            <InternoProject />
            <Footer mt={10} />
        </Box>
    );
}
