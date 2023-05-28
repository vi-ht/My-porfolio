import { useRoutes } from "react-router-dom";
import HomePage from "../component/homepage/HomePage";
import CodingPage from "../component/coding-page/CodingPage";
import MainLayout from "../layout/MainLayout";
import AboutMePage from "../component/aboutme-page/AboutMePage";
import CinnemaFoodStall from "../component/homepage/CinemaFoodStall";
export default function Router() {
    const route = useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                { path: "coding", element: <CodingPage /> },
                { path: "about-me", element: <AboutMePage></AboutMePage> },
                { path: "resume", element: <></> },
                {
                    path: "cinema-food-stall",
                    element: <CinnemaFoodStall></CinnemaFoodStall>,
                },
            ],
        },
    ]);
    return route;
}
// const Spinner = LoadableComponent(React.lazy(() => import("../spinner-component/Spinner")));
