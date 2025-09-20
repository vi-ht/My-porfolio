//import css
import "./../../css/font.css";
import "./../../css/Color.css";
//import hook
import { useTitle } from "./../../customHook/useTitle";
//import component
// import IntroContent from "./IntroContent";
import Footer from "../../layout/Footer";
import Quote from "./sub-section/edu-quote";
import LanguageCert from "./sub-section/lang-cert";
import OnlineCourseList from "./sub-section/online-course-list";
import LanguageQuote from "./sub-section/language-quote";
// import MonitoProject from "./MonitoProject";
// import MainContent from "./MainContent";
// import FelixzoneProject from "./FelixzoneProject";
// import PorfolioProject from "./PorfolioProject";
// import MYBProject from "./MYBProject";
// import NatureProject from "./NatureProject";
// import InternoProject from "./InternoProject";
//import chakra UI component
import ProjectList from "./sub-section/ProjectList";
import { Box } from "@chakra-ui/react";
import IntroCertificate from "./intro";
//------------------------------------------
export default function CodingPage() {
  useTitle(`Coding projects | Thanh Vi's portfolio`);
  return (
    <Box width="full">
      <IntroCertificate />
      <Quote />
      <ProjectList />
      <LanguageQuote />
      <LanguageCert />
      <OnlineCourseList />
      <Footer mt={10} />
    </Box>
  );
}
