import React from "react";
import {  Navigate } from "react-router-dom";

const ProtectedLoginRoute = ({ element: Component }) => {
  const isUserAuthenticated = localStorage.getItem("matchedUser");
  if (isUserAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return <Component />;
};

export default ProtectedLoginRoute;
