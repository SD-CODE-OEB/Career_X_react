import React from "react";
import { useState, useEffect } from "react";
// Here, we have two useEffect hooks. The first useEffect hook runs when the runs state changes. The second useEffect hook runs when the wickets state changes.
//the useeffect hook is used to perform side effects in function components. It is similar to componentDidMount, componentDidUpdate, and componentWillUnmount in class components.
export default function App18() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);

  useEffect(() => {
    if (runs > 0) console.log("Good Job");
  }, [runs]);
  useEffect(() => {
    if (wickets > 0) console.log("Better Luck next time!");
  }, [wickets]);

  return (
    <div>
      <button onClick={() => setRuns(runs + 1)}>Runs ({runs})</button>
      <button onClick={() => setWickets(wickets + 1)}>
        Wickets ({wickets})
      </button>
    </div>
  );
}
