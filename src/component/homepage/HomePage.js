//import css
import "./../../css/font.css";
//import hook
import { useTitle } from "./../../customHook/useTitle";
//import component
import IntroContent from "./IntroContent";
import Footer from "../../layout/Footer";
import AboutMeQuote from "./aboutme-quote";
import Resume from "../resume-page/Resume";
//-----------------------
import { Box } from "@chakra-ui/react";
import AboutMePage from "../aboutme-page/AboutMePage";
import CVPage from "../resume-page/cv";
import GoalQuote from "./goal-quote";
import StudyQuote from "./study-quote";
//------------------------------------------
export default function HomePage() {
  useTitle(`About me | Thanh Vi's portfolio`);
  return (
    <Box w='100%'>
      <IntroContent />
      <AboutMeQuote />
      <AboutMePage />
      <StudyQuote />
      <Resume />
      <CVPage />
      <GoalQuote />
      <Footer mt={{ base: "-2rem", lg: "2.5rem" }} />
    </Box>
  );
}
