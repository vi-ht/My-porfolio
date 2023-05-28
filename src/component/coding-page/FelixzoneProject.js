//import css
import "./../../css/font.css";
import "./../../css/Color.css";
//import layout
import BgColorLayout from "../../layout/BgColorLayout";
//import image
import Felix from "../../asset/image/Felix-mockups.png";
import bg from "../../asset/image/pink-bg.png";
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
export default function FelixzoneProject() {
    return (
        <BgColorLayout bgColor="rgba(255,215,218,0.5)">
            <Grid w="full" templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={{ base: 12, lg: 5 }} colStart={1}>
                    <Center w="full" h="full">
                        <Box>
                            <Text
                                fontSize="25px"
                                className="qs-b"
                                mt={{ base: 0, lg: "-30px" }}
                            >
                                FELIXZONE - Graduation Thesis
                            </Text>
                            <Text fontSize="16px" className="qs-b" mb="8px">
                                (Responsive web - SPA)
                            </Text>
                            <Text fontSize="16px" className="qs-r">
                                Felix Zone is a model booking platform with the
                                mission to connect talented models and reliable
                                brands
                            </Text>
                            <Text
                                fontSize="16px"
                                className="qs-smb main-color"
                                mt="5px"
                                mb="5px"
                            >
                                FelixZone Project includes:
                            </Text>
                            <UnorderedList>
                                <ListItem>FelixZone Lading-page</ListItem>
                                <ListItem>FelixZone Web admin</ListItem>
                                <ListItem>FelixZone Mobile app</ListItem>
                            </UnorderedList>
                            <Text
                                fontSize="16px"
                                className="qs-smb main-color"
                                mt="5px"
                                mb="5px"
                            >
                                My responsibility in team:
                            </Text>
                            <UnorderedList>
                                <ListItem>
                                    Coding UI for front-end side.
                                </ListItem>
                                <ListItem>Fetch API</ListItem>
                                <ListItem>
                                    Writing SRS (software requirements
                                    specification).
                                    <Link
                                        href="https://drive.google.com/file/d/1pWrmkSRRytzqMdwu12CVV23p8uOyLAwc/view?usp=sharing"
                                        isExternal
                                        color="black"
                                        fontWeight="bold"
                                        fontSize="14px"
                                    >
                                        {" "}
                                        FelixZone's SRS{"   "}
                                        <ExternalLinkIcon mx="2px" />
                                    </Link>
                                    <Link
                                        href="https://drive.google.com/file/d/1QcBs6Yg7s4FX1NCql4924oGrbsqR4cyF/view?usp=sharing"
                                        isExternal
                                        color="black"
                                        fontWeight="bold"
                                        fontSize="14px"
                                    >
                                        {" "}
                                        FelixZone's final slide{" "}
                                        <ExternalLinkIcon mx="2px" />
                                    </Link>
                                    {/* <a target="_blank" href="">
                    View SRS
                </a> */}
                                </ListItem>
                                <ListItem>
                                    Collect and analyze client requirements
                                </ListItem>
                                <ListItem>
                                    UI design in the final stages of the
                                    project.
                                </ListItem>
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
                                <ListItem>ReactJS, Material UI</ListItem>
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
                                    href="https://felixzone.asia/"
                                    target="_blank"
                                >
                                    Go to Felixzone web site
                                </a>
                            </Button>
                        </Box>
                    </Center>
                </GridItem>
                <GridItem
                    colSpan={{ base: 12, lg: 7 }}
                    colStart={{ base: 1, lg: 6 }}
                >
                    <img
                        src={Felix}
                        alt="FelixZone Mockups"
                        style={{ width: "100%" }}
                    ></img>
                </GridItem>
            </Grid>
        </BgColorLayout>
    );
}
