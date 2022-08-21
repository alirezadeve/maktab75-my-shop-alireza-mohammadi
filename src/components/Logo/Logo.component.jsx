// import logo from "../../images/camel-logo.png";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import "../../assets/styles/components/Logo/Logo.icon.scss";
const size = { fontSize: "40px" };
export default function Logo() {
  return (
    <Link
      component={RouterLink}
      to="/"
      sx={{
        textDecoration: "none",
      }}
    >
      <h1 style={size}>ممد شاپ</h1>;
    </Link>
  );
}
