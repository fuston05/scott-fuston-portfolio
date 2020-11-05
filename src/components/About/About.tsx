import React from "react";

const About: React.FC = () => {
  return (
    <section className="aboutCont">
      {/* eslint-disable-next-line */}
      <a id="about"></a>
      <div className="aboutText">
        <h4 className="sectionTitle">About Me</h4>
        <p>
          {" "}
          &nbsp;&nbsp;&nbsp; I am a Full-Stack Web Developer and recent Lambda
          School Graduate. I am skilled in front-end technologies including CSS, HTML, JavaScript, React, Recoil, and much more. As for back-end
          tech, I have experience with REST API, Nodejs, Express, SQLite, and
          PostgreSQL. See my portfolio for full details. I am always learning
          new technologies in an effort to stay on the cutting edge of web
          development. I have a passion for code and the unlimited possibilities
          that it offers me as a "creator".
        </p>
      </div>
    </section>
  );
}; //end About

export default About;
