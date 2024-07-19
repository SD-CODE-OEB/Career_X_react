import React from "react";

export default function App1() {
  const greet = () => {
    alert("Hello Ppl");
  };
  const greetMe = (name) => {
    alert(`Hello ${name}`);
  };
  return (
    <div>
      App1
      <button onClick={greet}>Click me</button>
      <button onClick={() => greetMe("Shoeb")}>Click you</button>
      <input type="text" onChange={(e) => greetMe(e.target.value)} />
    </div>
  );
}
