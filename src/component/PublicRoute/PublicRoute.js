import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PublicRoute = ({
  loginData,
}) => {
  let location = useLocation();
  
  if (loginData) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return <Outlet/>;
};

export default PublicRoute;
