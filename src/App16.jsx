import React from "react";
//Here , we define a function and value in index.js and pass it to App16 as props. We then call the function with the value and display the result. such as fn = {(val) => val * 2} and val = {5}.
export default function App16(props) {
  let result = props.fn(props.val);
  return <div>Result is {result}</div>;
}
