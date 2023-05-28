//import css
import "./../../css/font.css";
import "./../../css/layout.css";
// import chakra components
import {
    Text,
    Box,
    Container,
    Flex,
    Center,
    VStack,
    GridItem,
} from "@chakra-ui/react";
import bg1 from "./../../asset/image/Cinema-part1.png";
import bg2 from "./../../asset/image/Cinema-part2.png";
import bg3 from "./../../asset/image/Cinema-part3.png";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@chakra-ui/react";
//import React-router-dom
import { Link } from "react-router-dom";
import { PATH } from "../../router/Path";
//-----------------------------------------------------------
export default function CinnemaFoodStall({}) {
    return (
        <Box w="full" mt="13vh">
            <Center>
                <Flex
                    w={{
                        base: "90%", //0px
                        sm: "94%", // 480px
                        md: "86%", // 768px
                        lg: "94%", // 992px
                        xl: "80%", // 1280px
                        "2xl": "80rem", //1536px
                    }}
                    display={{
                        base: "none", //0px
                        sm: "none", // 480px
                        md: "none", // 768px
                        lg: "flex", // 992px
                        xl: "flex", // 1280px
                        "2xl": "flex", //1536px
                    }}
                    mt={4}
                    mb={2}
                    alignItems="center"
                >
                    <Box>
                        <Breadcrumb mb={3}>
                            <BreadcrumbItem>
                                <Link to={PATH.home}>
                                    <BreadcrumbLink href="#">
                                        Home
                                    </BreadcrumbLink>
                                </Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <Link to={PATH.cinema}>
                                    <BreadcrumbLink href="#">
                                        Cinema Food Stalls Project
                                    </BreadcrumbLink>
                                </Link>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>
                </Flex>
            </Center>

            <img
                src={bg1}
                style={{ width: "100%", marginBottom: "1rem" }}
            ></img>
            <iframe
                style={{
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    width: "100%",
                    height: "100vh",
                }}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLHSKC75DIIbThNBi0D153P%2FCinema-food-stalls%3Ftype%3Ddesign%26node-id%3D1-4563%26scaling%3Dscale-down%26page-id%3D1%253A2103%26starting-point-node-id%3D1%253A4563"
                allowfullscreen
            ></iframe>
            <img
                src={bg2}
                style={{ width: "100%", marginBottom: "1rem" }}
            ></img>
            <iframe
                style={{
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    width: "100%",
                    height: "100vh",
                }}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLHSKC75DIIbThNBi0D153P%2FCinema-food-stalls%3Ftype%3Ddesign%26node-id%3D25-6126%26scaling%3Dscale-down%26page-id%3D1%253A2104%26starting-point-node-id%3D25%253A6126"
                allowfullscreen
            ></iframe>
            <img
                src={bg3}
                style={{ width: "100%", marginBottom: "1rem" }}
            ></img>
        </Box>
    );
}
