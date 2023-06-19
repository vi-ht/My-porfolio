import { Container } from "@chakra-ui/react";
//import hook
import { useEffect } from "react";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import { Box, Flex, Center } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
export default function MainLayout() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    useEffect(()=>{
     console.log("location",location.pathname)
    },[location])
    return (
        <Container
            maxW="100vw"
            h="100vh"
            centerContent
            p="0"
            position="relative"
        >
            <Header />
            <MobileHeader />
            <Center w="full">
                <Outlet />
            </Center>
        </Container>
    );
}
