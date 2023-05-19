//import css
import "./../../css/font.css";
import "./../../css/layout.css";
// import chakra components
import { Text, Box, Container, Flex, Center } from "@chakra-ui/react";
//import image
import bg from "../../asset/image/Main-Content-bg.png";
import icon from "../../asset/icon/twemoji_woman-technologist.png";
export default function MainContent() {
  return (
    <Flex
      // backgroundImage={bg}
      w="100%"
      h="100vh"
      mt="7vh"
      align="center"
      justify="center"
      direction="column"
    >
      <img
        src={icon}
        alt="wave-hand"
        style={{ width: "60px", height: "60px" }}
      />

      <Text
        fontSize={{
          base: "55px", //0px
          sm: "60px", // 480px
          md: "70px", // 768px
          lg: "90px", // 992px
          xl: "35px", // 1280px
          "2xl": "35px", //1536px
        }}
        className="qs-smb"
      >
        Team Work Project
      </Text>
      <div className="line" style={{ margin: "1rem 0" }}></div>
      <Text
        fontSize={{
          base: "20px", //0px
          lg: "20px", // 992px
        }}
        mt={{
          base: "0.8rem", //0px
          lg: "0", // 992px
        }}
        w="50%"
        textAlign="center"
      >
        This is a project me and a group of friends worked together to build a
        website for the Felixzone company.
      </Text>
      <div className="bg-2nd" style={{ top: "200vh" }}>
        <img src={bg} alt="wave-hand" style={{objectFit: "cover", width:"100%", height:"100%", objectPosition: "70% 100%"}} />
      </div>
    </Flex>
  );
}
