import { useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layout/MainLayout";
import { Box, Center, CircularProgress } from "@chakra-ui/react";

const Loadable = (Component) => () => {
    return (
        <Suspense
            fallback={
                <Box w="full" mt="13vh">
                    <Center w="full" h="87vh">
                        <CircularProgress isIndeterminate color="#FB797F" />
                    </Center>
                </Box>
            }
        >
            <Component />
        </Suspense>
    );
};

// const Loadable = (Component) => {
//     return (props) => {
//         return (
//             <Suspense fallback={<>{console.log("ggggg...")}</>}>
//                 <Component {...props} />
//             </Suspense>
//         );
//     };
// };

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
                { path: "about-me", element: <AboutMePage /> },
                { path: "resume", element: <Resume /> },

                {
                    path: "ux-ui/",
                    //element: <></>,
                    children: [
                        {
                            path: "cinema-food-stall",
                            element: <CinnemaFoodStall />,
                        },
                        {
                            path: "aura-ios",
                            element: <AuraMobile />,
                        },
                        {
                            path: "co-gi-ban-nay",
                            element: <Cogibannay />,
                        },
                        {
                            path: "aura-web",
                            element: <AuraWeb />,
                        },
                    ],
                },
            ],
        },
    ]);
    return route;
}

const CinnemaFoodStall = Loadable(
    lazy(() => import("../component/homepage/CinemaFoodStall"))
);
const Resume = Loadable(lazy(() => import("../component/resume-page/Resume")));
const AuraMobile = Loadable(
    lazy(() => import("../component/homepage/AuraMobile"))
);
const Cogibannay = Loadable(
    lazy(() => import("../component/homepage/Cogibannay"))
);
const AuraWeb = Loadable(lazy(() => import("../component/homepage/AuraWeb")));
const HomePage = Loadable(lazy(() => import("../component/homepage/HomePage")));
const CodingPage = Loadable(
    lazy(() => import("../component/coding-page/CodingPage"))
);
const AboutMePage = Loadable(
    lazy(() => import("../component/aboutme-page/AboutMePage"))
);
