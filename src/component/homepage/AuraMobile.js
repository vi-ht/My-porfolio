//import css
import "./../../css/font.css";
import "./../../css/layout.css";
//import hook
import { useEffect, useLayoutEffect } from "react";
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
import bg1 from "./../../asset/image/AuraProjectPart1.png";
import bg2 from "./../../asset/image/AuraProjectPart2.png";
import bg3 from "./../../asset/image/AuraProjectPart3.png";
import bg4 from "./../../asset/image/AuraProjectPart4.png";
import bg5 from "./../../asset/image/AuraProjectPart5.png";
import bg6 from "./../../asset/image/AuraProjectPart6.png";
import bg7 from "./../../asset/image/AuraProjectPart7.png";
import bg8 from "./../../asset/image/AuraProjectPart8.png";
import bg9 from "./../../asset/image/AuraProjectPart9.png";
import bg10 from "./../../asset/image/AuraProjectPart10.png";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@chakra-ui/react";
//import React-router-dom
import { Link } from "react-router-dom";
import { PATH } from "../../router/Path";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
//-----------------------------------------------------------
export default function AuraMobile({}) {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById("content").style.display = "none";
    });
    useEffect(() => {
        const timeout = setTimeout(() => {
            document.getElementById("loading").style.display = "none";
            document.getElementById("content").style.display = "block";
        }, 3500);
        //
        return () => {
            clearTimeout(timeout);
        };
    });

    return (
        <Box w="full" mt="13vh">
            <Center w="full" h="87vh" id="loading">
                <CircularProgress isIndeterminate color="#FB797F" />
            </Center>
            <Box id="content">
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
                        mt={2}
                        mb={2}
                        alignItems="center"
                    >
                        <Box>
                            <Breadcrumb mb={2}>
                                <BreadcrumbItem>
                                    <Link to={PATH.home}>
                                        <BreadcrumbLink href="#">
                                        UX/UI
                                        </BreadcrumbLink>
                                    </Link>
                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <Link to={PATH.cinema}>
                                        <BreadcrumbLink
                                            href="#"
                                            color="#FB797F"
                                            className="qs-smb"
                                        >
                                            Aura Project (IOS version)
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
                <img
                    src={bg2}
                    style={{
                        width: "100%",
                        marginBottom: "1rem",
                        marginTop: "5rem",
                    }}
                ></img>
                <img
                    src={bg3}
                    style={{
                        width: "100%",
                        marginBottom: "1rem",
                    }}
                ></img>
                <img
                    src={bg4}
                    style={{
                        width: "100%",
                        marginBottom: "1rem",
                    }}
                ></img>
                <img
                    src={bg5}
                    style={{
                        width: "100%",
                        marginBottom: "1rem",
                    }}
                ></img>
                <img
                    src={bg6}
                    style={{
                        width: "100%",
                        marginBottom: "1rem",
                    }}
                ></img>
                <img
                    src={bg7}
                    style={{
                        width: "100%",
                        marginBottom: "1rem",
                    }}
                ></img>

                <iframe
                    style={{
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        width: "100%",
                        height: "100vh",
                    }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FUrJ4ZK1KyfZf0PDNdsGqes%2FAura%3Ftype%3Ddesign%26node-id%3D484-8608%26scaling%3Dscale-down%26page-id%3D484%253A8336%26starting-point-node-id%3D484%253A8608"
                    allowfullscreen
                ></iframe>
                <img
                    src={bg8}
                    style={{
                        width: "100%",
                        marginBottom: "1rem",
                    }}
                ></img>
                <img
                    src={bg9}
                    style={{ width: "100%", marginBottom: "1rem" }}
                ></img>
                <iframe
                    style={{
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        width: "100%",
                        height: "100vh",
                    }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FUrJ4ZK1KyfZf0PDNdsGqes%2FAura%3Ftype%3Ddesign%26node-id%3D264-6096%26scaling%3Dscale-down%26page-id%3D235%253A976%26starting-point-node-id%3D264%253A6096"
                    allowfullscreen
                ></iframe>
                <img
                    src={bg10}
                    style={{ width: "100%", marginBottom: "1rem" }}
                ></img>
            </Box>
        </Box>
    );
}
