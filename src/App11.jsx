import React, { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    const validationErrors = {};
    if (name.trim() === "") {
      validationErrors.name = "Name is required";
    }
    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Invalid email format";
    }
    if (password.trim() === "") {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }

    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission logic here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <label style={{ display: "block", marginBottom: "10px" }}>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "5px" }}
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
      </label>
      <br />
      <label style={{ display: "block", marginBottom: "10px" }}>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "5px" }}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </label>
      <br />
      <label style={{ display: "block", marginBottom: "10px" }}>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
