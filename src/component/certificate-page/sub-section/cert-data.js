//import css
import "./../../../css/font.css";
import "./../../../css/layout.css";
//import img
import cert1 from "../../../asset/image/edu-cert/cert-1.webp";
import cert2 from "../../../asset/image/edu-cert/cert-2.webp";
import cert3 from "../../../asset/image/edu-cert/cert-3.webp";
import cert4 from "../../../asset/image/edu-cert/cert-4.webp";
//import react-router
import { PATH } from "../../../router/Path";
const certdata = [
  {
    id: 0,
    type: "MOBILE APP DESIGN",
    name: "SPORT ZONE",
    des: `Sportzone is a platform that allows users to book sports venues and find playing partners quickly and conveniently.`,
    img: `${cert1}`,
    span: "6",
    start: "1",
    path: `${PATH.uxui.cinema}`
  },
  {
    id: 1,
    type: "MOBILE APP DESIGN",
    name: "CINEMA FOOD STALLS",
    des: `This is case study of "Cinema food stalls" - a snack-ordering app for a movie theater chains. It's also a practical exercises of "Google UX design" course.`,
    img: `${cert2}`,
    span: "6",
    start: "1",
    path: `${PATH.uxui.cinema}`
  },
  {
    id: 2,
    type: "MOBILE APP DESIGN",
    name: "AURA - THE AURA OF BEAUTY",
    des: `This is case study of "Aura" - a makeup tutorial-sharing platform and makeup artist booking. It's also a practical exercise of "Google UX design" course.`,
    img: `${cert3}`,
    span: "6",
    start: "7",
    path: `${PATH.uxui.auraIOS}`
  },
  {
    id: 3,
    type: "WEB RESPONSIVE DESIGN",
    name: "AURA - THE AURA OF BEAUTY",
    des: `This is case study of "Aura (Web responsive)" - A responsive web for makeup lovers to learn make-up free, a useful platform for makeup artists who want to share work experience and get a job.`,
    img: `${cert4}`,
    span: "6",
    start: "1",
    path: `${PATH.uxui.auraWeb}`
  },

];
export { certdata }