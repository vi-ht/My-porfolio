//import css
import "./../../css/font.css";
import "./../../css/Color.css";
import "./../../css/animate.css";
//import custom hook
import { useAnim } from "./../../customHook/useAnim";
//import layout
import BgColorLayout from "../../layout/BgColorLayout";
//import image
import MID from "../../asset/image/mid-page.webp";
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
export default function MIDProject() {
  useAnim(
    "MID-container",
    "MID-left",
    "MID-right",
    "project-left",
    "project-right",
    200
  );
  return (
    <BgColorLayout bgColor="rgba(255,196,33,0.08)" id="MID-container" h={{ base: "auto", lg: "100vh" }}>
      <Grid w="full" templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem
          colSpan={{ base: 12, lg: 5 }}
          colStart={1}
          transform="translate(-30px,0)"
          opacity={0}
          id="MID-left"
        >
          <Center w="full" h="full">
            <Box>
              <Text
                fontSize="25px"
                className="qs-b"
                mt={{ base: 0, lg: "-30px" }}
              >
                MID Architects's Website
              </Text>
              <Text fontSize="16px" className="qs-b" mb="8px">
                (Responsive web - SPA)
              </Text>
              <Text fontSize="16px" className="qs-r">
                MID Architects is a real-world freelance project where I developed a representative website for an architecture company. The project included designing and building a modern landing page to showcase the firm’s brand and services, along with an admin management page to support efficient content and project management.
              </Text>
              <Text
                fontSize="16px"
                className="qs-b"
                color="#B97200"
                mt="5px"
                mb="5px"
              >
                This Project includes:
              </Text>
              <UnorderedList>
                <ListItem>Design file</ListItem>
                <ListItem>Landing Page</ListItem>
                <ListItem>Admin Page</ListItem>
              </UnorderedList>
              <Text
                fontSize="16px"
                className="qs-b"
                color="#B97200"
                mt="5px"
                mb="5px"
              >
                My responsibility:
              </Text>
              <UnorderedList>
                <ListItem>
                  Designed the UI/UX of the platform using Figma, focusing on user-friendly navigation and modern visual style.
                </ListItem>
                <ListItem>Converted design files into fully responsive webpages to ensure accessibility across devices.</ListItem>
                <ListItem>
                  Integrated APIs to connect the front-end with backend services, enabling dynamic and interactive features.
                </ListItem>
              </UnorderedList>
              <Text
                fontSize="16px"
                className="qs-b"
                color="#B97200"
                mt="5px"
                mb="5px"
              >
                Technology:
              </Text>
              <UnorderedList>
                <ListItem>NextJS, Typescript, Shadcn, TailwindCSS</ListItem>
                <ListItem>Axios</ListItem>
              </UnorderedList>
              <Text
                fontSize="16px"
                className="qs-b"
                mt="5px"
                mb="5px"
                color="#B97200"
              >
                Design template:
              </Text>
              <UnorderedList>
                <ListItem>
                  <Link
                    href="https://www.figma.com/proto/UzOi88ScPJZYs4m38R5WEp/MID-Architects?page-id=0%3A1&node-id=2104-4641&viewport=-15076%2C-6678%2C0.4&t=d1O1MijmuFFrWAmK-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2104%3A4641&show-proto-sidebar=1"
                    isExternal
                    color="black"
                    fontWeight="bold"
                    fontSize="16px"
                  >
                    {" "}
                    Landing Page's Prototype{"   "}
                    <ExternalLinkIcon mx="2px" />
                  </Link>
                </ListItem>
              </UnorderedList>
              <UnorderedList>
                <ListItem>
                  <Link
                    href="https://www.figma.com/proto/UzOi88ScPJZYs4m38R5WEp/MID-Architects?page-id=0%3A1&node-id=2086-4308&viewport=-15076%2C-6678%2C0.4&t=d1O1MijmuFFrWAmK-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2086%3A4308&show-proto-sidebar=1"
                    isExternal
                    color="black"
                    fontWeight="bold"
                    fontSize="16px"
                  >
                    {" "}
                    Admin Website's Prototype{"   "}
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
                bg="#B97200"
              >
                <a
                  href="https://midarchitects.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit this website
                </a>
              </Button>
            </Box>
          </Center>
        </GridItem>
        <GridItem
          colSpan={{ base: 12, lg: 7 }}
          colStart={{ base: 1, lg: 6 }}
          transform="translate(30px,0)"
          opacity={0}
          id="MID-right"
        >
          <img
            src={MID}
            alt="IUHZone Mockups"
            style={{ width: "100%" }}
          ></img>
        </GridItem>
      </Grid>
    </BgColorLayout>
  );
}
