import { lazy } from "react";

// import MainLayout from "../layouts/mainlayout";
import Loadable from "../components/loader/Loadable";

const Collection = Loadable(lazy(() => import("../pages/Collection")));
const ProductDetails = Loadable(lazy(() => import("../pages/ProductDetails")));
const About = Loadable(lazy(() => import("../pages/About")));
const Cart = Loadable(lazy(() => import("../pages/Cart")));
const MainLayout = Loadable(lazy(() => import("../layouts/MainLayout")));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    { path: "about", element: <About /> },
    {
      path: "collection/:filter_type/:tcat_id/:mcat_id",
      element: <Collection />,
    },
    { path: "productdetails/:pid", element: <ProductDetails /> },
    { path: "cart", element: <Cart /> },
  ],
};

export default MainRoutes;
