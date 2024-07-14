import React from "react";
// this is because if we give in index page result = {John: 10, Doe: 20}, then we can access it in App15 as props.result["John"]
export default function App15(props) {
  return <div>Score of John is {props.result["John"]}</div>;
}
