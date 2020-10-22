import React from 'react';

//styles
import './Portfolio.scss';

//components
import ProjectCard from './ProjectCard';

const Portfolio = () => {

  return (
    <section className= 'portfolioCont'>
      {/* eslint-disable-next-line */}
      <a id= 'portfolio'></a>
      <h4 className= 'sectionTitle'>Portfolio</h4>

      <div className= 'cardCont'>
        <ProjectCard />
      </div>
    </section>
  )
}//end Portfolio

export default Portfolio;