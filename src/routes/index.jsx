import { Navigate, useRoutes } from "react-router-dom";
import MainRoutes from "./MainRoutes";

const Routes = () => {
  return useRoutes([
    MainRoutes,
    { path: "*", element: <Navigate to={"/"} replace /> },
  ]);
};

export default Routes;
