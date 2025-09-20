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
export const AnimateObjectList = () => {
    const ObjectItem = ({ top, left, right, bottom, src, className, alt }) => (
        <Box
            position="absolute"
            top={top}
            left={left}
            right={right}
            bottom={bottom}
            transform={{ base: "scale(0.43)", sm: "scale(0.55)", xl: "scale(0.6)", '2xl': "scale(0.75)", "3xl": "scale(1)" }}>
            <img
                src={src}
                className={className}
                alt={alt}
            ></img>
        </Box>
    )
    return (
        <Box width="100vw" height="100vh" position={"absolute"} overflow={"hidden"} display={{ base: "none", ssm: "block" }}>
            <ObjectItem
                top={"52%"}
                left={"43%"}
                src={square1st}
                className="illustrate-image-1"
                alt="1st illustrate object"
            />
            <ObjectItem
                top={{ base: "40%", md: "26%" }}
                left={{ base: "-15%", md: "15%" }}
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
                top={{ base: "55%", md: "28%" }} left={{ base: "70%", md: "64%" }}
                src={ellipse1st}
                className="illustrate-image-1"
                alt="1st illustrate object"
            />
            <ObjectItem
                bottom={{ base: "-40%", md: "-29%" }} right={{ base: "-90%", md: "-7%" }}
                src={ellipse2nd}
                className="illustrate-image-2"
                alt="1st illustrate object"
            />
            <ObjectItem
                top="10%" right={{ base: "-25%", md: "-6%" }}
                src={polygon2nd}
                className="illustrate-image-3"
                alt="1st illustrate object"
            />
            <ObjectItem
                top={{
                    base: "-10%", md: "1.5%"
                }} right="10%"
                src={polygon3th}
                className="illustrate-image-1"
                alt="1st illustrate object"
            />
            <ObjectItem
                bottom={{ base: "-17%", md: "10%" }} left={{ base: "-25%", md: "-10%" }}
                src={Rectangle2nd}
                className="illustrate-image-2"
                alt="1st illustrate object"
            />
            <ObjectItem
                top={{ base: "5%", md: "-10%" }} left={{ base: "-15%", md: "-8%" }}
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
                    <TextTemplate container >
                        <span className="vi qs-m ">
                            Scroll down to see more about me.{" "}
                        </span>
                        {/* <img src={scroll} alt="scroll" className="scroll" /> */}
                    </TextTemplate>
                </Box>
            </Box>
        </BgImageLayout>
    );
}
