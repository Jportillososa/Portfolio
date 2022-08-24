import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/Home.jsx";
import Stars from "./App";
import Contact from "./pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Home />
    <Contact />
  </>
);
