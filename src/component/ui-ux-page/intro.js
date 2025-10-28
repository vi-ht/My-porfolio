//import css
import "./../../css/font.css";
import "./../../css/layout.css";
import "./../../css/animate.css";
//import hook
import { useEffect } from "react";
//import layout
import BgImageLayout from "../../layout/BgImageLayout";
//import image
// import chakra components
import { AnimateObjectList } from "../homepage/IntroContent";

import { Text, Box } from "@chakra-ui/react";

const TextTemplate = ({ children, container }) => (
  <Text
    fontSize={{
      base: "16px", //0px
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
    <BgImageLayout pos="70% 100%" mainpage animateChildren={<AnimateObjectList />}>

      <Box w="full" h="full" position="relative">

        <Box
          position="absolute"
          bottom="3rem"
          className="intro"
          transform="translate(0px,50px)"
        >
          <Text
            fontSize={{
              base: "40px", //0px
              sm: "50px", // 480px
              md: "60px", // 768px
              lg: "70px", // 992px
              xl: "80px", // 1280px
              "2xl": "90px", //1536px
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
