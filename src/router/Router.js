import { useRoutes } from "react-router-dom";
import HomePage from "../component/homepage/HomePage";
import MainLayout from "../layout/MainLayout";
export default function Router() {
  const route = useRoutes([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        { index: true, element: <HomePage/> },
        { path: "ux-ui", element: <></> },
        { path: "coding", element: <></> },
        { path: "contact", element: <></> },
        { path: "resume", element: <></> },
      ],
    },
  ]);
  return route;
}
// const Spinner = LoadableComponent(React.lazy(() => import("../spinner-component/Spinner")));