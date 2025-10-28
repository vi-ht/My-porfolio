//import css
import "./../../css/font.css";
import "./../../css/Color.css";
import "./../../css/aboutme-page.css";
import "./../../css/animate.css";
//import Hook
//import layout
import BgColorLayout from "../../layout/BgColorLayout";
//import image
// import Avatar from "../../asset/image/my-image.png";
import avatar from "../../asset/image/cv.webp";
//import chakra UI component
import {
  Box,
  Button,
  Center,
} from "@chakra-ui/react";
// import Iconify icon

import { DownloadIcon } from "@chakra-ui/icons";
//import React-router-dom
//----------------------------------------------------------


export default function CVPage() {
  return (
    <BgColorLayout bgColor="white" page>
      <Center w={{ sm: "95%", md: "60%" }} h="full" py={{ base: "30px", md: "50px" }}>
        <Box
          w="full"
          h={{ base: "100%", xl: "96%", "2xl": "100%" }}

        >
          <img
            src={avatar}
            alt="Thanh Vi's avatar"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "85% 100%",
            }}
          ></img>
        </Box>

      </Center>
      <Center pb={"50px"}>
        <Button
          rightIcon={<DownloadIcon />}
          variant="solid"
          fontSize="16px"
          _hover={{
            background: "black",
          }}
          className="bg-main-color white-color qs-b"
          bg="#FB797F"
        >
          <a href="/CV-HuynhThiThanhVi.pdf" download="CV-HuynhThiThanhVi">
            Download my CV
          </a>
        </Button>



      </Center>

    </BgColorLayout >
  );
}
