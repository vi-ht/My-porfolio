// import hook
import { useLayoutEffect } from "react";
// import CSS
import "./../css/font.css";
import "./../css/Color.css";
import "./../css/layout.css";
// import chakraUI components
import { HStack, Text, Box, Flex, Spacer } from "@chakra-ui/react";
// import react-router-dom
import { PATH } from "./../router/Path.js";
import { NavLink } from "react-router-dom";
//-------------------------
const Link = ({ path, children }) => {
  return (
    <>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? "qs-b active-link" : "qs-m link"
        }
        style={({ isActive }) => {
          return {
            fontSize: "20px",
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
    activeLink[0].lastChild.style.display = "block";
    for (let i = 0; i < links.length; i++) {
      links[i].lastChild.style.display = "none";
    }
  });
  return (
    <Flex
      minW={{
        base: "100%", //0px
        sm: "100%", // 480px
        md: "90%", // 768px
        lg: "85%", // 992px
        xl: "80%", // 1280px
        "2xl": "90rem", //1536px
      }}
      display={{
        base: "none", //0px
        sm: "none", // 480px
        md: "none", // 768px
        lg: "flex", // 992px
        xl: "flex", // 1280px
        "2xl": "flex", //1536px
      }}
      mt={5}
      alignItems="center"
    >
      <Box p="4">
        <Text fontSize="4xl" fontWeight={700} className="qs-b main-color">
          Thanh Vi
        </Text>
      </Box>
      <Spacer />
      <Box p="4">
        <HStack gap={4} className="qs-smb">
          <Link path={PATH.home}>UX/UI</Link>
          <Link path={PATH.uxui}>Coding</Link>
          <Link path={PATH.resume}>Contact</Link>
          <Link path={PATH.resume}>My Resume</Link>
        </HStack>
      </Box>
    </Flex>
  );
}
