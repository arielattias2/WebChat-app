import React from "react";
import useAuth from "../auth/useAuth";
import { Navigate } from "react-router-dom";
import { Typography } from "@mui/material";

const HomePage = () => {
  const { currentUser } = useAuth();

  if (!currentUser.isAuthenticated)
    return <Navigate to="/login" replace={true} />;

  return (
    <>
      <div>HomePage</div>
      <Typography variant="h1">{currentUser.user?.usreName}</Typography>
    </>
  );
};

export default HomePage;
