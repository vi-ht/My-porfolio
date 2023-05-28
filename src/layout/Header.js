// import hook
import { useLayoutEffect, useEffect } from "react";
// import CSS
import "./../css/font.css";
import "./../css/Color.css";
import "./../css/layout.css";
// import chakraUI components
import { HStack, Text, Box, Flex, Spacer, Center } from "@chakra-ui/react";
// import react-router-dom
import { PATH } from "./../router/Path.js";
import { NavLink, Link } from "react-router-dom";
//-------------------------
const CustomLink = ({ path, children }) => {
    return (
        <>
            <NavLink
                fontSize="16px"
                to={path}
                className={({ isActive }) =>
                    isActive ? "qs-b active-link" : "qs-m link"
                }
                style={({ isActive }) => {
                    return {
                        color: isActive ? "#FB797F" : "black",
                    };
                }}
            >
                {children}
                <div className="underLine"></div>
            </NavLink>
        </>
    );
};
export default function Header() {
    useLayoutEffect(() => {
        const activeLink = document.getElementsByClassName("qs-b active-link");
        const links = document.getElementsByClassName("qs-m link");
        if (activeLink.length !== 0) {
            activeLink[0].lastChild.style.display = "block";
            for (let i = 0; i < links.length; i++) {
                links[i].lastChild.style.display = "none";
            }
        } else {
            links[0].lastChild.style.display = "block";
        }
    });
    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            e.preventDefault();
            var pos = window.scrollY;
            const header = document.getElementById("header");
            if (pos > 0) {
                header.style.backgroundColor = "white";
                header.style.boxShadow =
                    "0px 3px 7px 0px rgba(251, 121, 127, 0.3)";
                header.style.marginTop = "-10px";
            } else {
                document.getElementById("header").style.backgroundColor =
                    "rgba(1,1,1,0)";
                header.style.boxShadow = "none";
                header.style.marginTop = "0px";
            }
        });
    }, []);
    return (
        <Center w="full" position="fixed" top="0" zIndex={1000} id="header">
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
                    <Link to={PATH.home}>
                        <Text
                            fontSize="3xl"
                            fontWeight={700}
                            className="qs-b main-color"
                        >
                            Thanh Vi
                        </Text>
                    </Link>
                </Box>
                <Spacer />
                <Box p="4">
                    <HStack gap={4} className="qs-smb">
                        <CustomLink path={PATH.home}>UX/UI</CustomLink>
                        <CustomLink path={PATH.coding}>Coding</CustomLink>
                        <CustomLink path={PATH.about}>About Me</CustomLink>
                        <CustomLink path={PATH.resume}>My Resume</CustomLink>
                    </HStack>
                </Box>
            </Flex>
        </Center>
    );
}
