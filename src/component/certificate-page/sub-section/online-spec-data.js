//import css
import "./../../../css/font.css";
import "./../../../css/layout.css";
//import img
import onlinecert1 from "../../../asset/image/online-cert/online-cert-1.webp";
import onlinecert2 from "../../../asset/image/online-cert/online-cert-2.webp";
import onlinecert3 from "../../../asset/image/online-cert/online-cert-3.webp";
import onlinecert4 from "../../../asset/image/online-cert/online-cert-4.webp";
import onlinecert5 from "../../../asset/image/online-cert/online-cert-5.webp";
import onlinecert6 from "../../../asset/image/online-cert/online-cert-6.webp";
import onlinecert7 from "../../../asset/image/online-cert/online-cert-7.webp";
import onlinecert8 from "../../../asset/image/online-cert/online-cert-8.webp";
import onlinecert9 from "../../../asset/image/online-cert/online-cert-9.webp";
import onlinecert10 from "../../../asset/image/online-cert/online-cert-10.webp";
import onlinecert11 from "../../../asset/image/online-cert/online-cert-11.webp";
import onlinecert12 from "../../../asset/image/online-cert/online-cert-12.webp";
import onlinecert13 from "../../../asset/image/online-cert/online-cert-13.webp";
//import react-router
const technicalcertdata = [
  {
    id: 0,
    name: "Web Design for Everybody: Basics of Web Development and Coding",
    img: `${onlinecert1}`,
    span: "6",
    path: "https://coursera.org/share/977d9fccadb1fa97c60691271e919516"

  },
  {
    id: 1,
    name: "Search Engine Optimization (SEO)",
    img: `${onlinecert2}`,
    span: "6",
    path: "https://coursera.org/share/f430bd3ed9aba3da4278d24e94fa2158"

  },
  {
    id: 5,
    name: "Become a JavaScript Developer",
    img: `${onlinecert12}`,
    span: "6",
    path: "https://coursera.org/share/bf6ad649f6c3ea19e3d929df7659b45b"
  },
  {
    id: 6,
    name: "Modern HTML & CSS From The Beginning 2.0",
    img: `${onlinecert13}`,
    span: "6",
    path: "https://coursera.org/share/4bcc90981350a443e3d588b13fcde1ed"
  },
  {
    id: 4,
    name: "The Freelance Stack: Real project with NextJS and Strapi",
    img: `${onlinecert11}`,
    span: "6",
    path: "https://coursera.org/share/abf14bcff27f7ca53b411455d0ea0625"
  },


];
const uiuxcertdata = [

  {
    id: 1,
    name: "Google UX Design",
    img: `${onlinecert3}`,
    span: "6",
    path: "https://coursera.org/share/4b51eb39296614846a01b2f892552a14"
  },
  {
    id: 2,
    name: "Figma, Sketch & Miro for UX Design",
    img: `${onlinecert4}`,
    span: "6",
    path: "https://coursera.org/share/8b92449bc1813719c9cb86b08135a5dd"
  },
  {
    id: 3,
    name: "UI / UX Design",
    img: `${onlinecert6}`,
    span: "6",
    path: "https://www.coursera.org/account/accomplishments/specialization/RMKAAAH3HBLM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n"
  },



];
const languagecertdata = [
  {
    id: 0,
    name: "Chinese for HSK4",
    img: `${onlinecert5}`,
    span: "6",
    path: "https://coursera.org/share/c451ec4bf37d1c91e04e2053a162a80c"
  },
  {
    id: 1,
    name: "The Pronunciation of American",
    img: `${onlinecert7}`,
    span: "6",
    path: "https://coursera.org/share/e36690ecd6e4e918f76649b2a4d9ede1"
  },

];
const othercertdata = [
  {
    id: 0,
    name: "Google Prompting Essentials",
    img: `${onlinecert8}`,
    span: "6",
    path: "https://coursera.org/share/cf718933d1415281006e54bd5a9126e0"
  },
  {
    id: 1,
    name: "Google Al Essentials",
    img: `${onlinecert9}`,
    span: "6",
    path: "https://coursera.org/share/804df75d4a7a86a6d600f1bcb9a2a531"
  },
  {
    id: 1,
    name: "Attract and Engage Customers with Digital Marketing",
    img: `${onlinecert10}`,
    span: "6",
    path: "https://coursera.org/share/51c298837960c9e8a7db11741574526b"
  },

];
export { technicalcertdata, languagecertdata, uiuxcertdata, othercertdata }