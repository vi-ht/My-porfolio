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
        <Center
            w="full"
            h="100vh"
            position="relative"
            // backgroundImage={bg}
            // backgroundPosition="50% 100%"
            // backgroundRepeat="no-repeat"
            // bgSize="100% 100%"
        >
            <Center
                w={{
                    base: "94%", //0px
                    sm: "98%", // 480px
                    md: "90%", // 768px
                    lg: "85%", // 992px
                    xl: "80%", // 1280px
                    "2xl": "90rem", //1536px
                }}
                h="100vh"
            >
                <Flex
                    w="full"
                    alignItems="center"
                    justify="center"
                    direction="column"
                >
                    <img
                        src={icon}
                        alt="wave-hand"
                        style={{ width: "55px", height: "55px" }}
                    />
                    <Text
                        fontSize={{
                            base: "25px", //0px
                            sm: "25px", // 480px
                            md: "30px", // 768px
                            lg: "30px", // 992px
                            xl: "35px", // 1280px
                            "2xl": "35px", //1536px
                        }}
                        className="qs-smb"
                    >
                        Personal Project
                    </Text>
                    <div className="line" style={{ margin: "1rem 0" }}></div>
                    <Text
                        fontSize={{
                            base: "16px", //0px
                            lg: "20px", // 992px
                        }}
                        mt={{
                            base: "0.3rem", //0px
                            lg: "0", // 992px
                        }}
                        w={{
                            base: "100%", //0px
                            lg: "50%", // 992px
                        }}
                        textAlign="center"
                    >
                        These are the web designs I found from Figma community
                        of other designers. and I used it to build a real
                        website for the purpose of filling out my portfolio.
                    </Text>
                </Flex>
            </Center>
            <img
                src={bg}
                style={{
                    width: "100%",
                    height: "100vh",
                    objectFit: "cover",
                    objectPosition: "100% 80%",
                    position: "absolute",
                    zIndex: "-1",
                    top: "0",
                }}
            ></img>
        </Center>
        // <Flex
        //   // backgroundImage={bg}
        //   w="100%"
        //   h="100vh"
        //   mt="7vh"
        //   align="center"
        //   justify="center"
        //   direction="column"
        // >
        //   <img
        //     src={icon}
        //     alt="wave-hand"
        //     style={{ width: "60px", height: "60px" }}
        //   />

        //   <div className="bg-2nd" style={{ top: "300vh" }}>
        //     <img src={bg} alt="wave-hand" style={{objectFit: "cover", width:"100%", height:"100%", objectPosition: "70% 100%"}} />
        //   </div>
        // </Flex>
    );
}
