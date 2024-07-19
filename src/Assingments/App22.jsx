import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header";
import App13 from "../Classes/App13";
import Login from "./Login";
import Register from "./Register";
import A01 from "./A01";
import "./App22.css";
// import Footer from "./footer";
//Always give router and routes in the main app file which u r deploying through index.js
// const PATH = process.env.REACT_APP_PATH;
const App22 = () => {
  return (
    <div className="App22">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App13 />} />
          <Route path="/about" element={<App13 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/app" element={<A01 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App22;
