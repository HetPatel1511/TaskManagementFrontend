import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({
  loginData,
}) => {
  let location = useLocation();
  
  if (!loginData) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet/>;
};

export default ProtectedRoute;
