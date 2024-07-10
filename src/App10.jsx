import "./App10.css";
import { useState } from "react";
import App13 from "./App13";

export default function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [res, setRes] = useState();

  const validate = () => {
    if (userName.toLowerCase() === "shoeb" && password === "sd123") {
      return setRes(<App13 name={userName} />);
    } else {
      setRes("Access Denied");
    }
  };
  return (
    <div className="container">
      <h1 className="head">Login Page</h1>
      <h4 className="info">{res}</h4>
      <p>
        <input
          className="name"
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUserName(e.target.value)}
        />
      </p>
      <p>
        <input
          className="pwd"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <button type="submit" onClick={validate} className="btn">
        Login
      </button>
    </div>
  );
}
