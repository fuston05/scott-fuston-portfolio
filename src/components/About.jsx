import React from 'react';

//styles
import './About.scss';

const About = () => {
  return (
    <div className= 'aboutCont'>
      {/* eslint-disable-next-line */}
      <a id= 'about'></a>
      <div className= 'aboutText'>
        <h4 className= 'sectionTitle'>About Me</h4>
        <p>
          I am a full stack web developer. I am skilled in common front-end technologies such as CSS, HTML, JavaScript, React and many more. As for back-end tech, I have experience with REST Api, as well as GraphQL, from expressJS to Apollo Server and PostgresQL. See my <a href= '#skills' target= '_blank' rel= 'noreferrer noopener'>Skills</a> section full details. I am always learning new technologies in an effort to stay on the cutting edge of web development. I have a passion for code and the unlimited possibilities that it offers me as a "creator".
        </p>
      </div>
    </div>
  )
}//end About

export default About;
