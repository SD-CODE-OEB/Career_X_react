import { Link } from "react-router-dom";
import { FaDoorOpen, FaPersonBooth } from "react-icons/fa";
import "./header.css";

function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/login">
              <FaPersonBooth />
              Login
            </Link>
          </li>{" "}
          |{" "}
          <li>
            <Link to="/register">
              <FaDoorOpen />
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
