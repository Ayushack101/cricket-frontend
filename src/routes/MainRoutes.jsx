import { lazy } from "react";

import MainLayout from "../layouts/mainlayout";
import Loadable from "../components/loader/Loadable";

const Home = Loadable(lazy(() => import("../pages/Home")));
const Collection = Loadable(lazy(() => import("../pages/Collection")));
const ProductDetails = Loadable(lazy(() => import("../pages/ProductDetails")));
// const Auth = Loadable(lazy(() => import("../pages/Auth")));
const Login = Loadable(lazy(() => import("../pages/LoginPage")));
const About = Loadable(lazy(() => import("../pages/About")));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
    {
      path: "collection/:filter_type/:tcat_id/:mcat_id",
      element: <Collection />,
    },
    { path: "productdetails/:pid", element: <ProductDetails /> },
    { path: "signin", element: <Login /> },
  ],
};

export default MainRoutes;
