import React from "react";
import "./Home.css";
import Projects from "./Projects";
function Home() {
  const FixedMargin = {
    marginTop: 0,
  };
  return (
    <div className="fullpage1">
      <div className="home_div">
        <div className="grid_name">
          <h1 className="name_h1">
            <span className="span1">Hello, Im</span>
            <br></br>Jose Portillo.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
