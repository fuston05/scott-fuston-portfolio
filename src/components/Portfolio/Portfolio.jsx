import React, {useState} from 'react';

//components
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const [descriptionShow, setDescritptionShow] = useState({
    desc_1: 'closed',
    desc_2: 'closed',
    desc_3: 'closed',
  });

  // toggles the 'description' panels for each proj card
  const toggleDescription = (desc) => {
    if (descriptionShow[desc] === 'closed') {
      setDescritptionShow({ ...descriptionShow, [desc]: 'open' });
    } else {
      setDescritptionShow({ ...descriptionShow, [desc]: 'closed' });
    }
  }

  return (
    <section className= 'portfolioCont'>
      {/* eslint-disable-next-line */}
      <a id= 'portfolio'></a>
      <h4 className= 'sectionTitle'>Portfolio</h4>

      <div className= 'cardCont'>
        <ProjectCard
          toggleDescription={toggleDescription}
          descriptionShow={descriptionShow}
        />
      </div>
    </section>
  )
}//end Portfolio

export default Portfolio;