import { useState } from "react";

export default function Hook() {
  const [cnt, setCnt] = useState(0);
  // Here we give two of vars in brackets, the first one is the variable and second one is the function, where function returns the first variable's modified value.
  return (
    <>
      <button type="button" onClick={() => setCnt(cnt - 1)}>
        -
      </button>
      {cnt}
      <button type="button" onClick={() => setCnt(cnt + 1)}>
        +
      </button>
    </>
  );
}
