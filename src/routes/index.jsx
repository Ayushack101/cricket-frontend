import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";
import MainRoutes from "./MainRoutes";
import BasicLayout from "../layouts/basiclayout";
import Loadable from "../components/loader/Loadable";

const Login=Loadable(lazy(()=>import("../pages/LoginPage")));

const Routes = () => {
  return useRoutes([
    MainRoutes,
    // Auth Routes
    {path: "/auth", element: <BasicLayout/>, 
      children: [
        {path: "signin", element: <Login/>}
      ]
    },
    { path: "*", element: <Navigate to={"/"} replace /> },
  ]);
};

export default Routes;
