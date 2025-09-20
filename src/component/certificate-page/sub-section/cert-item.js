//import css
import "./../../../css/font.css";
import "./../../../css/layout.css";
import "./../../../css/animate.css";
// import chakra components
import { GridItem } from "@chakra-ui/react";
//import React-router-dom
//-----------------------------------------------------------
export default function CertItem({
  span,
  name,
  img,
}) {
  return (
    <GridItem colSpan={span} mb={0} className="card-container" w="100%">
      <img
        src={img}
        style={{ width: "100%", marginBottom: "0" }}
        alt={name + "certificate"}
      ></img>
    </GridItem>
  );
}
