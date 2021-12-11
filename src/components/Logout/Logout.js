import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";

import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";

export default function Logout() {
  const navigate = useNavigate();
  const { user, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    if (!user.email) {
      return <Navigate to="/" />;
    }

    authService.Logout(user.accessToken).then(() => {
      logoutUser();
      navigate("/");
    });
  }, []);

  return <Navigate to="/" />;
}
