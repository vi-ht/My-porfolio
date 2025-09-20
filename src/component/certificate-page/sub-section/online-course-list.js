//import css
import "./../../../css/font.css";
import "./../../../css/layout.css";
import "./../../../css/animate.css";
//import components
import CertLink from "./cert-link";
//import layout
import BgColorLayout from "../../../layout/BgColorLayout";
// import chakra components
import { Text, Grid, Center } from "@chakra-ui/react";
//import data
import { technicalcertdata, languagecertdata, uiuxcertdata, othercertdata } from "./online-spec-data";
export default function OnlineCourseList() {
  return (
    <BgColorLayout bgColor="white" mainpage id="uxui-project">

      <Center display="flex" flexDirection="column" className="intro" transform="translate(0px,50px)" mb="60px" w="100%">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_807_336)">
            <path d="M56.6667 48.4933C55.9717 46.8883 55.1733 45.1467 53.3333 45.1467H51.6667C53.5067 45.1467 55 43.6483 55 41.8V13.3467C55.0009 12.9081 54.9154 12.4736 54.7483 12.068C54.5813 11.6624 54.336 11.2937 54.0264 10.983C53.7169 10.6722 53.3492 10.4255 52.9443 10.2568C52.5394 10.0881 52.1053 10.0009 51.6667 10H8.33333C6.49333 10 5 11.4983 5 13.3467V41.8C5 43.6483 6.49333 45.1467 8.33333 45.1467H6.66667C4.82667 45.1467 3.88833 46.82 3.33333 48.4933L0 56.6517C0 58.5017 1.49333 60 3.33333 60H56.6667C58.5067 60 60 58.5017 60 56.6533L56.6667 48.4933Z" fill="#CCD6DD" />
            <path d="M0.0131836 56.7917L0.0231836 56.8867L0.306517 58.0401C0.569921 58.6226 0.995302 59.1172 1.53194 59.4647C2.06859 59.8122 2.69385 59.998 3.33318 60.0001H56.6665C57.527 59.9972 58.3531 59.6617 58.9719 59.0638C59.5907 58.4658 59.9543 57.6517 59.9865 56.7917H0.0131836Z" fill="#9AAAB4" />
            <path d="M51.6668 40.1251C51.6668 41.0501 50.9218 41.7984 50.0002 41.7984H10.0002C9.08016 41.7984 8.3335 41.0501 8.3335 40.1251V15.0217C8.3335 14.0967 9.08016 13.3484 10.0002 13.3484H50.0002C50.9218 13.3484 51.6668 14.0984 51.6668 15.0217V40.1251Z" fill="#5DADEC" />
            <path d="M54.8433 51.7366L53.5766 48.1116C53.1783 47.3449 52.5183 46.7166 51.5966 46.7166H8.5166C7.5966 46.7166 7.0066 47.3966 6.58994 48.4432L5.44327 51.7382C5.07827 52.7316 6.18994 53.4116 7.10994 53.4116H19.7399C19.7399 53.4116 21.3016 53.3332 21.5783 52.3982C21.8983 51.3182 22.2699 49.6916 22.3499 49.4049C22.4733 48.9649 22.9966 48.5199 23.7766 48.5199H38.0733C38.9066 48.5199 39.3166 48.9416 39.4249 49.4632C39.4949 49.8032 39.9449 51.3649 40.1549 52.4332C40.3399 53.3849 42.1899 53.4099 42.1899 53.4099H53.1799C54.0983 53.4099 55.2083 52.6249 54.8433 51.7366Z" fill="#AEBBC1" />
            <path d="M37.2918 55.1884H24.3235C23.6985 55.1884 23.4268 54.6167 23.5168 54.0634C23.6068 53.5117 24.1151 51.0751 24.1551 50.7917C24.1935 50.5067 24.6118 50.1667 25.0285 50.1667H36.7201C37.2151 50.1667 37.5368 50.4384 37.6368 50.9817C37.7351 51.5267 38.1401 53.7167 38.1718 54.2167C38.2035 54.7167 37.8901 55.1884 37.2918 55.1884Z" fill="#9AAAB4" />
          </g>
          <defs>
            <clipPath id="clip0_807_336">
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
          mt="5px"
        >
          Online Course Specializations
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
          This section showcases my certificates from various online courses, with the majority obtained through Coursera.
        </Text>
      </Center>
      <Text
        fontSize={{
          base: "20px", //0px
          md: "25px", // 768px
        }}
        className="qs-smb"
      >
        Technical Certificates
      </Text>
      {/* <div className="line"></div> */}
      <Grid
        templateColumns={{ base: "repeat(2,auto)", md: "repeat(12,auto)" }}
        w="full"
        mt="3rem"
        gapX={10}
        gap={10}
      >
        {technicalcertdata.map((item, i) => (
          <CertLink
            key={i}
            id={item.id}
            span={{ base: 2, md: 6 }}
            name={item.name}
            img={item.img}
            path={item.path}
          />
        ))}
      </Grid>
      <Text
        fontSize={{
          base: "20px", //0px
          md: "25px", // 768px
        }}
        className="qs-smb"
        mt="70px"
      >
        UX/UI Certificates
      </Text>
      <Grid
        templateColumns={{ base: "repeat(2,auto)", md: "repeat(12,auto)" }}
        w="full"
        mt="3rem"
        gapX={10}
        gap={10}
      >
        {uiuxcertdata.map((item, i) => (
          <CertLink
            key={i}
            id={item.id}
            span={{ base: 2, md: 6 }}
            name={item.name}
            img={item.img}
            path={item.path}
          />
        ))}
      </Grid>
      <Text
        fontSize={{
          base: "20px", //0px
          md: "25px", // 768px
        }}
        className="qs-smb"
        mt="70px"
      >
        Language Certificates
      </Text>
      <Grid
        templateColumns={{ base: "repeat(2,auto)", md: "repeat(12,auto)" }}
        w="full"
        mt="3rem"
        gapX={10}
        gap={10}
      >
        {languagecertdata.map((item, i) => (
          <CertLink
            key={i}
            id={item.id}
            span={{ base: 2, md: 6 }}
            name={item.name}
            img={item.img}
            path={item.path}
          />
        ))}
      </Grid>
      <Text
        fontSize={{
          base: "20px", //0px
          md: "25px", // 768px
        }}
        className="qs-smb"
        mt="70px"
      >
        Other Certificates
      </Text>
      <Grid
        templateColumns={{ base: "repeat(2,auto)", md: "repeat(12,auto)" }}
        w="full"
        mt="3rem"
        gapX={10}
        gap={10}
      >
        {othercertdata.map((item, i) => (
          <CertLink
            key={i}
            id={item.id}
            span={{ base: 2, md: 6 }}
            name={item.name}
            img={item.img}
            path={item.path}
          />
        ))}
      </Grid>
    </BgColorLayout>
  );
}
