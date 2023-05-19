//import css
import "./../../css/font.css";
import "./../../css/layout.css";
// import chakra components
import { Text, Box, Container, Flex, Center } from "@chakra-ui/react";
//import image
import bg from "../../asset/image/pink-bg.png";
export default function Quote() {
  return (
    <Center
      // backgroundImage={bg}
      w="100%"
      h="100vh"
      mt="85vh"
    >
      <Text
        fontSize={{
          base: "23px", //0px
          sm: "23px", // 480px
          md: "27px", // 768px
          lg: "27px", // 992px
          xl: "30px", // 1280px
          "2xl": "30px", //1536px
        }}
        lineHeight={{
          base: "40px", //0px
          md: "45px", // 768px
          xl: "50px", // 1280px
        }}
        // fontSize='30px'
        // lineHeight='50px'
        className="qs-m"
        w={{
          base: "300px", //0px
          sm: "450px", // 480px
          md: "600px", // 768px
          lg: "800px", // 992px
          xl: "1000px", // 1280px
          "2xl": "1000px", //1536px
        }}
        textAlign="center"
        position="relative"
      >
        <span className="quote-content"></span>
        "UI/UX self-learning process has many difficulties and obstacles for a
        newbie like me, but I know that{" "}
        <span className="highlight qs-b">persistence</span> and{" "}
        <span className="highlight qs-b">responsibility</span> for my goal are
        the prerequisite factor for pursuing a big dream."
      </Text>
      <img src={bg} alt="wave-hand " className="bg-2nd" />
    </Center>
  );
}
