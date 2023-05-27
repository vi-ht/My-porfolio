import { Container } from "@chakra-ui/react";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import { Box, Flex, Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <Container maxW="100vw" h="100vh" centerContent p="0" position="relative">
      <Header />
      <MobileHeader />
      <Center
        // w={{
        //   base: "98%", //0px
        //   sm: "98%", // 480px
        //   md: "90%", // 768px
        //   lg: "85%", // 992px
        //   xl: "80%", // 1280px
        //   "2xl": "90rem", //1536px
        // }}
        // justify="content"
        // align="content"
        w="full"
        
        // p={4}
      >
        <Outlet />
      </Center>
    </Container>
  );
}
