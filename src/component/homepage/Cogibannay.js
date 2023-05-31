//import css
import "./../../css/font.css";
import "./../../css/Color.css";
//import layout
import BgColorLayout from "../../layout/BgColorLayout";
import Footer from "../../layout/Footer";
//import chakra UI component
import { Grid, GridItem, Box, Text, Center, Flex } from "@chakra-ui/react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@chakra-ui/react";
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { PATH } from "../../router/Path";
export default function Cogibannay() {
    const color = "#198754";
    return (
        <Center w="full" bg="white" bgSize="100%" mainPage>
            <Center
                w={{
                    base: "90%", //0px
                    sm: "94%", // 480px
                    md: "86%", // 768px
                    lg: "94%", // 992px
                    xl: "80%", // 1280px
                    "2xl": "80rem", //1536px
                }}
            >
                <Flex
                    w="full"
                    alignItems="center"
                    justify="center"
                    direction="column"
                    mt={{
                        base: "65px", //0px
                        sm: "90px", // 480px
                        md: "100px", // 768px
                        lg: "130px", // 992px
                    }}
                    mb={0}
                >
                    <Grid w="full" templateColumns="repeat(1, 1fr)" gap={0}>
                        <GridItem colStart={1}>
                            <Box>
                                <Breadcrumb mb={2} mt="-2rem">
                                    <BreadcrumbItem>
                                        <Link to={PATH.home}>
                                            <BreadcrumbLink href="#">
                                                UX/UI
                                            </BreadcrumbLink>
                                        </Link>
                                    </BreadcrumbItem>

                                    <BreadcrumbItem>
                                        <Link to={PATH.cogibannay}>
                                            <BreadcrumbLink
                                                href="#"
                                                color="#FB797F"
                                                className="qs-smb"
                                            >
                                                MoMo talent project
                                            </BreadcrumbLink>
                                        </Link>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                                <Text fontSize="25px" className="qs-b">
                                    MOMO TALENT PROJECT
                                </Text>
                                <Text fontSize="16px" className="qs-b" mb="8px">
                                    (UX research)
                                </Text>
                                <Text fontSize="16px" className="qs-r">
                                    This is my first project related to UI/UX. I
                                    did this project to participate in the "MoMo
                                    talent" Contest to apply for the position of
                                    product owner of MoMo. The "MoMo talent"
                                    contest consists of 4 rounds:
                                </Text>
                                <UnorderedList mt={2} mb={2}>
                                    <ListItem>
                                        <span className="qs-smb">Round 1:</span>{" "}
                                        Research, find solutions and create
                                        wireframe/wireflow to build "Có gì bán
                                        nấy" application.
                                    </ListItem>
                                    <ListItem>
                                        <span className="qs-smb">Round 2:</span>{" "}
                                        Team-work to survey competitors, plan
                                        product development, and prepare
                                        presentations.
                                    </ListItem>
                                    <ListItem>
                                        <span className="qs-smb">Round 3:</span>{" "}
                                        Group presentation.
                                    </ListItem>
                                    <ListItem>
                                        <span className="qs-smb">Round 4:</span>{" "}
                                        Interview.
                                    </ListItem>
                                </UnorderedList>
                                <Text fontSize="16px" className="qs-r">
                                    This project helped me get into the final
                                    round of the competition. (50 people get in the final round/ more than 900 participants). 
                                </Text>
                                <Button
                                    leftIcon={<LinkIcon />}
                                    variant="solid"
                                    mt="15px"
                                    mb="20px"
                                    fontSize="16px"
                                    mr="10px"
                                    _hover={{
                                        background: "black",
                                    }}
                                    className="bg-main-color white-color"
                                    bg="#FB797F"
                                >
                                    <a
                                        href="https://drive.google.com/file/d/1-PLyi-cqn69rvl1t9OWa5kZs9oJgWmUo/view?usp=sharing"
                                        target="_blank"
                                    >
                                        View project
                                    </a>
                                </Button>
                            </Box>
                        </GridItem>
                    </Grid>
                    <iframe
                        style={{
                            border: "1px solid rgba(0, 0, 0, 0.1)",
                            width: "100%",
                            height: "100vh",
                        }}
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FAVJEZoB3Fp97ar82ohb5sd%2FC%25C3%25B3-g%25C3%25AC-b%25C3%25A1n-n%25E1%25BA%25A5y---WIREFLOW%3Ftype%3Ddesign%26node-id%3D12%253A529%26t%3D6j2jPImpsEjcOLpR-1"
                        allowfullscreen
                    ></iframe>
                    <Footer mt={10} position="relative" top="2rem" />
                </Flex>
            </Center>
        </Center>
    );
}
