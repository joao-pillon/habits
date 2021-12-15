import { ThisHeader } from "./styles";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <>
      <Link to="/">
        <ThisHeader>{children}</ThisHeader>
      </Link>
    </>
  );
};

export default Header;
