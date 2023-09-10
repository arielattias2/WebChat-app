import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{
        mr: 2,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
        WebChat
      </Link>
    </Typography>
  );
};

export default Logo;
