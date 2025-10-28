//import css
import "./../../css/font.css";
import "./../../css/Color.css";
import "./../../css/animate.css";
//import custom hook
import { useAnim } from "./../../customHook/useAnim";
//import layout
import BgColorLayout from "../../layout/BgColorLayout";
//import image
import IUH from "../../asset/image/iuh-page.webp";
//import chakra UI component
import {
  Grid,
  GridItem,
  Box,
  Text,
  Center,
  ListItem,
  UnorderedList,
  Button,
  Link,
} from "@chakra-ui/react";
//import chakra icon
import { LinkIcon } from "@chakra-ui/icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
//----------------------------------------------------------
export default function IUHProject() {
  useAnim(
    "IUH-container",
    "IUH-left",
    "IUH-right",
    "project-left",
    "project-right",
    200
  );
  return (
    <BgColorLayout bgColor="rgba(2150,93,255,0.1)" id="IUH-container" h={{ base: "auto", lg: "100vh" }}>
      <Grid w="full" templateColumns="repeat(12, 1fr)" gap={4}>

        <GridItem
          colSpan={{ base: 12, lg: 7 }}
          colStart={1}

          transform="translate(30px,0)"
          opacity={0}
          id="IUH-right"
        >
          <img
            src={IUH}
            alt="IUHZone Mockups"
            style={{ width: "100%" }}
          ></img>
        </GridItem>
        <GridItem
          colSpan={{ base: 12, lg: 5 }}
          colStart={{ base: 1, lg: 8 }}
          transform="translate(-30px,0)"
          opacity={0}
          id="IUH-left"
        >
          <Center w="full" h="full">
            <Box>
              <Text
                fontSize="25px"
                className="qs-b"
                mt={{ base: 0, lg: "-30px" }}
              >
                IUH EBOOK
              </Text>
              <Text fontSize="16px" className="qs-b" mb="8px">
                (Responsive web - SPA)
              </Text>
              <Text fontSize="16px" className="qs-r">
                IUH Ebook is a conceptual digital transformation project for a university library, aiming to modernize the way students and staff access, manage, and interact with academic resources.
              </Text>

              <Text
                fontSize="16px"
                className="qs-b"
                color="#965DFF"
                mt="5px"
                mb="5px"
              >
                My responsibility:
              </Text>
              <UnorderedList>
                <ListItem>
                  Convert design template to responsive web UI.
                </ListItem>
              </UnorderedList>
              <Text
                fontSize="16px"
                className="qs-b"
                mt="5px"
                mb="5px"
                color="#965DFF"
              >
                Technology:
              </Text>
              <UnorderedList>
                <ListItem>NextJS </ListItem>
                <ListItem>Javascript</ListItem>
              </UnorderedList>
              <Text
                fontSize="16px"
                className="qs-b"
                mt="5px"
                mb="5px"
                color="#965DFF"
              >
                IUH Ebook design template:
              </Text>
              <UnorderedList>
                <ListItem>
                  <Link
                    href="https://www.figma.com/design/q2ZkpdwSEbIQjKJQ5RZGOS/ebook-clone?node-id=1-74029&t=upUelIekP1uBuJHx-1"
                    isExternal
                    color="black"
                    fontWeight="bold"
                    fontSize="16px"
                  >
                    {" "}
                    IUH Ebook design template on Figma{"   "}
                    <ExternalLinkIcon mx="2px" />
                  </Link>
                </ListItem>
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
                bg="#965DFF"
              >
                <a
                  href="https://iuh-ebook-new.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit this website
                </a>
              </Button>
            </Box>
          </Center>
        </GridItem>
      </Grid>
    </BgColorLayout >
  );
}
