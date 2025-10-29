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
export default function MidArchitectsUXUI() {
  useTitle(`MID Architects | Thanh Vi's portfolio`);
  return (
    <Box>
      <Box width="full" mt={"100px"}>
        <BreadcrumbComp
          projectName="MID Architects"
          path={PATH.cogibannay}
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
            // mt={{
            //     base: "65px", //0px
            //     lg: "100px", //0px
            // }}
            mb={0}
          >
            <Grid w="full" templateColumns="repeat(1, 1fr)" gap={0} pb="20px">
              <GridItem colStart={1}>
                <Box>
                  <Text fontSize="25px" className="qs-b">
                    MID Architects
                  </Text>
                  <Text
                    fontSize="16px"
                    className="qs-b"
                    mb="8px"
                  >
                    (Web Responsive Design)
                  </Text>
                  <Text fontSize="16px" className="qs-r">
                    MID Architects is a real-world freelance project where I developed a representative website for an architecture company. The project included designing and building a modern landing page to showcase the firm’s brand and services, along with an admin management page to support efficient content and project management. This project was designed on Figma platform according to the client's design requirements and functional list.
                  </Text>
                  <Text fontSize="16px" className="qs-r" mt={4}>
                    This project has been completed and handed over to the customer:
                    <Link
                      isExternal
                      color="#FB797F"
                      fontWeight="bold"
                      fontSize="16px"
                      href="https://midarchitects.com/"
                    >
                      {" "}
                      View MID Architects Website {"   "}
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Text>
                </Box>
              </GridItem>
            </Grid>
            <Text fontSize="16px" className="qs-b">
              MID Architects's Mockups:
            </Text>
            <Text fontSize="16px" className="qs-r" mb={2}>
              * If you see a blank page below this text, please wait a moment for the embedded documents below to finish loading.
            </Text>
            <iframe
              title="MID Architects Mockups"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                width: "100%",
                height: "90vh",
              }}
              src="https://embed.figma.com/design/UzOi88ScPJZYs4m38R5WEp/MID-Architects?node-id=0-1&embed-host=share" allowfullscreen></iframe>
            <Text fontSize="16px" className="qs-b" mt={10}>
              Landing Page Prototype:
            </Text>
            <Text fontSize="16px" className="qs-r" mb={2}>
              * If you see a blank page below this text, please wait a moment for the embedded documents below to finish loading.
            </Text>
            <iframe
              title="MID Architects (Web Responsive Design)"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                width: "100%",
                height: "90vh",
              }}
              src="https://embed.figma.com/proto/UzOi88ScPJZYs4m38R5WEp/MID-Architects?page-id=0%3A1&node-id=2447-2951&viewport=-15076%2C-6678%2C0.4&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2447%3A2951&embed-host=share" allowfullscreen></iframe>
            <Text fontSize="16px" className="qs-b" mt={10}>
              Landing Page Prototype (Responsive version for Mobile):
            </Text>
            <Text fontSize="16px" className="qs-r" mb={2}>
              * If you see a blank page below this text, please wait a moment for the embedded documents below to finish loading.
            </Text>
            <iframe
              title="MID Architects (Responsive version for Mobile)"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                width: "100%",
                height: "90vh",
              }}
              src="https://embed.figma.com/proto/UzOi88ScPJZYs4m38R5WEp/MID-Architects?page-id=0%3A1&node-id=2377-3299&viewport=-15076%2C-6678%2C0.4&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2377%3A3299&embed-host=share" allowfullscreen></iframe>
            <Text fontSize="16px" className="qs-b" mt={10}>
              Admin Management Page Prototype:
            </Text>
            <Text fontSize="16px" className="qs-r" mb={2}>
              * If you see a blank page below this text, please wait a moment for the embedded documents below to finish loading.
            </Text>
            <iframe
              title="MID Architects (Web Responsive Design)"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                width: "100%",
                height: "90vh",
              }}
              src="https://embed.figma.com/proto/UzOi88ScPJZYs4m38R5WEp/MID-Architects?page-id=0%3A1&node-id=2086-4308&viewport=-15076%2C-6678%2C0.4&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2086%3A4308&embed-host=share" allowfullscreen></iframe>
          </Flex>

        </Center>


      </Center>
      <ViewMore id={7} />
      <Footer mt={10} position="relative" top="2rem" />
    </Box>
  );
}
