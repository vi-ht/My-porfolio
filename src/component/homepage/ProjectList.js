//import css
import "./../../css/font.css";
import "./../../css/layout.css";
import "./../../css/animate.css";
//import components
import ProjectCard from "./ProjectCard";
//import layout
import BgColorLayout from "../../layout/BgColorLayout";
// import chakra components
import { Text, Grid } from "@chakra-ui/react";
import { PATH } from "../../router/Path";
//import data
import {data} from "./Data";
export default function ProjectList() {
    return (
        <BgColorLayout bgColor="white" mainPage id="uxui-project">
            <Text
                fontSize={{
                    base: "25px", //0px
                    sm: "25px", // 480px
                    md: "30px", // 768px
                    lg: "30px", // 992px
                    xl: "35px", // 1280px
                    "2xl": "35px", //1536px
                }}
                className="qs-b"
            >
                Personal project
            </Text>
            <div className="line"></div>
            <Grid templateColumns="repeat(12,1fr)" w="full" mt="3rem" gap={8}>
                {data.map((item, i) => (
                    <ProjectCard
                        key={i}
                        id={item.id}
                        span={{ base: 12, lg: 6 }}
                        start={item.start}
                        name={item.name}
                        des={item.des}
                        type={item.type}
                        img={item.img}
                        path={item.path}
                    />
                ))}
            </Grid>
        </BgColorLayout>
    );
}
