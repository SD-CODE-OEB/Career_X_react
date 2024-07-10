import React from "react";

export default function App14() {
  let arr = [1, 2, 3, 4, 5];
  // add all els
  let sum = arr.reduce((total, val) => {
    return total + val;
  });
  return <div>{sum}</div>;
}
