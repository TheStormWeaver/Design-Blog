import { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", {
    _id: "",
    email: "",
    accessToken: "",
    photo: "",
    displayName: "",
    bio: "",
  });

  const loginUser = (authData) => {
    setUser({ ...authData });
  };

  const updateProfileData = (profileData) => {
    setUser({ ...user, ...profileData });
  };

  function logoutUser() {
    setUser({
      _id: "",
      email: "",
      accessToken: "",
      photoUrl: "",
      displayName: "",
      bio: "",
    });
  }

  return (
    <AuthContext.Provider
      value={{ user, loginUser, logoutUser, updateProfileData }}
    >
      {children}
    </AuthContext.Provider>
  );
};
