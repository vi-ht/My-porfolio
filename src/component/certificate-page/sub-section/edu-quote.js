//import css
import "./../../../css/font.css";
import "./../../../css/Color.css";
//import chakra UI component
import { Text, Center, Flex } from "@chakra-ui/react";
export default function Quote() {
    return (
        <Center w="full" position="relative">
            <Center
                w={{
                    base: "90%", //0px
                    sm: "94%", // 480px
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
                    <Text
                        color="white"
                        fontSize={{
                            base: "20px", //0px
                            sm: "22", // 480px
                            md: "22px", // 768px
                            lg: "25px", // 992px
                            xl: "25px", // 1280px
                            "2xl": "30px", //1536px
                        }}
                        lineHeight={{
                            base: "35px", //0px
                            md: "40px", // 768px
                            xl: "60px", // 1280px
                        }}
                        w={{
                            base: "290px", //0px
                            sm: "430px", // 480px
                            md: "600px", // 768px
                            lg: "800px", // 992px
                            xl: "900px", // 1280px
                            "2xl": "950px", //1536px
                        }}
                        textAlign="center"
                        position="relative"
                        className="qs-b"
                    >
                        <span className="quote-content"></span>
                        “Every online course I take opens a new window of curiosity — a chance to explore, grow, and turn knowledge into creative action.”{" "}
                    </Text>
                </Flex>
            </Center>
            <div className="paralax certificate">
            </div>
        </Center>
    );
}
