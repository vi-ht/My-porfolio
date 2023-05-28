//import css
import "./../../css/font.css";
import "./../../css/layout.css";
//import img
import cinema from "../../asset/image/CinnemaFoodStall.png";
import auraMobile from "../../asset/image/Aura-mobile-thumbnail.png";
import cogibanay from "../../asset/image/Cogibannay.png";
import auraDesk from "./../../asset/image/CodingBg.png";
//import components
import ProjectCard from "./ProjectCard";
//import layout
import BgColorLayout from "../../layout/BgColorLayout";
// import chakra components
import { Text, Grid } from "@chakra-ui/react";
const data = [
    {
        type: "MOBILE APP DESIGN (Androi)",
        name: "Cinema food stalls",
        des: `This is case study of "Cinema food stalls" - a snack-ordering app for a movie theater chains. It's also a practical exercises of "Google UX design" course.`,
        img: `${cinema}`,
        span: "6",
        start: "1",
    },
    {
        type: "MOBILE APP DESIGN (IOS)",
        name: "AURA - THE AURA OF BEAUTY",
        des: "A snack-ordering app for a movie theater chains A snack-ordering app for a movie theater chains",
        img: `${auraMobile}`,
        span: "6",
        start: "7",
    },
    {
        type: "WEB RESPONSIVE DESIGN",
        name: "Cinema food stalls",
        des: "A snack-ordering app for a movie theater chains",
        img: `${auraMobile}`,
        span: "6",
        start: "1",
    },
    {
        type: "UX RESEARCH",
        name: "MOMO TALENT PROJECT",
        des: `"Có gì bán nấy" is a project to participate in the MOMO Talent contest and it helped me to get to the final round (interview) of the contest.`,
        img: `${cogibanay}`,
        span: "6",
        start: "7",
    },
];
export default function ProjectList() {
    return (
        <BgColorLayout bgColor="white" mainPage>
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
            <Grid templateColumns="repeat(12,1fr)" w="full" mt="3rem" gap={6}>
                {data.map((item, i) => (
                    <ProjectCard
                        key={i}
                        span={item.span}
                        start={item.start}
                        name={item.name}
                        des={item.des}
                        type={item.type}
                        img={item.img}
                    />
                ))}
            </Grid>
        </BgColorLayout>
    );
}
