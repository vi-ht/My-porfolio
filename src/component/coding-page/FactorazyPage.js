//import css
import "./../../css/font.css";
import "./../../css/Color.css";
import "./../../css/animate.css";
//import custom hook
//import layout
import BgColorLayout from "../../layout/BgColorLayout";
//import image
import Felix from "../../asset/image/factorazy/f1.webp";
import Fac2 from "../../asset/image/factorazy/f2.webp";
import Fac3 from "../../asset/image/factorazy/f3.webp";
import Fac4 from "../../asset/image/factorazy/f4.webp";
import Fac5 from "../../asset/image/factorazy/f5.webp";
import Fac6 from "../../asset/image/factorazy/f6.webp";
import Fac7 from "../../asset/image/factorazy/f7.webp";
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
} from "@chakra-ui/react";
//import chakra icon
import { LinkIcon } from "@chakra-ui/icons";
//----------------------------------------------------------

const WebItem = ({ alt, src, link, text }) => (
  <GridItem
    colSpan={{ base: 12, lg: 6 }}
    colStart={1}

  >
    <Center w="full" h="full" flexDirection="column">
      <img
        src={src}
        alt={alt}
        style={{ width: "90%" }}
      ></img>
      <Button
        leftIcon={<LinkIcon />}
        variant="solid"
        mt="10px"
        fontSize="16px"
        _hover={{
          background: "black",
        }}
        className="bg-main-color white-color"
        bg="#246553"
      >
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      </Button>
    </Center>

  </GridItem>
)
export default function FactorazyProject() {
  // useAnim(
  //   "fac-container",
  //   "fac-left",
  //   "fac-right",
  //   "project-left",
  //   "project-right",
  //   200
  // );
  return (
    <BgColorLayout bgColor="#baffeb14" id="fac-container">
      <Grid w="full" templateColumns="repeat(12, 1fr)" gap={4} rowGap={"100px"}>
        <GridItem
          colSpan={{ base: 12, lg: 12 }}

          colStart={{ base: 1, lg: 1 }}
          transform="translate(30px,0)"
          // opacity={0}

          id="fac-right"
        >
          <Center w="full" h="full">
            <Box>
              <Text
                fontSize="25px"
                className="qs-b"
                mt={{ base: 0, lg: "-30px" }}
              >
                FACTORAZY
              </Text>
              <Text fontSize="16px" className="qs-b" mb="8px">
                (Responsive web - SPA)
              </Text>
              <Text fontSize="16px" className="qs-r">
                Factorazy is a platform that connects customers who need manufacturing solutions in fields such as furniture, machinery, and more with factories or suppliers that match their production requirements. <span className="qs-smb">Below are some highlighted home pages I developed during my time working at Factorazy.</span> Although these websites are no longer active, they remain a testament to my hard work and dedication throughout the project.
              </Text>
              <Text
                fontSize="16px"
                className="qs-b "
                color="#246553"
                mt="5px"
                mb="5px"
              >
                My responsibility in team:
              </Text>
              <UnorderedList>
                <ListItem >
                  Delivered a fundraising project on time, turning Figma designs into responsive sites with NextJS & TailwindCCS, collaborated with backend team to align API.
                </ListItem>
                <ListItem >Improved efficiency by suggesting design alternatives to reduce coding effort and enhancing code maintainability with reusable components.</ListItem>
                <ListItem >
                  Contributed to the company's next fundraising round.
                </ListItem>
              </UnorderedList>
              <Text
                fontSize="16px"
                className="qs-b"
                color="#246553"
                mt="5px"
                mb="5px"
              >
                Frontend tech stack:
              </Text>
              <UnorderedList>
                <ListItem>NextJS, Typescript/Javascript, TailwindCSS, Material-UI, Shadcn</ListItem>
                <ListItem>Axios</ListItem>
              </UnorderedList>

            </Box>
          </Center>
        </GridItem>
        <WebItem
          alt="Factorazy's Mockups"
          src={Felix}
          link="https://fe-factorazy.vercel.app/membozy/"
          text={"Visit this web site"}
        ></WebItem>
        <WebItem
          alt="Factorazy's Mockups"
          src={Fac2}
          link="https://facrorazy-v2.vercel.app/en"
          text={"Visit this web site"}
        ></WebItem>
        <WebItem
          alt="Factorazy's Mockups"
          src={Fac3}
          link="https://factorazy-sale.vercel.app/"
          text={"Visit this web site"}
        ></WebItem>
        <WebItem
          alt="Factorazy's Mockups"
          src={Fac4}
          link="https://factorazy-ai.vercel.app/en"
          text={"Visit this web site"}
        ></WebItem>
        <WebItem
          alt="Factorazy's Mockups"
          src={Fac5}
          link="https://facrorazy-v2.vercel.app/en/wooden-funiture"
          text={"Visit this web site"}
        ></WebItem>
        <WebItem
          alt="Factorazy's Mockups"
          src={Fac6}
          link="https://facrorazy-v2.vercel.app/en/manufacturing"
          text={"Visit this web site"}
        ></WebItem>
        <WebItem
          alt="Factorazy's Mockups"
          src={Fac7}
          link="https://supplier-factorize.vercel.app/en"
          text={"Visit this web site"}
        ></WebItem>
      </Grid>
    </BgColorLayout>
  );
}
