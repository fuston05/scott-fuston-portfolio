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
          School Graduate. I don't even have the words to express how excited I am to begin searching for my dream job! I am so passionate about every aspect of software development. For me It's not just about the code, cross-functional team collaboration is an incredible experience that has a way of bringing people together and building great friendships.
          <br />
          Check out my skills below, and get in touch with me. I look forward to discussing an amazing opportunity with you.
        </p>
      </div>
    </section>
  );
}; //end About

export default About;
