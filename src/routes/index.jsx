import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";
import MainRoutes from "./MainRoutes";
import BasicLayout from "../layouts/basiclayout";
import MainLayout from "../layouts/mainlayout";
import Loadable from "../components/loader/Loadable";
import ProtectedRoute from "./ProtectedRoute";
import AccountLogout from "../pages/AccountLogout";

const Login = Loadable(lazy(() => import("../pages/LoginPage")));
const Register = Loadable(lazy(() => import("../pages/Register")));
const Checkout = Loadable(lazy(() => import("../pages/Checkout")));
const AccountDashboard = Loadable(
  lazy(() => import("../pages/AccountDashboard"))
);
const AccountAddress = Loadable(lazy(() => import("../pages/AccountAddress")));
// const AccountLogout = Loadable(lazy(() => import("../pages/AccountLogout")));

const Routes = () => {
  return useRoutes([
    MainRoutes,
    // Auth Routes
    {
      path: "/auth",
      element: <BasicLayout />,
      children: [
        { path: "signin", element: <Login /> },
        { path: "signup", element: <Register /> },
      ],
    },
    // Checkout
    {
      path: "secured",
      element: <ProtectedRoute element={<BasicLayout />} />,
      children: [
        {
          path: "checkout",
          element: <Checkout />,
        },
      ],
    },
    // Account Routes
    {
      path: "account",
      element: <ProtectedRoute element={<MainLayout />} />,
      children: [
        {
          path: "dashboard",
          element: <AccountDashboard />,
        },
        {
          path: "address",
          element: <AccountAddress />,
        },
        {
          path: "logout",
          element: <AccountLogout />,
        },
      ],
    },
    { path: "*", element: <Navigate to={"/"} replace /> },
  ]);
};

export default Routes;
