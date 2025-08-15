//import css
import "./../../css/font.css";
//import hook
import { useTitle } from "./../../customHook/useTitle";
//import component
import Quote from "./Quote";
import ProjectList from "./ProjectList";
import Footer from "../../layout/Footer";
import UIUXIntroContent from "./intro";
//-----------------------
import { Box } from "@chakra-ui/react";
//------------------------------------------
export default function UIUXPage() {
  useTitle(`UX/UI projects | Thanh Vi's portfolio`);
  return (
    <Box w='100%'>
      <UIUXIntroContent />
      <Quote />
      <ProjectList />
      <Footer mt={{ base: "-2rem", lg: "-4rem" }} />
    </Box>
  );
}
