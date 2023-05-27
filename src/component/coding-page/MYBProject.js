//import css
import "./../../css/font.css";
import "./../../css/Color.css";
//import layout
import BgColorLayout from "../../layout/BgColorLayout";
//import image
import MYB from "../../asset/image/MYB-mockups.png";
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
export default function MYBProject() {
    const color = "#5243c2";
    return (
        <BgColorLayout bgColor="rgba(219,197,233,0.19)">
            <Grid w="full" templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem
                    colSpan={{ base: 12, lg: 7 }}
                    colStart={{ base: 1, lg: 1 }}
                >
                    <img
                        src={MYB}
                        alt="MYB Mockups"
                        style={{ width: "100%" }}
                    ></img>
                </GridItem>
                <GridItem
                    colSpan={{ base: 12, lg: 5 }}
                    colStart={{ base: 1, lg: 8 }}
                >
                    <Text fontSize="25px" className="qs-b">
                        MYB - MAKE YOUR BURGER
                    </Text>
                    <Text fontSize="16px" className="qs-b" mb="8px">
                        (Desktop only - MPA)
                    </Text>
                    <Text fontSize="16px" className="qs-r">
                        MYB is a website that allows users to order and
                        customize ingredients for their burgers.
                    </Text>
                    <Text
                        fontSize="16px"
                        className="qs-smb"
                        color={color}
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
                        color={color}
                    >
                        Technology:
                    </Text>
                    <UnorderedList>
                        <ListItem>HTML, CSS, JS</ListItem>
                        <ListItem>Jquery</ListItem>
                        <ListItem>Bootstrap</ListItem>
                    </UnorderedList>
                    <Text
                        fontSize="16px"
                        className="qs-smb"
                        mt="5px"
                        mb="5px"
                        color={color}
                    >
                        MYB design template:
                    </Text>
                    <UnorderedList>
                        <ListItem>
                            I got this design template from Figma community.
                            <Link
                                href="https://www.figma.com/community/file/1107567946234728369"
                                isExternal
                                color="black"
                                fontWeight="bold"
                                fontSize="16px"
                            >
                                {" "}
                                MYB design template{"   "}
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
                        bg={color}
                    >
                        <a href="https://vi-ht.github.io/MYB-Website/" target="_blank" style={{fontSize:"14px"}}>
                            Go to MYB website
                        </a>
                    </Button>
                </GridItem>
            </Grid>
        </BgColorLayout>
    );
}
