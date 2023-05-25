//import css
import "./../../css/font.css";
import "./../../css/Color.css";
//import image
import Monito from "../../asset/image/Monito-mockups.png";
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
export default function MonitoProject() {
    return (
        <Center
            w="full"
            bg="rgba(255,228,130,0.25)"
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
                        <GridItem colSpan={{ base: 12, lg: 5 }} colStart={1}>
                            <Text
                                fontSize="25px"
                                className="qs-b"
                                mt={{ base: 0, lg: "20px" }}
                            >
                                MONITO
                            </Text>
                            <Text fontSize="16px" className="qs-b" mb="8px">
                                (Responsive web)
                            </Text>
                            <Text fontSize="16px" className="qs-r">
                                Monito is an e-commerce website that sells pets
                                and pet products. Besides, it provides useful
                                tips for pet care and nurturing.
                            </Text>
                            <Text
                                fontSize="16px"
                                className="qs-smb"
                                color="#FFB223"
                                mt="5px"
                                mb="5px"
                            >
                                My responsibility:
                            </Text>
                            <UnorderedList>
                                <ListItem>
                                    Analyze design templates and code for
                                    responsiveness.
                                </ListItem>
                            </UnorderedList>
                            <Text
                                fontSize="16px"
                                className="qs-smb"
                                mt="5px"
                                mb="5px"
                                color="#FFB223"
                            >
                                Technology:
                            </Text>
                            <UnorderedList>
                                <ListItem>HTML, CSS, JS</ListItem>
                                <ListItem>Bootstrap</ListItem>
                            </UnorderedList>
                            <Text
                                fontSize="16px"
                                className="qs-smb"
                                mt="5px"
                                mb="5px"
                                color="#FFB223"
                            >
                                Monito design template:
                            </Text>
                            <UnorderedList>
                                <ListItem>
                                    I got this design template from Figma
                                    community.
                                    <Link
                                        href="https://www.figma.com/community/file/1164046882633361201"
                                        isExternal
                                        color="black"
                                        fontWeight="bold"
                                        fontSize="16px"
                                    >
                                        {" "}
                                        Monito design template{"   "}
                                        <ExternalLinkIcon mx="2px" />
                                    </Link>
                                </ListItem>
                            </UnorderedList>
                            <Button
                                leftIcon={<LinkIcon />}
                                variant="solid"
                                mt="15px"
                                fontSize="16px"
                                _hover={{
                                    background: "black",
                                }}
                                className="bg-main-color white-color"
                                bg="#FFB223"
                            >
                                <a
                                    href="https://vi-ht.github.io/Monito-website/"
                                    target="_blank"
                                >
                                    Go to Monito website
                                </a>
                            </Button>
                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, lg: 7 }}
                            colStart={{ base: 1, lg: 6 }}
                        >
                            <img
                                src={Monito}
                                alt="Monito Mockups"
                                style={{ width: "100%" }}
                            ></img>
                        </GridItem>
                    </Grid>
                </Flex>
            </Center>
        </Center>
    );
}
