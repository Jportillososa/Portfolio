import React from "react";
import "./Projects.css";
const Projects = () => {
  const FixedMargin = {
    marginTop: 0,
  };
  return (
    <div className="fullpage1">
      <h2 className="h2_1" style={FixedMargin}></h2>

      <div className="project">
        <div className="project_card">
          <img
            className="project_img"
            src="/images/FatCatGuitars.jpg"
            alt="website"
          />
          <h4 className="project-name">FatCat Guitars</h4>
          <a
            href="https://github.com/Jportillososa/EcommerceV2.git"
            className="github_site_link"
          >
            Github
          </a>
          <a
            href="http://fat-cat-guitars2.s3-website-us-east-1.amazonaws.com/"
            className="github_site_link"
          >
            Demo
          </a>
        </div>
        <div className="project_card">
          <div className="product-info">
            <img
              className="project_img"
              src="/images/ComplexRedesign.jpg"
              alt="website"
            />
            <h4 className="project-name">Complex Redesign!!</h4>
            <a
              href="https://github.com/Jportillososa/G9-Redesign.git"
              className="github_site_link"
            >
              Github
            </a>
            <a
              href="http://complex-redesign.s3-website-us-east-1.amazonaws.com/"
              className="github_site_link"
            >
              Demo
            </a>
          </div>
        </div>

        <div className="project_card">
          <div className="product-info">
            <img
              className="project_img"
              src="/images/Learnify.jpg"
              alt="website"
            />
            <h4 className="project-name">Learnify</h4>
            <a
              href="https://github.com/Jportillososa/Hope-Hacks-Group-11"
              className="github_site_link"
            >
              Github
            </a>
            <a href="http://44.204.3.99:4000/" className="github_site_link">
              Demo
            </a>
          </div>
        </div>
        <div className="project_card">
          <div className="product-info">
            <img
              className="project_img"
              src="/images/HopeHacks.jpg"
              alt="website"
            />
            <h4 className="project-name">STAY (Code for Justice)</h4>
            <a
              href="https://github.com/Jportillososa/Code-for-Justice.git"
              className="github_site_link"
            >
              Github
            </a>
            <a
              href="https://main.dvcrm9ymf759o.amplifyapp.com/index.html"
              className="github_site_link"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="project_card">
          <div className="product-info">
            <img
              className="project_img"
              src="/images/TaskTracker.jpg"
              alt="website"
            />
            <h4 className="project-name">Task Tracker!</h4>
            <a
              href="https://github.com/Jportillososa/TASK_LIST.git"
              className="github_site_link"
            >
              Github
            </a>
            <a
              href="https://thawing-meadow-99374.herokuapp.com/"
              className="github_site_link"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="project_card">
          <div className="product-info">
            <img
              className="project_img"
              src="/images/GatewayBali.jpg"
              alt="website"
            />
            <h4 className="project-name">Visit Bali!</h4>
            <a
              href="https://github.com/Jportillososa/GatewaySemanticHtml.git"
              className="github_site_link"
            >
              Github
            </a>
            <a
              href="https://main.dod84ujz2qlkk.amplifyapp.com/"
              className="github_site_link"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
