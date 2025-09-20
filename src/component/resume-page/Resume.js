//import css
import "./../../css/font.css";
import "./../../css/Color.css";
import "./../../css/animate.css";
//import custom hook
//import layout
import BgColorLayout from "../../layout/BgColorLayout";
//import chakra UI component
import {
    Grid,
    GridItem,
    Box,
    Text,
    ListItem,
    UnorderedList,
    Link,
} from "@chakra-ui/react";
//import chakra icon
import { ExternalLinkIcon } from "@chakra-ui/icons";
//import React-router-dom
import { NavLink } from "react-router-dom";
import { PATH } from "./../../router/Path";
//----------------------------------------------------------
export default function Resume() {
    // useAnim(
    //     "felix-container",
    //     "felix-left",
    //     "felix-right",
    //     "project-left",
    //     "project-right"
    // );
    // useTitle(`Resume | Thanh Vi's portfolio`);
    return (
        <BgColorLayout bgColor="#ffebed" id="cv">
            <Grid
                w="full"

                templateColumns="repeat(16, 1fr)"
                gap={{ base: 0, md: 8, lg: 10 }}
                mt={{ base: 8, md: 0, lg: 5 }}
            >
                <GridItem colSpan={{ base: 16, md: 8, lg: 4 }}>
                    <Box>
                        <Text
                            fontSize="25px"
                            className="qs-b"
                            mt={{ base: 0, lg: "-30px" }}
                        >
                            CONTACT
                        </Text>
                        <div
                            style={{
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#FB797F",
                                borderRadius: "20px",
                                margin: "10px 0 20px 0",
                            }}
                        ></div>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Date of birth
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            01-10-2000
                        </Text>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Phone
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            (+84) 377 793 371
                        </Text>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Mail
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            thanhvi888@gmail.com
                        </Text>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Portfolio
                        </Text>
                        <NavLink to={PATH.home}>
                            <Text fontSize="16px" className="qs-r" mb="8px">
                                <Link
                                    color="#FB797F"
                                    fontWeight="bold"
                                    fontSize="16px"
                                >
                                    {" "}
                                    Thanh Vi's portfolio{"   "}
                                    <ExternalLinkIcon mx="2px" />
                                </Link>
                            </Text>
                        </NavLink>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Address
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            District 7, Ho Chi Minh City
                        </Text>
                        <Text
                            fontSize="25px"
                            className="qs-b"
                            mt={{ base: "30px", md: 0, lg: "30px" }}
                        >
                            EDUCATION
                        </Text>
                        <div
                            style={{
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#FB797F",
                                borderRadius: "20px",
                                margin: "10px 0 20px 0",
                            }}
                        ></div>
                        <Text fontSize="16px" className="qs-b" mb="8px">
                            FPT UNIVERSITY
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            (October 18 - November 22)
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px" color="#FB797F">
                            <span className="qs-smb">Bachelor's degree</span>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Major:</span> Software
                            engineering
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">GPA:</span> 8.1/10.0
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Certificate of merit:</span>{" "}
                            4 times is awarded "Honorable Student Of Semester".
                        </Text>
                        <Text fontSize="16px" className="qs-b" mb="8px" mt="24px">
                            FPT SCHOOL OF BUSINESS & TECHNOLOGY
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            (Now - December 26)
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px" color="#FB797F">
                            <span className="qs-smb">Master's degree</span>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Major:</span> Master of Software Engineering - Al-oriented programming
                        </Text>
                        <Text fontSize="25px" className="qs-b" mt="30px">
                            LANGUAGE
                        </Text>
                        <div
                            style={{
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#FB797F",
                                borderRadius: "20px",
                                margin: "10px 0 20px 0",
                            }}
                        ></div>
                        <Text fontSize="16px" className="qs-b" mb="8px">
                            English <span className="qs-r">(Basic verbal communication skills; capable of reading and writing in a professional context.)</span>
                        </Text>
                        <Text fontSize="16px" className="qs-smb">
                            TOEIC Listening & Reading  <span className="qs-smb" style={{ color: "#FB797F" }}>795/990</span>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            * Issued May 23 - Expired May 22
                        </Text>
                        <Text fontSize="16px" className="qs-b" mb="8px" mt="20px">
                            Chinese <span className="qs-r">(Able to read and write fluently; conversational speaking skills.)</span>
                        </Text>
                        <Text fontSize="16px" className="qs-smb">
                            HSK4 - HSKK Intermediate
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            * Issued June 25 - Expired June 27
                        </Text>
                        <Box display={{ base: "none", md: "block" }}>
                            <Text fontSize="25px" className="qs-b" mt="30px">
                                CERTIFICATE
                            </Text>
                            <div
                                style={{
                                    width: "40px",
                                    height: "3px",
                                    backgroundColor: "#FB797F",
                                    borderRadius: "20px",
                                    margin: "10px 0 20px 0",
                                }}
                            ></div>
                            <NavLink to={PATH.certificate}>
                                <Text fontSize="16px" className="qs-r" mb="8px">
                                    <Link
                                        isExternal
                                        color="#FB797F"
                                        fontWeight="bold"
                                        fontSize="16px"
                                    >
                                        {" "}
                                        View my certificates {"   "}
                                        <ExternalLinkIcon mx="2px" />
                                    </Link>
                                </Text>
                            </NavLink>
                        </Box>

                        {/* <Text fontSize="16px" className="qs-smb" mb="8px">
                            Web Design for Everybody: Basics of Web Development
                            & Coding Specilization
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/03e7cd6648bf79232d612cd6d9d4d11c"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Introduction to HTML5{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/1dc896f47f86d1f142d667be6b053b28"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Introduction to CSS3{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/b6654f10efa626c100d403186e40b359"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Interactivity with Javascript{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/5e18801bc0bbe5b15590a19ef0e8deea"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Advance styling with responsive design{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/4bc7a998768ea241c506e143a61d3db3"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Web design for everybody capstone{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Google UX Design Professional Certificate
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/cc4b4176f15a8d226d9b091390a13a74"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Foundations of User Experience (UX) Design
                                {"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/4ccbc9c0b85e70409de787fe3a441106"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Start the UX Design Process: Empathize, Define,
                                and Ideate{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/2a85e34890834af27b7507187fd3e009"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Build Wireframes and Low-Fidelity Prototypes
                                {"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/bbd89c1d4a7099c42cc6b8338d871aa9"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Conduct UX Research and Test Early Concepts
                                {"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/5966bcba2bf2969a7f2bbc6a83526ebd"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Create High-Fidelity Designs and Prototypes in
                                Figma{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/dc0fae840fd04b8d8e715e5889fb7048"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Responsive Web Design in Adobe XD{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/a8e1705114e2055b0508c6cd5c811a66"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Design a User Experience for Social Good &
                                Prepare for Jobs{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Meta Front-End Developer Professional Certificate
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/88c989ff749498324f42ac8efe5e785b"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Introduction to Front-End Development{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/7c1405cbb41b3bf5c2a4c5c2e477c6c1"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Version Control{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/a8e1705114e2055b0508c6cd5c811a66"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                React Basics{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/cd9662321f1ca614bf396245f4ca9294"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Advanced React{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Search Engine Optimization (SEO) Specialization
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/9a1a9c4f44cd4a30832e424e543497f9"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Introduction to Google SEO{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="#"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Google SEO Fundamentals{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text> */}
                        <Box display={{ base: "none", md: "block", lg: "none" }}>
                            <Text fontSize="25px" className="qs-b" mt="30px">
                                INTERESTS
                            </Text>
                            <div
                                style={{
                                    width: "40px",
                                    height: "3px",
                                    backgroundColor: "#FB797F",
                                    borderRadius: "20px",
                                    margin: "10px 0 20px 0",
                                }}
                            ></div>
                            <Text fontSize="16px" className="qs-r" mb="8px">
                                Enjoy discovering new cultures and making friends through language learning.
                            </Text>
                            <Text fontSize="16px" className="qs-r" mb="8px">
                                Listening to music & reading books to recharge creativity.
                            </Text>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem colSpan={{ base: 16, md: 8, lg: 6 }}>
                    <Box >
                        <Text
                            fontSize="25px"
                            className="qs-b"
                            mt={{ base: "30px", lg: "-30px" }}
                        >
                            EXPERIENCE
                        </Text>
                        <div
                            style={{
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#FB797F",
                                borderRadius: "20px",
                                margin: "10px 0 20px 0",
                            }}
                        ></div>
                        <NavLink to={PATH.coding}>
                            <Text fontSize="16px" className="qs-r" mb="8px">
                                <Link
                                    color="#FB797F"
                                    fontWeight="bold"
                                    fontSize="16px"
                                    isExternal={false}
                                >
                                    {" "}
                                    View my coding projects{"   "}
                                    <ExternalLinkIcon mx="2px" />
                                </Link>
                            </Text>
                        </NavLink>

                        <Text
                            fontSize="16px"
                            className="qs-b"
                            mb="8px"
                            mt="15px"
                        >
                            FPT SOFTWARE{" "}
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Ho Chi Minh City</span> | (May 21 - September 21)
                        </Text>

                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Position: </span> <span className="qs-smb" style={{ color: "#FB797F" }}>Intern</span>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Main tasks and contributions: </span>
                        </Text>
                        <UnorderedList>
                            <ListItem mt={1}>
                                Prepared and validated datasets for Al training, boosting model accuracy.
                            </ListItem>
                            <ListItem mt={1}>
                                Gained experience in preparing and validating Al training data using Python.
                            </ListItem>
                            <ListItem mt={1}>
                                Practiced teamwork through group-based project tasks and collaboration.
                            </ListItem>
                        </UnorderedList>
                        <Text
                            fontSize="16px"
                            className="qs-b"
                            mb="8px"
                            mt="30px"
                        >
                            FELIXZONE{" "}
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            (December 21 - September 22)
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Position: </span> <span className="qs-smb" style={{ color: "#FB797F" }}>Frontend web developer</span>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Main tasks and contributions: </span>
                        </Text>
                        <UnorderedList>
                            <ListItem mt={1}>
                                Built responsive web applications with modern JavaScript frameworks.
                            </ListItem>
                            <ListItem mt={1}>Integrated RESTful APls to improve data flow and user experience.</ListItem>
                            <ListItem mt={1}>
                                Drafted SRS documentation and contributed to Ul/UX design by brainstorming and prototyping workflows with Figma
                            </ListItem>
                        </UnorderedList>
                        <Text
                            fontSize="16px"
                            className="qs-b"
                            mb="8px"
                            mt="30px"
                        >
                            MINDX{" "}
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            (July 23 - December 23)
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Position: </span> <span className="qs-smb" style={{ color: "#FB797F" }}>Teaching Assistant Web Development (HTML, CSS, JS, ReactJS)</span>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Main tasks and contributions: </span>
                        </Text>
                        <UnorderedList>
                            <ListItem mt={1}>
                                Assisted in teaching HTML, CSS, JavaScript, and ReactS.
                            </ListItem>
                            <ListItem mt={1}>Guided students with debugging, Reviewed assignments, provided detailed feedback, and designed exercises to strengthen learning outcomes.</ListItem>
                            <ListItem mt={1}>
                                Facilitated group projects to enhance collaboration and learning.
                            </ListItem>
                        </UnorderedList>
                        <Text
                            fontSize="16px"
                            className="qs-b"
                            mb="8px"
                            mt="30px"
                        >
                            FACTORAZY{" "}
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            (September 23 - June 25)
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Position: </span> <span className="qs-smb" style={{ color: "#FB797F" }}>Frontend web developer</span>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Main tasks and contributions: </span>
                        </Text>
                        <UnorderedList>
                            <ListItem mt={1}>
                                Delivered a fundraising project on time, turning Figma designs into responsive sites with NextJS & TailwindCsS, collaborated with backend team to align API.
                            </ListItem>
                            <ListItem mt={1}>Improved efficiency by suggesting design alternatives to reduce coding effort and enhancing code maintainability with reusable components.</ListItem>
                            <ListItem mt={1}>
                                Contributed to the company's next fundraising round.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
                <GridItem
                    colSpan={{ base: 16, lg: 6 }}
                    display={{ base: "grid", md: "none", lg: "grid" }}
                >
                    <Box>
                        <Text
                            fontSize="25px"
                            className="qs-b"
                            mt={{ base: "30px", lg: "-30px" }}
                        >
                            TECHNICAL SKILLS
                        </Text>
                        <div
                            style={{
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#FB797F",
                                borderRadius: "20px",
                                margin: "10px 0 20px 0",
                            }}
                        ></div>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Frontend:
                        </Text>
                        <UnorderedList>
                            <ListItem mt={1}>
                                HTML5, CSS3, JavaScript (ES6+)
                            </ListItem>
                            <ListItem mt={1}>TypeScript, ReactJS, NextJS, Redux / Recoil</ListItem>
                            <ListItem mt={1}>
                                Responsive & Mobile-first Design
                            </ListItem>
                        </UnorderedList>
                        <Text fontSize="16px" className="qs-smb" mb="8px" mt={"15px"}>
                            UI Frameworks & styling:
                        </Text>
                        <UnorderedList>
                            <ListItem mt={1}>
                                TailwindCSS, Bootstrap, Sass/SCSS, Styled Components
                            </ListItem>
                            <ListItem mt={1}>Material Ul, Ant Design, ChakraUl, Shadcn.</ListItem>
                        </UnorderedList>
                        <Text fontSize="16px" className="qs-smb" mb="8px" mt={"15px"}>
                            Backend Integration:
                        </Text>
                        <UnorderedList>
                            <ListItem mt={1}>
                                RESTFul APIs, Axios, Fetch API
                            </ListItem>
                        </UnorderedList>
                        <Text fontSize="16px" className="qs-smb" mb="8px" mt={"15px"}>
                            Tools:
                        </Text>
                        <UnorderedList>
                            <ListItem mt={1}>
                                Git/GitHub
                            </ListItem>
                            <ListItem mt={1}>NPM/Yarn</ListItem>
                            <ListItem mt={1}>
                                Chrome DevTools, Lighthouse, Postman, Redux Toolkit.
                            </ListItem>
                        </UnorderedList>
                        <Text fontSize="16px" className="qs-smb" mb="8px" mt={"15px"}>
                            SEO & Performance:
                        </Text>
                        <UnorderedList>
                            <ListItem mt={1}>
                                Understanding SEO principles.
                            </ListItem>
                            <ListItem mt={1}>Core Web Vitals optimization.</ListItem>
                            <ListItem mt={1}>
                                Tools: Google Search Console, PageSpeed Insights.
                            </ListItem>
                        </UnorderedList>
                        <Text fontSize="25px" className="qs-b" mt="30px">
                            DESIGN SKILLS
                        </Text>
                        <div
                            style={{
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#FB797F",
                                borderRadius: "20px",
                                margin: "10px 0 20px 0",
                            }}
                        ></div>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Ul/UX Design:
                        </Text>
                        <UnorderedList>
                            <ListItem mt={1}>
                                Responsive & Mobile-first Design
                            </ListItem>
                            <ListItem mt={1}>Accessibility awareness (ally)</ListItem>
                            <ListItem mt={1}>
                                Design systems, wireframes, mockups, interactive prototypes (web & mobile)
                            </ListItem>
                            <ListItem mt={1}>
                                User flows, sitemaps, and journey mapping
                            </ListItem>

                        </UnorderedList>
                        <Text fontSize="16px" className="qs-smb" mb="8px" mt={"15px"}>
                            Design Tools
                        </Text>
                        <UnorderedList>
                            <ListItem mt={1}>
                                Figma, Adobe XD, Sketch
                            </ListItem>
                            <ListItem mt={1}>FigJam, Miro</ListItem>
                            <ListItem mt={1}>Canva</ListItem>
                        </UnorderedList>
                        <Text fontSize="25px" className="qs-b" mt="30px">
                            SOFT SKILLS
                        </Text>
                        <div
                            style={{
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#FB797F",
                                borderRadius: "20px",
                                margin: "10px 0 20px 0",
                            }}
                        ></div>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Team collaboration
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Fast learner
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Problem-solving
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Attention to detail
                        </Text>
                        <Text fontSize="25px" className="qs-b" mt="30px">
                            INTERESTS
                        </Text>
                        <div
                            style={{
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#FB797F",
                                borderRadius: "20px",
                                margin: "10px 0 20px 0",
                            }}
                        ></div>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Enjoy discovering new cultures and making friends through language learning.
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Listening to music & reading books to recharge creativity.
                        </Text>
                        <Box display={{ base: "block", md: "none" }}>
                            <Text fontSize="25px" className="qs-b" mt="30px">
                                CERTIFICATE
                            </Text>
                            <div
                                style={{
                                    width: "40px",
                                    height: "3px",
                                    backgroundColor: "#FB797F",
                                    borderRadius: "20px",
                                    margin: "10px 0 20px 0",
                                }}
                            ></div>
                            <NavLink to={PATH.certificate}>
                                <Text fontSize="16px" className="qs-r" mb="8px">
                                    <Link
                                        isExternal
                                        color="#FB797F"
                                        fontWeight="bold"
                                        fontSize="16px"
                                    >
                                        {" "}
                                        View my certificates {"   "}
                                        <ExternalLinkIcon mx="2px" />
                                    </Link>
                                </Text>
                            </NavLink>
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
            <Grid
                w="full"
                templateColumns="repeat(12, 1fr)"
                gap={10}
                mt="35px"
                display={{ base: "none", md: "grid", lg: "none" }}
            >
                <GridItem colSpan={{ base: 6 }}>
                    <Text
                        fontSize="25px"
                        className="qs-b"
                        mt={{ base: "30px", lg: "-30px" }}
                    >
                        TECHNICAL SKILLS
                    </Text>
                    <div
                        style={{
                            width: "40px",
                            height: "3px",
                            backgroundColor: "#FB797F",
                            borderRadius: "20px",
                            margin: "10px 0 20px 0",
                        }}
                    ></div>
                    <Text fontSize="16px" className="qs-smb" mb="8px">
                        Frontend:
                    </Text>
                    <UnorderedList>
                        <ListItem mt={1}>
                            HTML5, CSS3, JavaScript (ES6+)
                        </ListItem>
                        <ListItem mt={1}>TypeScript, ReactJS, NextJS, Redux / Recoil</ListItem>
                        <ListItem mt={1}>
                            Responsive & Mobile-first Design
                        </ListItem>
                    </UnorderedList>
                    <Text fontSize="16px" className="qs-smb" mb="8px" mt={"15px"}>
                        UI Frameworks & styling:
                    </Text>
                    <UnorderedList>
                        <ListItem mt={1}>
                            TailwindCSS, Bootstrap, Sass/SCSS, Styled Components
                        </ListItem>
                        <ListItem mt={1}>Material Ul, Ant Design, ChakraUl, Shadcn.</ListItem>
                    </UnorderedList>
                    <Text fontSize="16px" className="qs-smb" mb="8px" mt={"15px"}>
                        Backend Integration:
                    </Text>
                    <UnorderedList>
                        <ListItem mt={1}>
                            RESTFul APIs, Axios, Fetch API
                        </ListItem>
                    </UnorderedList>
                    <Text fontSize="16px" className="qs-smb" mb="8px" mt={"15px"}>
                        Tools:
                    </Text>
                    <UnorderedList>
                        <ListItem mt={1}>
                            Git/GitHub
                        </ListItem>
                        <ListItem mt={1}>NPM/Yarn</ListItem>
                        <ListItem mt={1}>
                            Chrome DevTools, Lighthouse, Postman, Redux Toolkit.
                        </ListItem>
                    </UnorderedList>
                    <Text fontSize="16px" className="qs-smb" mb="8px" mt={"15px"}>
                        SEO & Performance:
                    </Text>
                    <UnorderedList>
                        <ListItem mt={1}>
                            Understanding SEO principles.
                        </ListItem>
                        <ListItem mt={1}>Core Web Vitals optimization.</ListItem>
                        <ListItem mt={1}>
                            Tools: Google Search Console, PageSpeed Insights.
                        </ListItem>
                    </UnorderedList>
                </GridItem>
                <GridItem colSpan={{ base: 6 }}>
                    <Text fontSize="25px" className="qs-b" mt="30px">
                        DESIGN SKILLS
                    </Text>
                    <div
                        style={{
                            width: "40px",
                            height: "3px",
                            backgroundColor: "#FB797F",
                            borderRadius: "20px",
                            margin: "10px 0 20px 0",
                        }}
                    ></div>
                    <Text fontSize="16px" className="qs-smb" mb="8px">
                        Ul/UX Design:
                    </Text>
                    <UnorderedList>
                        <ListItem mt={1}>
                            Responsive & Mobile-first Design
                        </ListItem>
                        <ListItem mt={1}>Accessibility awareness (ally)</ListItem>
                        <ListItem mt={1}>
                            Design systems, wireframes, mockups, interactive prototypes (web & mobile)
                        </ListItem>
                        <ListItem mt={1}>
                            User flows, sitemaps, and journey mapping
                        </ListItem>

                    </UnorderedList>
                    <Text fontSize="16px" className="qs-smb" mb="8px" mt={"15px"}>
                        Design Tools
                    </Text>
                    <UnorderedList>
                        <ListItem mt={1}>
                            Figma, Adobe XD, Sketch
                        </ListItem>
                        <ListItem mt={1}>FigJam, Miro</ListItem>
                        <ListItem mt={1}>Canva</ListItem>
                    </UnorderedList>
                    <Text fontSize="25px" className="qs-b" mt="30px">
                        SOFT SKILLS
                    </Text>
                    <div
                        style={{
                            width: "40px",
                            height: "3px",
                            backgroundColor: "#FB797F",
                            borderRadius: "20px",
                            margin: "10px 0 20px 0",
                        }}
                    ></div>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Team collaboration
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Fast learner
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Problem-solving
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Attention to detail
                    </Text>
                </GridItem>
            </Grid>
        </BgColorLayout>
    );
}
