import React from 'react';

//styles
import './ProjectCard.scss';

import NASA from '../../assets/images/NASA.png';
import comingSoon from '../../assets/images/comingSoon.jpg';

const ProjectCard = () => {
  return (
    <>
      <div className='projectCard'>
        <h5>NASA APOD API</h5>
        <a
          title='View Large Image'
          href={NASA}
          target='_blank'
          rel='noreferrer noopener'
        ><img src={NASA} alt="NASA" /></a>
        <div className='linksCont'>
          <a
            href="https://github.com/fuston05/nasa-photo-of-the-day"
            target='_blank'
            rel='noreferrer noopener'
          >View My Code
            </a>
          <a
            href="https://nasa-apod-fun.netlify.app/"
            target='_blank'
            rel='noreferrer noopener'
          >Live Site
            </a>
        </div>
      </div>

      {/* ********************************** */}

      <div className='projectCard'>
        <h5>More to Come!</h5>
        <a
          title='View Large Image'
          href={comingSoon}
          target='_blank'
          rel='noreferrer noopener'
        ><img src={comingSoon} alt="coming soon" /></a>
        <div className='linksCont'>
          <a
            href="#portfolio"
            // target= '_blank'
            rel='noreferrer noopener'
          >GitHub
      </a>
          <a
            href="#portfolio"
            // target= '_blank'
            rel='noreferrer noopener'
          >Live Site
      </a>
        </div>
      </div>

      {/* ********************************** */}

      <div className='projectCard'>
        <h5>More to Come!</h5>
        <a
          title='View Large Image'
          href={comingSoon}
          target='_blank'
          rel='noreferrer noopener'
        ><img src={comingSoon} alt="coming soon" /></a>
        <div className='linksCont'>
          <a
            href="#portfolio"
            // target= '_blank'
            rel='noreferrer noopener'
          >GitHub
      </a>
          <a
            href="#portfolio"
            // target= '_blank'
            rel='noreferrer noopener'
          >Live Site
      </a>
        </div>
      
      </div>
    </>
  )
}//end ProjectCard

export default ProjectCard;
