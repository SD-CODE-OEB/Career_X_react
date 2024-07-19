import { useState } from "react";
export default function App9() {
  const [length, setLen] = useState();
  const [brd, setBrd] = useState();
  const [shape, setShape] = useState("not yet a shape");
  const [area, setArea] = useState(0);
  const calc = () => {
    setArea(length * brd);
    if (length === brd) {
      setShape("Square");
    } else {
      setShape("Rectangle");
    }
  };
  return (
    <div>
      <h1>Area Of Rectangle</h1>
      <p>
        <label htmlFor="length">Length</label>
        <input
          type="text"
          id="length"
          onChange={(e) => setLen(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="breadth">Breadth</label>
        <input
          type="text"
          id="breadth"
          onChange={(e) => setBrd(e.target.value)}
        />
      </p>
      <button type="button" onClick={calc}>
        Find Area
      </button>
      <p>
        Area is {area} and it is a {shape}.
      </p>
    </div>
  );
}
