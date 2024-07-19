import React, { useState } from "react";

export default function App12() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [res, setRes] = useState();
  const show = () => {
    const res = `This is ${name} of Age ${age}.`;
    setRes(res);
  };
  return (
    <div>
      <h1>Welcome To React App</h1>
      <div className="container">
        <p>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </p>
        <button type="submit" onClick={show}>
          Submit
        </button>
        <h2>{res}</h2>
      </div>
    </div>
  );
}
