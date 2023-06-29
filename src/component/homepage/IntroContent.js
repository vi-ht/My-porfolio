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
            base: "40px", //0px
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
export default function IntroContent() {
    useEffect(() => {
        let text1 = "Nice to see you.";
        let text2 = "Have a nice day :) ";
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
                    variable = setTimeout(()=>{
                        let texttoclear= text===text1?text2:text1;
                        clear(texttoclear)
                    }, 1000);
                } else {
                    variable = setTimeout(()=>{typing(text)}, 250);
                }
            }
        }
        function clear(text) {
            let currentText = document.getElementById("typing").innerText;
            let element = document.getElementById("typing");
            element.innerText =
                currentText.substring(0, currentText.length - 2) + "|";
            if (currentText !== "|") {
                variable = setTimeout(()=>{
                    clear(text)
                }, 200);
            } else {
                element.innerText = "";
                pos = 0;
                variable = setTimeout(()=>{
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
        <BgImageLayout bg={bgImage} pos="70% 100%" mainpage>
            <Box w="full" h="full" position="relative">
                <Box
                    position="absolute"
                    bottom="3rem"
                    className="intro"
                    transform="translate(0px,50px)"
                >
                    <Text
                        fontSize={{
                            base: "55px", //0px
                            sm: "60px", // 480px
                            md: "70px", // 768px
                            lg: "90px", // 992px
                            xl: "100px", // 1280px
                            "2xl": "100px", //1536px
                        }}
                        className="qs-smb"
                        id="typing"
                    ></Text>
                    <TextTemplate container>
                        <img
                            src={wavehand}
                            alt="wave-hand"
                            className="wave-hand"
                        />
                        <span className="welcome-text qs-m">
                            Welcome to my portfolio!{" "}
                        </span>
                    </TextTemplate>
                    <TextTemplate>
                        I’m{" "}
                        <span
                            className="highlight qs-b"
                            style={{ color: "black" }}
                        >
                            Thanh Vi
                        </span>
                        , a little girl with a big passion for{" "}
                        <span className="highlight qs-b">
                            Front-end web development
                        </span>{" "}
                        and
                        <span className="highlight qs-b"> UX/UI Design</span>.
                    </TextTemplate>
                    <TextTemplate container>
                        <span className="vi qs-m">
                            Scroll down to see my work.{" "}
                        </span>
                        {/* <img src={scroll} alt="scroll" className="scroll" /> */}
                    </TextTemplate>
                </Box>
            </Box>
        </BgImageLayout>
    );
}
