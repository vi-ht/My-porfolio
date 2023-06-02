//import css
import "./../../css/font.css";
import "./../../css/Color.css";
//import hook
import { useTitle } from "../../customHook/useTitle";
//import compoment
import Footer from "../../layout/Footer";
import ViewMore from "./Viewmore";
import BreadcrumbComp from "./Breadcrumb";
//import chakra UI component
import { Box, Center } from "@chakra-ui/react";
//import chakra UI icon
import { LinkIcon } from "@chakra-ui/icons";
//import react-router-dom
import { Link } from "@chakra-ui/react";
//import path
import { PATH } from "../../router/Path";
//-------------------------------------------------
export default function Cogibannay() {
    useTitle(`MoMo talent project | Thanh Vi's portfolio`);
    return (
        <Box>
            <Center w="full" bg="white" bgSize="100%" mainPage>
                <BreadcrumbComp
                    projectName="MoMo talent project"
                    path={PATH.cogibannay}
                />
            </Center>
            <ViewMore id={4} />
            <Footer mt={10} position="relative" top="2rem" />
        </Box>
    );
}
