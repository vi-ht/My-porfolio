// import hook
import { useLayoutEffect, useEffect } from "react";
// import CSS
import "./../css/font.css";
import "./../css/Color.css";
import "./../css/layout.css";
import "./../css/animate.css";
// import chakraUI components
import { HStack, Text, Box, Flex, Spacer, Center } from "@chakra-ui/react";
// import react-router-dom
import { PATH } from "./../router/Path.js";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
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
    const location = useLocation();
    const currentPathname = location.pathname;

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
        if (currentPathname === "/my-resume") {
            const header = document.getElementById("header");
            header.style.backgroundColor = "white";
            header.style.boxShadow =
                "0px 3px 7px 0px rgba(251, 121, 127, 0.3)";
            header.style.marginTop = "-10px";
        }
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
                            sx={{
                                transition: "0.5s"
                            }}
                            _hover={{
                                color: "black"
                            }}
                        >
                            Thanh Vi
                        </Text>
                    </Link>
                </Box>
                <Spacer />
                <Box p="4">
                    <HStack gap={4} className="qs-smb">
                        <CustomLink path={PATH.home}>About Me</CustomLink>
                        <CustomLink path={PATH.coding}>Coding</CustomLink>
                        <CustomLink path={PATH.uxui.index}>UX/UI</CustomLink>
                        <CustomLink path={PATH.certificate}>Certificate</CustomLink>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} sx={{ bg: "transparent", "&:hover": { bg: "#ffbbbe" }, pr: 2, pl: 3 }} >
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.5556 3.05566H2.44444C1.79614 3.05566 1.17438 3.3132 0.715961 3.77163C0.257539 4.23005 0 4.8518 0 5.50011L0 16.5001C0 17.1484 0.257539 17.7702 0.715961 18.2286C1.17438 18.687 1.79614 18.9446 2.44444 18.9446H19.5556C20.2039 18.9446 20.8256 18.687 21.284 18.2286C21.7425 17.7702 22 17.1484 22 16.5001V5.50011C22 4.8518 21.7425 4.23005 21.284 3.77163C20.8256 3.3132 20.2039 3.05566 19.5556 3.05566Z" fill="#DA251D" />
                                    <path d="M12.0717 9.80036L11.0004 6.50342L9.92911 9.80036H6.46289L9.26728 11.8372L8.196 15.1341L11.0004 13.0967L13.8048 15.1341L12.7335 11.8372L15.5379 9.80036H12.0717Z" fill="#FFFF00" />
                                </svg>

                            </MenuButton>
                            {/* <MenuList direction="rtl">
                                <MenuItem><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.5556 3.05566H2.44444C1.79614 3.05566 1.17438 3.3132 0.715961 3.77163C0.257539 4.23005 0 4.8518 0 5.50011L0 16.5001C0 17.1484 0.257539 17.7702 0.715961 18.2286C1.17438 18.687 1.79614 18.9446 2.44444 18.9446H19.5556C20.2039 18.9446 20.8256 18.687 21.284 18.2286C21.7425 17.7702 22 17.1484 22 16.5001V5.50011C22 4.8518 21.7425 4.23005 21.284 3.77163C20.8256 3.3132 20.2039 3.05566 19.5556 3.05566Z" fill="#DA251D" />
                                    <path d="M12.0717 9.80036L11.0004 6.50342L9.92911 9.80036H6.46289L9.26728 11.8372L8.196 15.1341L11.0004 13.0967L13.8048 15.1341L12.7335 11.8372L15.5379 9.80036H12.0717Z" fill="#FFFF00" />
                                </svg>Vietnamese</MenuItem>
                                <MenuItem>English</MenuItem>
                            </MenuList> */}
                        </Menu>
                    </HStack>
                </Box>
            </Flex>
        </Center >
    );
}
