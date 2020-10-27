import React, {useState} from 'react';

//components
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const [descriptionShow, setDescritptionShow] = useState({
    desc_1: 'closed',
    desc_2: 'closed',
    desc_3: 'closed',
  });

  const videoUrls = {
    storySquad: '/video/SS_overView.mp4',
  }

  // toggles the 'description' panels for each proj card
  const toggleDescription = (desc) => {
    if (descriptionShow[desc] === 'closed') {
      setDescritptionShow({ ...descriptionShow, [desc]: 'open' });
    } else {
      setDescritptionShow({ ...descriptionShow, [desc]: 'closed' });
    }
  }

  // set state back to false for default
  const [visible, setVisible] = useState(false);

  const toggleModal = async () => {
    setVisible(!visible);
  }

  return (
    <section className= 'portfolioCont'>
      {/* eslint-disable-next-line */}
      <a id= 'portfolio'></a>
      <h4 className='sectionTitle'>Portfolio</h4>

      <div className= 'cardCont'>
        <ProjectCard
          toggleModal={toggleModal}
          visible= {visible}
          videoUrls= {videoUrls}
          toggleDescription={toggleDescription}
          descriptionShow={descriptionShow}
        />
      </div>
    </section>
  )
}//end Portfolio

export default Portfolio;