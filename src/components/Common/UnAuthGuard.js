import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

const UnAuthGuard = () => {
  const { user } = useContext(AuthContext);

  return user.email ? <Navigate to="/" /> : <Outlet />;
};

export default UnAuthGuard;
