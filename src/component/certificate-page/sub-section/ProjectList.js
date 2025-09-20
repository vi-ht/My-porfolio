//import css
import "./../../../css/font.css";
import "./../../../css/layout.css";
import "./../../../css/animate.css";
//import components
import CertItem from "./cert-item";
//import layout
import BgColorLayout from "../../../layout/BgColorLayout";
import graduate from "../../../asset/image/edu-cert/graduate.webp"
// import chakra components
import { Text, Grid, Center } from "@chakra-ui/react";
//import data
import { certdata } from "./cert-data";
export default function ProjectList() {
    return (
        <BgColorLayout bgColor="white" mainpage id="uxui-project">

            <Center display="flex" flexDirection="column" className="intro" transform="translate(0px,50px)" mb="60px" w="100%">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_807_328)">
                        <path d="M39.9998 23.3333H19.9998C19.9998 23.3333 11.6665 33.3333 11.6665 39.9999C11.6665 46.6666 29.9998 58.3333 29.9998 58.3333C29.9998 58.3333 48.3332 46.6666 48.3332 39.9999C48.3332 33.3333 39.9998 23.3333 39.9998 23.3333Z" fill="#31373D" />
                        <path d="M32.7334 2.13342C31.2317 0.960085 28.7717 0.960085 27.2701 2.13342L2.73172 21.2934C1.23005 22.4668 1.23005 24.3868 2.73172 25.5601L27.2684 44.7184C28.7717 45.8917 31.2301 45.8917 32.7317 44.7184L57.2684 25.5601C58.7717 24.3868 58.7717 22.4668 57.2684 21.2934L32.7334 2.13342Z" fill="#292F33" />
                        <path d="M32.7334 2.13342C31.2317 0.960085 28.7717 0.960085 27.2701 2.13342L2.73172 21.2934C1.23005 22.4668 1.23005 24.3868 2.73172 25.5601L27.2684 44.7184C28.7701 45.8917 31.2301 45.8917 32.7317 44.7184L57.2701 25.5601C58.7717 24.3868 58.7717 22.4668 57.2701 21.2934L32.7334 2.13342Z" fill="#394146" />
                        <path d="M13.3333 41.6667C13.3333 41.6667 10 45.0001 10 46.6667V56.6667C10 56.6667 10 60.0001 13.3333 60.0001C16.6667 60.0001 16.6667 56.6667 16.6667 56.6667V46.6667C16.6667 45.0001 13.3333 41.6667 13.3333 41.6667Z" fill="#FCAB40" />
                        <path d="M13.3335 48.3333C16.0949 48.3333 18.3335 46.0947 18.3335 43.3333C18.3335 40.5718 16.0949 38.3333 13.3335 38.3333C10.5721 38.3333 8.3335 40.5718 8.3335 43.3333C8.3335 46.0947 10.5721 48.3333 13.3335 48.3333Z" fill="#FDD888" />
                        <path d="M13.335 44.9999C12.893 44.9999 12.4691 44.8243 12.1565 44.5118C11.8439 44.1992 11.6683 43.7753 11.6683 43.3333V36.7366C11.5983 35.6799 11.98 33.3433 13.8633 31.9299L28.9 18.7466C29.2335 18.4629 29.6652 18.3218 30.1018 18.3538C30.5384 18.3858 30.9449 18.5883 31.2334 18.9176C31.522 19.2468 31.6694 19.6764 31.6438 20.1135C31.6182 20.5505 31.4217 20.9599 31.0967 21.2533L15.9633 34.5166C14.9567 35.2766 15 36.6366 15 36.6499L15.0033 43.3333C15.0033 43.5523 14.9602 43.7691 14.8763 43.9715C14.7925 44.1738 14.6695 44.3576 14.5146 44.5124C14.3597 44.6672 14.1757 44.7899 13.9733 44.8735C13.7709 44.9572 13.554 45.0001 13.335 44.9999Z" fill="#FCAB40" />
                        <path d="M30 26.6667C32.7614 26.6667 35 24.4282 35 21.6667C35 18.9053 32.7614 16.6667 30 16.6667C27.2386 16.6667 25 18.9053 25 21.6667C25 24.4282 27.2386 26.6667 30 26.6667Z" fill="#31373D" />
                    </g>
                    <defs>
                        <clipPath id="clip0_807_328">
                            <rect width="60" height="60" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

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
                    Academic certificate
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
                    This section includes my academic certificates, such as my university degree and various awards of merit.
                </Text>
            </Center>
            <img
                src={graduate}
                style={{ width: "100%", marginBottom: "0" }}
                alt={""}
            ></img>
            <Grid
                templateColumns={{ base: "repeat(2,auto)", md: "repeat(12,auto)" }}
                w="full"
                mt="3rem"
                gapX={10}
                gap={10}
            >
                {certdata.map((item, i) => (
                    <CertItem
                        key={i}
                        id={item.id}
                        span={{ base: 2, md: 6 }}
                        name={item.name}
                        img={item.img}
                    />
                ))}
            </Grid>
        </BgColorLayout>
    );
}
