import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import { UserContext } from "../context";
import "./Login.css";

export default function Login(props) {
  const { user, setUser, users, loggedUser, setLoggedUser, setFlag } =
    useContext(UserContext);
  const [res, setRes] = useState();
  const Navigate = useNavigate();
  const validate = () => {
    if (
      users.find((u) => u.name === user.name && u.password === user.password)
    ) {
      setRes("Access Granted");
      setLoggedUser(user.name);
      setFlag(true);
      console.log(loggedUser);
      setTimeout(Navigate("/app"), 2000);
      // setUsers((prevs) => [...prevs, user]);
    } else {
      setRes("Access Denied");
    }
  };
  return (
    <Container className="login-container">
      <h1 className="head">Login Page</h1>
      <h4 className="info">{res}</h4>
      <p>
        <input
          className="name"
          type="text"
          placeholder="Enter Username"
          onChange={(e) =>
            setUser((prevs) => ({ ...prevs, name: e.target.value }))
          }
        />
      </p>
      <p>
        <input
          className="pwd"
          type="password"
          placeholder="Enter Password"
          onChange={(e) =>
            setUser((prevs) => ({ ...prevs, password: e.target.value }))
          }
        />
      </p>
      <p className="btn-box">
        <button type="submit" onClick={validate} className="btn">
          Login
        </button>
      </p>
      <p>
        Create an account &nbsp;{" "}
        <Link className="link" to="/register">
          Sign up
        </Link>
      </p>
    </Container>
  );
}
