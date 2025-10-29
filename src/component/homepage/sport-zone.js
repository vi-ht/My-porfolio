//import css
import "./../../css/font.css";
import "./../../css/Color.css";
//import hook
import { useTitle } from "../../customHook/useTitle";
//import compoment
import Footer from "../../layout/Footer";
import ViewMore from "./Viewmore";
import BreadcrumbComp from "./Breadcrumb";
import { ExternalLinkIcon } from "@chakra-ui/icons";
//import chakra UI component
import {
  Box,
  Center,
  GridItem,
  Grid,
  Text,
  Link,
  Flex,
} from "@chakra-ui/react";
//import chakra UI icon
//import path
import { PATH } from "../../router/Path";
//-------------------------------------------------
export default function SportZone() {
  useTitle(`SportZone | Thanh Vi's portfolio`);
  return (
    <Box>
      <Box width="full" mt={"100px"}>
        <BreadcrumbComp
          projectName="SportZone"
          path={PATH.uxui.sportzone}
        />
      </Box>
      <Center w="full" bg="white" bgSize="100%" mainpage>
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
            alignItems="flex-start"
            justify="center"
            direction="column"
            mb={0}
          >
            <Grid w="full" templateColumns="repeat(1, 1fr)" gap={0} pb="20px">
              <GridItem colStart={1}>
                <Box>
                  <Text fontSize="40px" className="qs-b">
                    SportZone
                  </Text>
                  <Text
                    fontSize="16px"
                    className="qs-b"
                    mb="8px"
                  >
                    (Mobile App)
                  </Text>
                  <Text fontSize="16px" className="qs-r" mt={4}>
                    Sportzone — A platform that helps users easily book sports venues and find playing partners.
                    This project was initiated by my close friends and me, inspired by our own need to quickly find places to play sports together. We used Miro for project planning and Figma for designing the entire user interface, focusing on simplicity, convenience, and user-friendly interaction.
                  </Text>
                </Box>
              </GridItem>
            </Grid>
            <Text fontSize="20px" className="qs-b">
              SportZone Mockups:
            </Text>
            <Text fontSize="16px" className="qs-r" mb={2}>
              * If you see a blank page below this text, please wait a moment for the embedded documents below to finish loading.
            </Text>
            <iframe
              title="SportZone Mockups"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                width: "100%",
                height: "90vh",
              }}
              src="https://embed.figma.com/design/OYfpffQVoFyA8PskWFnY0m/SportZone?node-id=0-1&embed-host=share" allowfullscreen></iframe>
            <Text fontSize="20px" className="qs-b" mt={10}>
              SportZone Prototype:
            </Text>
            <Text fontSize="16px" className="qs-r" mb={2}>
              * If you see a blank page below this text, please wait a moment for the embedded documents below to finish loading.
            </Text>
            <iframe
              title="SportZone Prototype"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                width: "100%",
                height: "90vh",
              }}
              src="https://embed.figma.com/proto/OYfpffQVoFyA8PskWFnY0m/SportZone?page-id=3%3A15362&node-id=3-18764&p=f&viewport=566%2C479%2C0.12&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A16598&embed-host=share" allowfullscreen></iframe>

          </Flex>

        </Center>


      </Center>
      <ViewMore id={0} />
      <Footer mt={10} position="relative" top="2rem" />
    </Box>
  );
}
