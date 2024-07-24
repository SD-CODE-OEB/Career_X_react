import { Link } from "react-router-dom";
import { UserContext } from "../context";
import { FaDoorClosed, FaDoorOpen, FaPersonBooth } from "react-icons/fa";
import "./header.css";
import { useContext } from "react";

function Header() {
  const { flag } = useContext(UserContext);
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
          {flag === false ? (
            <>
              <li>
                <Link to="/login">
                  <FaPersonBooth />
                  Login
                </Link>
              </li>
              |
              <li>
                <Link to="/register">
                  <FaDoorOpen />
                  Register
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}
          {flag === true ? (
            <>
              |
              <li>
                <Link to="/logout">
                  <FaDoorClosed />
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Header;
