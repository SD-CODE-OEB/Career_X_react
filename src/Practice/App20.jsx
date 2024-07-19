import { useState } from "react";
import "./App20.css";

export default function App20() {
  const [info, setInfo] = useState(0);
  const context = [
    [
      "Welcome to the Home Page of a React app.",
      "This app is being done for example of useStates.",
      "We are going to see this Work.",
    ],
    [
      "I am a Frontend Developer Providing various works.",
      "I make Webpages i.e., UI of WebPage.",
      "I offer my services at a minimum cost.",
    ],
    [
      "I live in The city of Nawabs - Hyderabad.",
      "Currently, I am pursuing B.tech in Computer Science Engg.",
      "My Life is peaceful enough, when I don't commit grave sins.",
    ],
  ];
  return (
    <div className="container">
      <h1>Welcome to The React Application</h1>
      <div className="btns">
        <button
          type="button"
          className={info === 0 ? "active" : ""}
          onClick={() => setInfo(0)}
        >
          Home
        </button>
        <button
          type="button"
          className={info === 1 ? "active" : ""}
          onClick={() => setInfo(1)}
        >
          Services
        </button>
        <button
          type="button"
          className={info === 2 ? "active" : ""}
          onClick={() => setInfo(2)}
        >
          About
        </button>
      </div>
      <div className="display">
        <ul>
          {context[info].map((x, idx) => (
            <li key={idx}>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
