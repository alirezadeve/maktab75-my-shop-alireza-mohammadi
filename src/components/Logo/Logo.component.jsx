// import logo from "../../images/camel-logo.png";
import { Link } from "react-router-dom";
import "../../assets/styles/components/Logo/Logo.icon.scss";
const size = { fontSize: "40px" };
export default function Logo() {
  return (
    <Link to="/">
      <h1 style={size}>be gaei shadid</h1>;
    </Link>
  );
}
