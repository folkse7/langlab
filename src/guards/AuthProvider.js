import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { showError } from "../service/notify";
const AuthContextForSpecificRoutes = createContext(null);

export const AuthProviderForSpecificRoutes = ({ children }) => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser(null);
      if (location.pathname !== "/") {
        showError("Please login first to access this page");
      }
    }
  }, [user]);

  return (
    <AuthContextForSpecificRoutes.Provider value={{ user }}>
      {currentUser ? children : <Navigate to="/" />}
    </AuthContextForSpecificRoutes.Provider>
  );
};

export const useAuthForSpecificRoutes = () => {
  return useContext(AuthContextForSpecificRoutes);
};
