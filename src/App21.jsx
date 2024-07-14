import React from "react";

export default function App21() {
  const containerStyles = {
    color: "skyblue",
    backgroundColor: "Black",
    height: "100vh",
    padding: "5px 20px",
  };
  const headStyle = {
    fontSize: "2.5rem",
    fontStyle: "italic",
    textDecoration: "double underline overline",
    border: "5px double skyblue",
    width: "max-content",
    padding: "10px 0",
  };
  const greetStyle = {
    color: "white",
    fontSize: "20px",
    fontFamily: "serif",
    fontStyle: "oblique",
    letterSpacing: "3px",
    textAlign: "center",
  };
  let greet = "";
  const date = new Date();
  if (date.getHours() >= 0 && date.getHours() <= 12) {
    greet = "Good Morning!!";
    greetStyle.color = "red";
  } else if (date.getHours() <= 18) {
    greet = `Good Afternoon!!`;
    greetStyle.color = "green";
  } else if (date.getHours() < 24) {
    greet = "Good Evening!!";
    greetStyle.color = "blue";
  }

  return (
    <div>
      <div className="container" style={containerStyles}>
        <h1 className="heading" style={headStyle}>
          Welcome To My Page
        </h1>
        <h3>Color Changing Code</h3>
        <div className="content" style={greetStyle}>
          {greet}
        </div>
      </div>
    </div>
  );
}
