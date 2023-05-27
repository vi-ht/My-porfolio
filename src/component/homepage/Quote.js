//import css
import "./../../css/font.css";
import "./../../css/Color.css";
//import component
//import image
import bg from "../../asset/image/uiux.png";
//import chakra UI component
import {
    Grid,
    GridItem,
    Box,
    Text,
    Center,
    Flex,
    Container,
} from "@chakra-ui/react";
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
                            "2xl": "25px", //1536px
                        }}
                        lineHeight={{
                            base: "35px", //0px
                            md: "40px", // 768px
                            xl: "45px", // 1280px
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
                        className="qs-smb"
                    >
                        <span className="quote-content"></span>
                        "UI/UX self-learning process has many difficulties and
                        obstacles for a newbie like me, but I know that
                        persistence and responsibility for my goal are the
                        prerequisite factor for pursuing a big dream"{" "}
                    </Text>
                </Flex>
            </Center>
            <img
                src={bg}
                style={{
                    width: "100%",
                    height: "100vh",
                    objectFit: "cover",
                    objectPosition: "100% 43%",
                    position: "absolute",
                    zIndex: "-1",
                    top: "0",
                }}
            ></img>
        </Center>
    );
}

//     <Center
//       // backgroundImage={bg}
//       w="100%"
//       h="100vh"
//       mt="5vh"
//     >
//       <Text
//         fontSize={{
//           base: "23px", //0px
//           sm: "23px", // 480px
//           md: "27px", // 768px
//           lg: "27px", // 992px
//           xl: "30px", // 1280px
//           "2xl": "30px", //1536px
//         }}
//         lineHeight={{
//           base: "40px", //0px
//           md: "45px", // 768px
//           xl: "50px", // 1280px
//         }}
//         className="qs-m"
//         w={{
//           base: "300px", //0px
//           sm: "450px", // 480px
//           md: "600px", // 768px
//           lg: "800px", // 992px
//           xl: "1000px", // 1280px
//           "2xl": "1000px", //1536px
//         }}
//         textAlign="center"
//         position="relative"
//       >
//         <span className="quote-content"></span>
//         "UI/UX self-learning process has many difficulties and obstacles for a
//         newbie like me, but I know that{" "}
//         <span className="highlight qs-b">persistence</span> and{" "}
//         <span className="highlight qs-b">responsibility</span> for my goal are
//         the prerequisite factor for pursuing a big dream."
//       </Text>
//       <img src={bg} alt="wave-hand " className="bg-2nd" />
//     </Center>
//   );
// }
