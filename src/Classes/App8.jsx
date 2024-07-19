import React from "react";
import { useState } from "react";

export default function App8() {
  const [val, setVal] = useState("none");
  const [res, setRes] = useState("none");
  const result = () => {
    setRes(val);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter Anything"
        onChange={(e) => setVal(e.target.value)}
      />
      <button type="button" onClick={result}>
        Show
      </button>
      <p>{res}</p>
    </>
  );
}
