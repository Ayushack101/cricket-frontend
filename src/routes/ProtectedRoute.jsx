import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  if (!localStorage.getItem("user")) {
    return <Navigate to="/auth/signin" replace={true} />;
  }
  return element;
};

export default ProtectedRoute;
