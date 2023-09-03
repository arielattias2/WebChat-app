import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Typography } from "@mui/material";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Typography>Opps</Typography>
        <Typography>
          {isRouteErrorResponse(error)
            ? "This page does not exists"
            : "Error occurred"}
        </Typography>
      </Box>
    </>
  );
};

export default ErrorPage;
