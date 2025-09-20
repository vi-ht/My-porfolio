//import css
import "./../../../css/font.css";
import "./../../../css/layout.css";
import "./../../../css/animate.css";
//import components
//import layout
import BgColorLayout from "../../../layout/BgColorLayout";
import toeic from "../../../asset/image/language-cert/toeic.webp"
import hsk from "../../../asset/image/language-cert/hsk.webp"
// import chakra components
import { Text, Center } from "@chakra-ui/react";
//import data
export default function LanguageCert() {
  return (
    <BgColorLayout bgColor="white" mainpage id="uxui-project">
      <Center display="flex" flexDirection="column" className="intro" transform="translate(0px,50px)" mb="60px" w="100%">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_807_342)">
            <path d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z" fill="#DD2E44" />
            <path d="M30 52.5C42.4264 52.5 52.5 42.4264 52.5 30C52.5 17.5736 42.4264 7.5 30 7.5C17.5736 7.5 7.5 17.5736 7.5 30C7.5 42.4264 17.5736 52.5 30 52.5Z" fill="white" />
            <path d="M30.0002 46.6666C39.2049 46.6666 46.6668 39.2047 46.6668 29.9999C46.6668 20.7952 39.2049 13.3333 30.0002 13.3333C20.7954 13.3333 13.3335 20.7952 13.3335 29.9999C13.3335 39.2047 20.7954 46.6666 30.0002 46.6666Z" fill="#DD2E44" />
            <path d="M30 40C35.5228 40 40 35.5228 40 30C40 24.4772 35.5228 20 30 20C24.4772 20 20 24.4772 20 30C20 35.5228 24.4772 40 30 40Z" fill="white" />
            <path d="M30 35C32.7614 35 35 32.7614 35 30C35 27.2386 32.7614 25 30 25C27.2386 25 25 27.2386 25 30C25 32.7614 27.2386 35 30 35Z" fill="#DD2E44" />
            <path opacity="0.2" d="M30.4 30.47L52.3067 50.06C52.3067 50.06 47.895 55.6866 39.1567 58.575L29.2983 30.7L30.4 30.47Z" fill="black" />
            <path d="M30.4898 31.6667C30.1612 31.6677 29.8398 31.5711 29.5663 31.389C29.2928 31.207 29.0796 30.9477 28.9538 30.6442C28.8281 30.3406 28.7954 30.0066 28.8599 29.6844C28.9245 29.3623 29.0834 29.0666 29.3164 28.835L30.2548 27.8967C30.5657 27.5855 30.9876 27.4106 31.4275 27.4104C31.8674 27.4102 32.2894 27.5849 32.6006 27.8958C32.9118 28.2068 33.0867 28.6286 33.0869 29.0686C33.087 29.5085 32.9124 29.9305 32.6014 30.2417L31.6614 31.18C31.3503 31.4903 30.9292 31.6652 30.4898 31.6667Z" fill="#FFAC33" />
            <path d="M40.0265 11.6349C39.3549 15.0999 40.0265 19.4533 40.0265 19.4533L51.7832 7.13994C52.2682 4.7166 50.9032 0.586602 48.9199 0.0766015C46.9365 -0.433398 42.1215 1.41494 40.0265 11.6349ZM48.3649 19.9733C44.8999 20.6449 40.5465 19.9733 40.5465 19.9733L52.8599 8.2166C55.2832 7.7316 59.4132 9.0966 59.9232 11.0799C60.4332 13.0633 58.5849 17.8783 48.3649 19.9733Z" fill="#55ACEE" />
            <path d="M54.6632 7.47502L35.2932 29.3117C34.6899 29.915 32.5049 30.7817 31.1099 29.3883C29.7149 27.995 30.4116 25.9217 31.0149 25.3167L53.0249 5.83502C53.0249 5.83502 54.1516 4.77668 54.9566 5.58168C55.7616 6.38668 54.6632 7.47502 54.6632 7.47502Z" fill="#3A87C2" />
          </g>
          <defs>
            <clipPath id="clip0_807_342">
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
          Language certificate
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
          This section presents my language certificates, which include both English and Chinese.
        </Text>
      </Center>
      <img
        src={toeic}
        style={{ width: "100%", marginBottom: "40px", }}
        alt={""}
      ></img>
      <img
        src={hsk}
        style={{ width: "100%", marginBottom: "0" }}
        alt={""}
      ></img>

      {/* <Grid
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
            start={item.start}
            name={item.name}
            des={item.des}
            type={item.type}
            img={item.img}
            path={item.path}
          />
        ))}
      </Grid> */}
    </BgColorLayout>
  );
}
