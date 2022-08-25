// import React from "react";
// import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import Home from "./pages/Home";
// import Stars from "./App";
// import Contact from "./pages/Contact";

// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Layout from "./pages/Layout";
// // import Home from "./pages/Home";
// // import Blogs from "./pages/Blogs";
// // import Contact from "./pages/Contact";
// // import NoPage from "./pages/NoPage";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <App />
//     <Home />
//     <Contact />
//   </>
// );

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
