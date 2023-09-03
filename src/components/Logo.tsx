import { Typography } from "@mui/material";
import React from "react";

const Logo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      WebChat
    </Typography>
  );
};

export default Logo;
