import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";
import MainRoutes from "./MainRoutes";
// import BasicLayout from "../layouts/basiclayout";
// import MainLayout from "../layouts/mainlayout";
import Loadable from "../components/loader/Loadable";
import ProtectedRoute from "./ProtectedRoute";
import AccountLogout from "../pages/AccountLogout";
// import Home from "../pages/Home";
import PreLoadable from "../components/loader/PreLoadable";

const Login = Loadable(lazy(() => import("../pages/LoginPage")));
const Register = Loadable(lazy(() => import("../pages/Register")));
const EmailVerification = Loadable(
  lazy(() => import("../pages/EmailVerification"))
); 
const Checkout = Loadable(lazy(() => import("../pages/Checkout")));
const OrderSuccess = Loadable(lazy(() => import("../pages/OrderSuccess")));
const MainLayout = Loadable(lazy(() => import("../layouts/MainLayout")));
const BasicLayout = Loadable(lazy(() => import("../layouts/BasicLayout")));
const AccountDashboard = Loadable(
  lazy(() => import("../pages/AccountDashboard"))
);

const MainLayoutHome = PreLoadable(lazy(() => import("../layouts/MainLayout")));
const Home = Loadable(lazy(() => import("../pages/Home")));

const AccountAddress = Loadable(lazy(() => import("../pages/AccountAddress")));
const AccountOrders = Loadable(lazy(() => import("../pages/AccountOrders")));
const AccountOrderDetails = Loadable(
  lazy(() => import("../pages/AccountOrderDetails"))
);
const AccountUserProfile = Loadable(
  lazy(() => import("../pages/AccountUserProfile"))
);

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayoutHome />,
      children: [{ path: "", element: <Home /> }],
    },
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
    {
      path: "/auth",
      element: <ProtectedRoute element={<BasicLayout />} />,
      children: [{ path: "email-verify", element: <EmailVerification /> }],
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
    // Order Success
    {
      path: "secured",
      element: <ProtectedRoute element={<BasicLayout />} />,
      children: [
        {
          path: "ordersuccess",
          element: <OrderSuccess />,
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
          path: "orders",
          element: <AccountOrders />,
        },
        {
          path: "order/:orderid",
          element: <AccountOrderDetails />,
        },
        {
          path: "user-info",
          element: <AccountUserProfile />,
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
