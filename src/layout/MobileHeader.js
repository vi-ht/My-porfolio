
// import CSS
import "./../css/font.css";
import "./../css/Color.css";
import "./../css/layout.css";
// import chakraUI components
import { HStack, Text, Box, Flex, Spacer } from "@chakra-ui/react";
// import component
import MobileDrawer from "./Drawer";
//----------------------------------
export default function MobileHeader() {
  return (
    <Flex
      minW={{
        base: "100%", //0px
        sm: "100%", // 480px
        md: "90%", // 768px
        lg: "85%", // 992px
        xl: "80%", // 1280px
        "2xl": "90rem", //1536px
      }}
      display={{
        base: "flex", //0px
        sm: "flex", // 480px
        md: "flex", // 768px
        lg: "none", // 992px
        xl: "none", // 1280px
        "2xl": "none", //1536px
      }}
      mt={5}
      alignItems="center"
    >
      <Box p="4">
        <Text fontSize="4xl" fontWeight={700} className="qs-b main-color">
          Thanh Vi
        </Text>
      </Box>
      <Spacer />
      <Box p="4">
        <MobileDrawer/>
      </Box>
    </Flex>
  );
}
