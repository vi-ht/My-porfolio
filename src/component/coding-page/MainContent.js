//import css
import "./../../css/font.css";
import "./../../css/layout.css";
import "./../../css/animate.css";
//import hook
import { useEffect } from "react";
//import layout
import BgImageLayout from "../../layout/BgImageLayout";
// import chakra components
import { Text, Center } from "@chakra-ui/react";
//import image
import bg from "../../asset/image/Main-Content-bg.png";
import icon from "../../asset/icon/twemoji_woman-technologist.png";
//-----------------------------------------------"70% 100%"
export default function MainContent() {
    useEffect(() => {
        const pos = document.getElementById("personal-project").offsetTop;
        const func = () => {
            if (
                window.scrollY > pos - 50 &&
                !document
                    .getElementById("personal-content")
                    .classList.contains("intro")
            ) {
                document
                    .getElementById("personal-content")
                    .classList.add("intro");
            }
        };
        window.addEventListener("scroll", func);
        return () => {
            window.removeEventListener("scroll", func);
        };
    });
    return (
        <BgImageLayout bg={bg} pos="70% 100%" id="personal-project">
            <Center display="flex" flexDirection="column" id="personal-content">
                <img
                    src={icon}
                    alt="wave-hand"
                    style={{ width: "55px", height: "55px" }}
                />
                <Text
                    fontSize={{
                        base: "25px", //0px
                        sm: "25px", // 480px
                        md: "30px", // 768px
                        lg: "30px", // 992px
                        xl: "35px", // 1280px
                        "2xl": "35px", //1536px
                    }}
                    className="qs-smb"
                >
                    Personal Project
                </Text>
                <div className="line" style={{ margin: "1rem 0" }}></div>
                <Text
                    fontSize={{
                        base: "16px", //0px
                        lg: "20px", // 992px
                    }}
                    mt={{
                        base: "0.3rem", //0px
                        lg: "0", // 992px
                    }}
                    w={{
                        base: "100%", //0px
                        lg: "50%", // 992px
                    }}
                    textAlign="center"
                >
                    These are the web designs I found from Figma community of
                    other designers. and I used it to build a real website for
                    the purpose of filling out my portfolio.
                </Text>
            </Center>
        </BgImageLayout>
    );
}
