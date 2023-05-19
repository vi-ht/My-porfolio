import { Container } from "@chakra-ui/react";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <Container maxW="full" h="100vh" centerContent>
      <Header />
      <MobileHeader />
      <Box
        minW={{
          base: "100%", //0px
          sm: "100%", // 480px
          md: "90%", // 768px
          lg: "85%", // 992px
          xl: "80%", // 1280px
          "2xl": "90rem", //1536px
        }}
        p={4}
      >
        <Outlet />
      </Box>
    </Container>
  );
}
