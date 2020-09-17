import React, { useEffect, useState } from 'react';

// ** utils **
//used in skills map for unique keys
import keyGen from '../utils/keyGen';
//alternates light and dark BG on skills lists in map below
import alternateColor from '../utils/alternateColor';

//data
import {
  frontEndSkills,
  stylingSkills,
  backEndSkills,
  otherSkills
} from '../assets/data/skillsData';

//styles
import './Skills.scss';

const Skills = () => {
  //skills from skillsData.js file
  const [stSkills, setStSkills] = useState();
  const [feSkills, setFeSkills] = useState();
  const [beSkills, setBeSkills] = useState();
  const [othSkills, setOthSkills] = useState();

  useEffect(() => {
    //set skills state on load
    setStSkills(stylingSkills);
    setFeSkills(frontEndSkills);
    setBeSkills(backEndSkills);
    setOthSkills(otherSkills);
  }, [stSkills, feSkills, beSkills, othSkills]);

  return (
    <div className='skillsCont'>
      {/* eslint-disable-next-line */}
      <a id='skills'></a>

      <h4 className='sectionTitle'>Skills</h4>

      <div className='topSkills'>
        <h3>Proficient Skills</h3>
        <span>
          'React | JavaScript | HTML/CSS | Python '
        </span>
      </div>

      <div className='medSkills'>
        <h3>Intermediate Skills(<span>Used a several times</span>)</h3>
        'Redux | NodeJs | Express | RESTful API | Ant Design'
      </div>

      <div className='lowSkills'>
        <h3>Beginner Skills(<span>Used once or twice</span>)</h3>
        'GraphQL | Apollo-Server | URQL | GSAP'
      </div>


    </div> //end skillsCont
  )
}

export default Skills;
