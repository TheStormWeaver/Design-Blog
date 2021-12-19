import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

const AuthGuard = () => {
  const { user } = useContext(AuthContext);

  return user.email ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthGuard;
