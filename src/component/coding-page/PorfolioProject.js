//import css
import "./../../css/font.css";
import "./../../css/Color.css";
//import image
import Felix from "../../asset/image/Felix-mockups.png";
import Porfolio from "../../asset/image/Porfolio-mockups.png";
//import chakra UI component
import { Grid, GridItem, Box, Text, Center, Flex } from "@chakra-ui/react";
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
//----------------------------------------------------------
export default function PorfolioProject() {
    return (
        <Center
            w="full"
            bg="rgba(255,215,218,0.5)"
            // backgroundImage={bg}
            // backgroundPosition="center"
            // backgroundRepeat="no-repeat"
            bgSize="100%"
        >
            <Center
                w={{
                    base: "90%", //0px
                    sm: "94%", // 480px
                    md: "90%", // 768px
                    lg: "85%", // 992px
                    xl: "80%", // 1280px
                    "2xl": "90rem", //1536px
                }}
            >
                <Flex
                    w="full"
                    alignItems="center"
                    justify="center"
                    direction="column"
                    mt={{
                        base: "75px", //0px
                        sm: "90px", // 480px
                        md: "100px", // 768px
                        lg: "130px", // 992px
                        xl: "150px", // 1280px
                    }}
                    mb={{
                        base: "75px", //0px
                        sm: "90px", // 480px
                        md: "100px", // 768px
                        lg: "130px", // 992px
                        xl: "150px", // 1280px
                    }}
                >
                    <Grid w="full" templateColumns="repeat(12, 1fr)" gap={4}>
                        <GridItem
                            colSpan={{ base: 12, lg: 7 }}
                            colStart={{ base: 1, lg: 1 }}
                        >
                            <img
                                src={Porfolio}
                                alt="Porfolio Mockups"
                                style={{ width: "100%" }}
                            ></img>
                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, lg: 5 }}
                            colStart={{ base: 1, lg: 8 }}
                        >
                            <Text fontSize="25px" className="qs-b" mt={{ base: 0, lg: "30px" }}>
                                MY PORTFOLIO
                            </Text>
                            <Text fontSize="16px" className="qs-b" mb="8px">
                                (Responsive web)
                            </Text>
                            <Text fontSize="16px" className="qs-r">
                                This is a website designed and coded by me for
                                the purpose of showcasing all my projects.
                            </Text>
                            <Text
                                fontSize="16px"
                                className="qs-smb main-color"
                                mt="5px"
                                mb="5px"
                            >
                                My responsibility:
                            </Text>
                            <UnorderedList>
                                <ListItem>
                                    Design and create website's mockups.
                                </ListItem>
                                <ListItem>Code for responsive.</ListItem>
                            </UnorderedList>
                            <Text
                                fontSize="16px"
                                className="qs-smb main-color"
                                mt="5px"
                                mb="5px"
                            >
                                Technology:
                            </Text>
                            <UnorderedList>
                                <ListItem>ReactJS</ListItem>
                                <ListItem>ChakraUI</ListItem>
                            </UnorderedList>
                            <Text
                                fontSize="16px"
                                className="qs-smb main-color"
                                mt="5px"
                                mb="5px"
                            >
                                Design tool
                            </Text>
                            <UnorderedList>
                                <ListItem>Figma</ListItem>
                            </UnorderedList>
                            <Button
                                leftIcon={<LinkIcon />}
                                variant="solid"
                                mt="10px"
                                fontSize="16px"
                                _hover={{
                                    background: "black",
                                }}
                                className="bg-main-color white-color"
                                bg="#FB797F"
                            >
                                <a
                                    href=""
                                    target="_blank"
                                >
                                    View mockups on Figma
                                </a>
                            </Button>
                        </GridItem>
                    </Grid>
                </Flex>
            </Center>
        </Center>
    );
}
