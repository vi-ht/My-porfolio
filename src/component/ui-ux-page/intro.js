//import css
import "./../../css/font.css";
import "./../../css/layout.css";
import "./../../css/animate.css";
//import hook
import { useEffect } from "react";
//import layout
import BgImageLayout from "../../layout/BgImageLayout";
//import image
import wavehand from "../../asset/icon/twemojiwavinghand.png";
import bgImage from "../../asset/icon/bg.png";
import square1st from "../../asset/image/homepage-illustrate/square-1st.png";
import polygon1st from "../../asset/image/homepage-illustrate/polygon-1st.png";
import polygon2nd from "../../asset/image/homepage-illustrate/polygon-2nd.png";
import polygon3th from "../../asset/image/homepage-illustrate/polygon-3th.png";
import Rectangle1st from "../../asset/image/homepage-illustrate/rectangle-1st.png";
import Rectangle2nd from "../../asset/image/homepage-illustrate/rectangle-2nd.png";
import ellipse1st from "../../asset/image/homepage-illustrate/ellipse-1st.png";
import ellipse2nd from "../../asset/image/homepage-illustrate/ellipse-2nd.png";
import ellipse3th from "../../asset/image/homepage-illustrate/ellipse-3th.png";
// import chakra components
import { Text, Box } from "@chakra-ui/react";


const AnimateObjectList = () => {
  const ObjectItem = ({ top, left, right, bottom, src, className, alt }) => (
    <Box
      position="absolute"
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      transform={{ base: "scale(0.6)", xl: "scale(0.6)", '2xl': "scale(0.8)", "3xl": "scale(1)" }}>
      <img
        src={src}
        className={className}
        alt={alt}
      ></img>
    </Box>
  )
  return (
    <Box width="100vw" height="100vh" position={"absolute"} overflow={"hidden"}>
      {/* <Box position="absolute" top="52%" left="43%" transform={{ base: "scale(0.8)", "3xl": "scale(1)" }}>
                <img
                    src={square1st}
                    className="illustrate-image-1"
                    alt="1st illustrate object"
                ></img>
            </Box> */}
      <ObjectItem
        top="52%"
        left="43%"
        src={square1st}
        className="illustrate-image-1"
        alt="1st illustrate object"
      />
      <ObjectItem
        top="26%"
        left="15%"
        src={polygon1st}
        className="illustrate-image-2"
        alt="1st illustrate object"
      />
      <ObjectItem
        top="-15.4%" left="39%"
        src={Rectangle1st}
        className="illustrate-image-3"
        alt="1st illustrate object"
      />
      <ObjectItem
        top="28%" left="64%"
        src={ellipse1st}
        className="illustrate-image-1"
        alt="1st illustrate object"
      />
      <ObjectItem
        bottom="-29%" right="-7%"
        src={ellipse2nd}
        className="illustrate-image-2"
        alt="1st illustrate object"
      />
      <ObjectItem
        top="10%" right="-6%"
        src={polygon2nd}
        className="illustrate-image-3"
        alt="1st illustrate object"
      />
      <ObjectItem
        top="1.5%" right="10%"
        src={polygon3th}
        className="illustrate-image-1"
        alt="1st illustrate object"
      />
      <ObjectItem
        bottom="10%" left="-10%"
        src={Rectangle2nd}
        className="illustrate-image-2"
        alt="1st illustrate object"
      />
      <ObjectItem
        top="-10%" left="-8%"
        src={ellipse3th}
        className="illustrate-image-3"
        alt="1st illustrate object"
      />
    </Box >
  )
}
const TextTemplate = ({ children, container }) => (
  <Text
    fontSize={{
      base: "18px", //0px
      lg: "20px", // 992px
    }}
    className={container ? "container" : "qs-m"}
    lineHeight={{
      base: "30px", //0px
      lg: "38px", // 992px
    }}
    mt={{
      base: "0.8rem", //0px
      lg: "0", // 992px
    }}
    maxWidth={"900px"}
  >
    {children}
  </Text>
);
export default function UIUXIntroContent() {
  useEffect(() => {
    let text1 = "How are u doing?";
    let text2 = "Hope u are well :>";
    let pos = 0;
    let variable = "";
    function typing(text) {
      if (pos < text.length) {
        let currentText = document.getElementById("typing").innerText;
        let element = document.getElementById("typing");
        if (pos === 0) {
          element.innerText = text.charAt(0) + "|";
        } else {
          element.innerText =
            currentText.substring(0, currentText.length - 1) +
            text.charAt(pos) +
            "|";
        }
        pos++;
        if (pos === text.length) {
          variable = setTimeout(() => {
            let texttoclear = text === text1 ? text2 : text1;
            clear(texttoclear)
          }, 1000);
        } else {
          variable = setTimeout(() => { typing(text) }, 250);
        }
      }
    }
    function clear(text) {
      let currentText = document.getElementById("typing").innerText;
      let element = document.getElementById("typing");
      element.innerText =
        currentText.substring(0, currentText.length - 2) + "|";
      if (currentText !== "|") {
        variable = setTimeout(() => {
          clear(text)
        }, 200);
      } else {
        element.innerText = "";
        pos = 0;
        variable = setTimeout(() => {
          typing(text)
        }, 500);
      }
    }
    typing(text1);
    return () => {
      clearTimeout(variable);
    };
  }, []);
  return (
    <BgImageLayout bg={bgImage} pos="70% 100%" mainpage animateChildren={<AnimateObjectList />}>

      <Box w="full" h="full" position="relative">

        <Box
          position="absolute"
          bottom="3rem"
          className="intro"
          transform="translate(0px,50px)"
        >
          <Text
            fontSize={{
              base: "50px", //0px
              sm: "60px", // 480px
              md: "70px", // 768px
              lg: "90px", // 992px
              xl: "100px", // 1280px
              "2xl": "100px", //1536px
            }}
            lineHeight={{
              base: "60px", sm: "70px", md: "80px", lg: "130px"//0px
            }}
            className="qs-smb"
            id="typing"
          ></Text>
          <TextTemplate container>
            <span className="qs-b" mt={1}>
              This page is about my UX/UI projects!{" "}
            </span>
          </TextTemplate>
          <TextTemplate>
            <span className="highlight qs-b">
              I'm just a newbie in the field of UI-UX
            </span> {" "}
            , the projects below are accumulated by me through the process of continuous self-learning, so I hope to receive gentle evaluation from you.
          </TextTemplate>
          <TextTemplate container>
            <span className="vi qs-m">
              Let's scroll down to explore.{" "}
            </span>
            {/* <img src={scroll} alt="scroll" className="scroll" /> */}
          </TextTemplate>
        </Box>
      </Box>
    </BgImageLayout >
  );
}
