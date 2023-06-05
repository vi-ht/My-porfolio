// import react
import * as React from "react";
import { useDisclosure } from "@chakra-ui/react";
// import chakra component
import { IconButton, Stack, Center } from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
// import chakra icon
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

// import react-router-dom
import { PATH } from "./../router/Path.js";
import { NavLink } from "react-router-dom";
//-------------------------------

export default function MobileDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState("right");
    const Link = ({ path, children }) => {
        return (
            <>
                <NavLink
                    onClick={onClose}
                    to={path}
                    className={({ isActive }) =>
                        isActive ? "qs-b mobile-link" : "qs-m mobile-link"
                    }
                    style={({ isActive }) => {
                        return {
                            textAlign: "left",
                            fontSize: "20px",
                            color: isActive ? "#FB797F" : "black",
                        };
                    }}
                >
                    {children}
                </NavLink>
            </>
        );
    };

    return (
        <>
            <IconButton
                bg="white"
                icon={<HamburgerIcon w={30} h={30} color="#FB797F" />}
                onClick={onOpen}
                position="relative"
                left="15px"
            />
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent
                    borderTopLeftRadius={20}
                    borderBottomLeftRadius={20}
                >
                    <DrawerHeader display="flex" justifyContent="end">
                        <IconButton
                            aria-label="Search database"
                            icon={<CloseIcon />}
                            onClick={onClose}
                            bg="white"
                        />
                    </DrawerHeader>
                    <Center width="full" height="full" mt="-3rem">
                        <DrawerBody borderTopRadius="md">
                            <Stack
                                gap={3}
                                className="qs-smb"
                                float="left"
                                ml="1rem"
                            >
                                <Link path={PATH.home}>UX/UI</Link>
                                <Link path={PATH.coding}>Coding</Link>
                                <Link path={PATH.about}>About Me</Link>
                                <Link path={PATH.resume}>My Resume</Link>
                            </Stack>
                        </DrawerBody>
                    </Center>
                </DrawerContent>
            </Drawer>
        </>
    );
}
