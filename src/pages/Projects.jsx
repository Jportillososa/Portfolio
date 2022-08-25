import React from "react";
import "./Projects.css";
const Projects = () => {
  const FixedMargin = {
    marginTop: 0,
  };
  return (
    <div className="fullpage1">
      <h2 className="h2_1" style={FixedMargin}>
        Projects
      </h2>

      <div className="project">
        <div className="project_card">
          <img
            className="project_img"
            src="/images/FatCatGuitars.jpeg"
            alt="website"
          />
          <h4 className="project-name">FatCat Guitars</h4>
          <button>Github</button>
          <button>Visit Site</button>
        </div>
        <div className="project_card">
          <div className="product-info">
            <img
              className="project_img"
              src="/images/ComplexRedesign.jpeg"
              alt="website"
            />
            <h4 className="project-name">Complex Redesign</h4>
            <button>Github</button>
            <button>Visit Site</button>
          </div>
        </div>

        <div className="project_card">
          <div className="product-info">
            <img
              className="project_img"
              src="/images/Learnify.jpeg"
              alt="website"
            />
            <h4 className="project-name">Learnify</h4>
            <button>Github</button>
            <button>Visit Site</button>
          </div>
        </div>
        <div className="project_card">
          <div className="product-info">
            <img
              className="project_img"
              src="/images/HopeHacks.jpeg"
              alt="website"
            />
            <h4 className="project-name">STAY (Code for Justice)</h4>
            <button>Github</button>
            <button>Visit Site</button>
          </div>
        </div>
        <div className="project_card">
          <div className="product-info">
            <img
              className="project_img"
              src="/images/TaskTracker.jpeg"
              alt="website"
            />
            <h4 className="project-name">Task Tracker!</h4>
            <button>Github</button>
            <button>Visit Site</button>
          </div>
        </div>
        <div className="project_card">
          <div className="product-info">
            <img
              className="project_img"
              src="/images/GatewayBali.jpeg"
              alt="website"
            />
            <h4 className="project-name">Visit Bali!</h4>
            <button>Github</button>
            <button>Visit Site</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
