//import css
import "./../../css/font.css";
import "./../../css/layout.css"
//import image
import wavehand from "../../asset/icon/twemojiwavinghand.png";
import scroll from "../../asset/icon/openmojiscroll.png";
import bgImage from "../../asset/icon/bg.png";
// import chakra components
import { Text, Flex, Box } from "@chakra-ui/react";
const TextTemplate = ({ children, container }) => (
  <Text
    fontSize={{
      base: "20px", //0px
      lg: "20px", // 992px
    }}
    className={container ? "container" : "qs-m"}
    lineHeight={{
      base: "40ypx", //0px
      lg: "40px", // 992px
    }}
  >
    {children}
  </Text>
);
export default function IntroContent() {
  return (
    <>
      <Flex
        justifyContent="start"
        direction="column"
        position="absolute"
        bottom="7%"
      >
        {/* <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
        This is responsive text
      </Text> */}
        <Text
          fontSize={{
            base: "50px", //0px
            sm: "60px", // 480px
            md: "70px", // 768px
            lg: "90px", // 992px
            xl: "100px", // 1280px
            "2xl": "100px", //1536px
          }}
          className="qs-smb"
        >
          Nice to see you.
        </Text>
        <TextTemplate container>
          <img src={wavehand} alt="wave-hand" className="wave-hand" />
          <span className="welcome-text qs-m">Welcome to my portfolio! </span>
        </TextTemplate>
        <TextTemplate>
          I’m{" "}
          <span className="highlight qs-b" style={{ color: "black" }}>
            Thanh Vi
          </span>
          , a little girl with a big passion for{" "}
          <span className="highlight qs-b">Front-end web development</span> and
          <span className="highlight qs-b"> UX/UI Design</span>.
        </TextTemplate>
        <TextTemplate container >
          <span className="vi">Scroll down to see my work.{" "}</span>
          {/* <img src={scroll} alt="scroll" className="scroll" /> */}
        </TextTemplate>
      </Flex>
      <img src={bgImage} alt="wave-hand" className="bg" />
    </>
  );
}
