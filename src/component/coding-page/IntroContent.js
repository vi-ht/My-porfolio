//import css
import "./../../css/font.css";
import "./../../css/layout.css";
//import image
import star from "../../asset/icon/twemoji_dizzy.png";
import bg from "../../asset/image/CodingBg.png";
// import chakra components
import { Text, Flex, Box, Center, Container } from "@chakra-ui/react";

export default function IntroContent() {
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
                        src={star}
                        alt="wave-hand"
                        style={{ width: "60px", height: "60px" }}
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
                        Team Work Project
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
                        This is a project me and a group of friends worked
                        together to build a website for the Felixzone company.
                    </Text>
                </Flex>
            </Center>
            <img src={bg} style={{width: "100%", height: "100vh", objectFit: "cover", objectPosition: "100% 80%", position: "absolute", zIndex: "-1", top: "0"}}></img>
        </Center>
    );
}

