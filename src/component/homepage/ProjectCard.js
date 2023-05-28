//import css
import "./../../css/font.css";
import "./../../css/layout.css";
// import chakra components
import {
    Text,
    Box,
    Container,
    Flex,
    Center,
    VStack,
    GridItem,
} from "@chakra-ui/react";
//import React-router-dom
import { Link } from "react-router-dom";
import {PATH} from "../../router/Path"
//-----------------------------------------------------------
export default function ProjectCard({ span, start, name, type, des, img }) {
    return (
        <GridItem colSpan={{base: 12, lg: 6}} mb={5}>
            <Link to={PATH.cinema}>
                <img
                    src={img}
                    style={{ width: "100%", marginBottom: "1rem" }}
                ></img>
                <Text
                    textAlign="left"
                    className="main-color qs-b"
                    fontSize="16px"
                >
                    {type}
                </Text>
                <Text fontSize="30px" className="qs-b">
                    {name}
                </Text>
                <Text fontSize="16px" className="qs-r">
                    {des}
                </Text>
                <div className="card-line"></div>
            </Link>
        </GridItem>
    );
}