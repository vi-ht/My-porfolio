//import css
import "./../css/layout.css";
import "./../css/font.css";
// import chakra components
import { Flex, Center } from "@chakra-ui/react";

export default function BgImageLayout({ children, bg, objectPos, mainPage }) {
    return (
        <Center w="full" h="100vh" position="relative">
            <Center
                w={{
                    base: "90%", //0px
                    sm: "94%", // 480px
                    md: "86%", // 768px
                    lg: "94%", // 992px
                    xl: "80%", // 1280px
                    "2xl": "80rem", //1536px
                }}
                h="100vh"
            >
                <Flex
                    w="full"
                    h="full"
                    alignItems={mainPage ? "flex-start" : "center"}
                    justify={mainPage ? "flex-start" : "center"}
                    direction="column"
                >
                    {children}
                </Flex>
            </Center>
            <img
                src={bg}
                style={{
                    width: "100%",
                    height: "100vh",
                    objectFit: "cover",
                    objectPosition: { objectPos },
                    position: "absolute",
                    zIndex: "-1",
                    top: "0",
                }}
            ></img>
        </Center>
    );
}
