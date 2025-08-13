//import css
import "./../../../css/font.css";
import "./../../../css/layout.css";
//import img
import onlinecert1 from "../../../asset/image/online-cert/online-cert-1.webp";
import onlinecert2 from "../../../asset/image/online-cert/online-cert-2.webp";
import onlinecert3 from "../../../asset/image/online-cert/online-cert-3.webp";
import onlinecert4 from "../../../asset/image/online-cert/online-cert-4.webp";
//import react-router
import { PATH } from "../../../router/Path";
const onlinecertdata = [
  {
    id: 0,
    type: "MOBILE APP DESIGN",
    name: "SPORT ZONE",
    des: `Sportzone is a platform that allows users to book sports venues and find playing partners quickly and conveniently.`,
    img: `${onlinecert1}`,
    span: "6",
    start: "1",
    path: `${PATH.uxui.cinema}`
  },
  {
    id: 1,
    type: "MOBILE APP DESIGN",
    name: "CINEMA FOOD STALLS",
    des: `This is case study of "Cinema food stalls" - a snack-ordering app for a movie theater chains. It's also a practical exercises of "Google UX design" course.`,
    img: `${onlinecert2}`,
    span: "6",
    start: "1",
    path: `${PATH.uxui.cinema}`
  },
  {
    id: 2,
    type: "MOBILE APP DESIGN",
    name: "AURA - THE AURA OF BEAUTY",
    des: `This is case study of "Aura" - a makeup tutorial-sharing platform and makeup artist booking. It's also a practical exercise of "Google UX design" course.`,
    img: `${onlinecert3}`,
    span: "6",
    start: "7",
    path: `${PATH.uxui.auraIOS}`
  },
  {
    id: 3,
    type: "WEB RESPONSIVE DESIGN",
    name: "AURA - THE AURA OF BEAUTY",
    des: `This is case study of "Aura (Web responsive)" - A responsive web for makeup lovers to learn make-up free, a useful platform for makeup artists who want to share work experience and get a job.`,
    img: `${onlinecert4}`,
    span: "6",
    start: "1",
    path: `${PATH.uxui.auraWeb}`
  },

];
export { onlinecertdata }