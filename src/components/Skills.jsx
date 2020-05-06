import React, {useState} from 'react';

//data
import skillsData from '../assets/data/skillsData.json';

//styles
import './Skills.scss';

const Skills = () => {
  const [skillsList, setSkillsList]= useState(skillsData);

  return (
    <div className= 'skillsCont'>
      {/* eslint-disable-next-line */}
      <a id= 'skills'></a>
      <h4 className= 'sectionTitle'>Skills</h4>
      { 
        skillsList.keys().map(skill => {
          return(
            <div key= { Math.Random() * (Date.now()*Math.random()) }>
              <p>{skill}</p>
            </div>
          )
        })
      }
    </div>
  )
}//end Skills

export default Skills;
