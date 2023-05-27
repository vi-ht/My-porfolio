import { useRoutes } from "react-router-dom";
import HomePage from "../component/homepage/HomePage";
import CodingPage from "../component/coding-page/CodingPage";
import MainLayout from "../layout/MainLayout";
import AboutMePage from "../component/aboutme-page/AboutMePage";
export default function Router() {
  const route = useRoutes([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        { index: true, element: <HomePage/> },
        { path: "coding", element: <CodingPage/> },
        { path: "about-me", element: <AboutMePage></AboutMePage> },
        { path: "resume", element: <></> },
      ],
    },
  ]);
  return route;
}
// const Spinner = LoadableComponent(React.lazy(() => import("../spinner-component/Spinner")));