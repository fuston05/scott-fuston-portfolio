import React, {useEffect, useState} from 'react';

//data
import {frontEndSkills, stylingSkills, backEndSkills} from '../assets/data/skillsData';

//styles
import './Skills.scss';

const Skills = () => {
  const [stSkills, setStSkills]= useState();
  const [feSkills, setFeSkills]= useState();
  const [beSkills, setBeSkills]= useState();

  useEffect(() => {
    setStSkills(stylingSkills);
    setFeSkills(frontEndSkills);
    setBeSkills(backEndSkills);
  }, [stSkills, feSkills, beSkills ])


  const keyGen= () => Math.random() *  (Date.now() * Math.random());

  return (
    <div className= 'skillsCont'>
      {/* eslint-disable-next-line */}
      <a id= 'skills'></a>
      <h4>Skills</h4>
      <ul className= 'styling'>
        {console.log('skills: ', frontEndSkills)}
        {
          stylingSkills.map(skill => {
            return(
              <li key= {keyGen()}>{skill}</li>
            )
          })
        }
      </ul>
      <ul className= 'frontEnd'>
        {
          frontEndSkills.map(skill => {
            return(
            <li key= {keyGen()}>{skill}</li>
            )
          })
        }
      </ul>
      <ul className= 'backEnd'>
        {
          backEndSkills.map(skill => {
            return(
            <li key= {keyGen()}>{skill}</li>
            )
          })
        }
      </ul>
    </div>
  )
}//end Skills

export default Skills;
