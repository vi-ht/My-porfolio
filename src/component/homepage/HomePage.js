//import css
import "./../../css/font.css";
//import hook
import { useTitle } from "./../../customHook/useTitle";
//import component
import IntroContent from "./IntroContent";
import Quote from "./Quote";
import ProjectList from "./ProjectList";
import Footer from "../../layout/Footer";
//-----------------------
import { Box } from "@chakra-ui/react";
//------------------------------------------
export default function HomePage() {
  useTitle(`UX/UI | Thanh Vi's portfolio`);
  return (
    <Box w='100%'>
      <IntroContent />
      <Quote/>
      <ProjectList/>
      <Footer mt="-4rem"/>
    </Box>
  );
}
