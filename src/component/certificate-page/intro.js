//import css
import "./../../css/font.css";
import "./../../css/layout.css";
import "./../../css/animate.css";
//import hook
import { useEffect } from "react";
//import layout
import BgImageLayout from "../../layout/BgImageLayout";
//import image
import bgImage from "../../asset/icon/bg.png";

// import chakra components
import { Text, Box } from "@chakra-ui/react";
import { AnimateObjectList } from "../homepage/IntroContent";


/**
 * AnimateObjectList is a component that renders a list of animated objects.
 * The component receives no props and returns a Box component with the animated objects.
 * The animated objects are rendered as absolute positioned img elements with a transform that scales the image based on the screen size.
 * The images are rendered with the following styles:
 * - at base screen size, the images are scaled to 0.6
 * - at sm screen size, the images are scaled to 0.6
 * - at 2xl screen size, the images are scaled to 0.8
 * - at 3xl screen size, the images are scaled to 1
 */

const TextTemplate = ({ children, container }) => (
  <Text
    fontSize={{
      base: "16px", //0px
      lg: "20px", // 992px
    }}
    className={container ? "container" : "qs-m"}
    lineHeight={{
      base: "30px", //0px
      lg: "40px", // 992px
    }}
    mt={{
      base: "0.8rem", //0px
      lg: "0", // 992px
    }}
  >
    {children}
  </Text>
);
export default function IntroCertificate() {
  useEffect(() => {
    let text1 = "We meet again :D";
    let text2 = "Let's explore <3 ";
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

          <TextTemplate>

            This page showcases a complete collection of my certificates, ranging from {" "}
            <span className="highlight qs-b">
              academic achievements
            </span>
            {" "}to{" "}
            <span className="highlight qs-b">
              language proficiency
            </span>
            {" "}and{" "}
            <span className="highlight qs-b">
              online course completion.
            </span>
          </TextTemplate>
          <TextTemplate container>
            <span className="vi qs-m">
              Let's scroll down to see.{" "}
            </span>
          </TextTemplate>
        </Box>
      </Box>
    </BgImageLayout>
  );
}
