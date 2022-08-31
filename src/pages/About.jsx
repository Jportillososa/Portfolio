import React from "react";
import "./About.css";

const About = () => {
  const FixedMargin = {
    marginTop: 0,
  };
  return (
    <div className="fullpage1">
      <h1 style={FixedMargin}>About Me!</h1>
      <div className="about_section">
        <img className="picture_of_me" src="/images/portfolio_picture.png" />
        <div className="about-me">
          I am an aspiring full stack software engineer who finds passion in
          taking up challenges and learning new skills. I am currently an
          apprentice at Road to Hire. As an apprentice I had the opportunity to
          learn many skills, including, both professionally and in web
          development. When im coding, I love seeing my ideas come to life!
        </div>
      </div>
      <div className="skills_section"></div>
    </div>
  );
};

export default About;
