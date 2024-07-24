import React, { useEffect, useState } from "react";

const App19 = () => {
  const [color, setColor] = useState();
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <div>
      <p style={{ width: "100%", textAlign: "center", padding: "20px 0" }}>
        <input
          type="text"
          onChange={(e) => setColor(e.target.value)}
          placeholder="Change my color"
          style={{
            padding: "10px",
            width: "50%",
            outline: "none",
            border: "1px solid #ccc",
          }}
        />
      </p>
      <p>
        <button
          type="button"
          onClick={(e) => {
            setColor("red");
          }}
        >
          red
        </button>
        <button
          type="button"
          onClick={(e) => {
            setColor("blue");
          }}
        >
          blue
        </button>
      </p>
    </div>
  );
};

export default App19;
