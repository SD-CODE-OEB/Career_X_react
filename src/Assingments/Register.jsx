import React, { useState, useContext } from "react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { UserContext } from "../context";

const Register = (props) => {
  const { user, setUser, users, setUsers } = useContext(UserContext);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    const validationErrors = {};
    if (user.name.trim() === "") {
      validationErrors.name = "Name is required";
    } else if (users.find((u) => u.name === user.name)) {
      validationErrors.name = "User Already Exists";
    }
    if (user.email.trim() === "" || !user.email.includes("@")) {
      validationErrors.email = "Enter a valid email";
    } else if (users.find((u) => u.email === user.email)) {
      validationErrors.email = "Email already exists";
    }
    if (user.password.trim() === "") {
      validationErrors.password = "Password is required";
    } else if (user.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }
    if (Object.keys(validationErrors).length <= 0) {
      setUsers((prev) => [...prev, user]);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Container className="App11">
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Name:
          <input
            type="text"
            // value={user.name}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, name: e.target.value }))
            }
            style={{ width: "100%", padding: "5px" }}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </label>
        <br />
        <label style={{ display: "block", marginBottom: "10px" }}>
          Email:
          <input
            type="email"
            // value={user.email}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
            style={{ width: "100%", padding: "5px" }}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </label>
        <br />
        <label style={{ display: "block", marginBottom: "10px" }}>
          Password:
          <input
            type="password"
            // value={user.password}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
            style={{ width: "100%", padding: "5px" }}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </label>
        <br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
          }}
          onClick={handleSubmit}
        >
          Register
        </button>
        <p>
          {" "}
          Already a member?
          <Link to="/login">Sign in</Link>
        </p>
      </div>
    </Container>
  );
};

export default Register;
