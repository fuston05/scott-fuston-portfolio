import React, {useEffect, useState} from 'react';

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
  const [stSkills, setStSkills]= useState();
  const [feSkills, setFeSkills]= useState();
  const [beSkills, setBeSkills]= useState();
  const [othSkills, setOthSkills]= useState();

  useEffect(() => {
    setStSkills(stylingSkills);
    setFeSkills(frontEndSkills);
    setBeSkills(backEndSkills);
    setOthSkills(otherSkills);
  }, [stSkills, feSkills, beSkills, othSkills ]);


  const keyGen= () => Math.random() *  (Date.now() * Math.random());

  return (
    <div className= 'skillsCont'>
      {/* eslint-disable-next-line */}
      <a id= 'skills'></a>

      <h4 className= 'sectionTitle'>Skills</h4>

      <div className= 'skills'>
        <div className= 'styling'>
          <span className= 'skillsIcon'><i class="fab fa-css3"></i></span>
          <h5>Styling Technologies</h5>
          <ul>
            {
              stSkills && stSkills.map(skill => {
                return(
                  <li key= {keyGen()}>{skill}</li>
                )
              })
            }
          </ul>
        </div>
  
        <div className= 'frontEnd'>
          <span className= 'skillsIcon'><i class="fab fa-react"></i></span>
          <h5>Front-End Technologies</h5>
          <ul>
            {
              feSkills && feSkills.map(skill => {
                return(
                <li key= {keyGen()}>{skill}</li>
                )
              })
            }
          </ul>
        </div>
  
        <div className= 'backeEnd'>
          <span className= 'skillsIcon'><i class="fab fa-node-js"></i></span>
          <h5>Back-End Technologies</h5>
          <ul>
            {
              beSkills && beSkills.map(skill => {
                return(
                <li key= {keyGen()}>{skill}</li>
                )
              })
            }
          </ul>
        </div>
        <div className= 'otherSkills'>
          <span className= 'skillsIcon'><i class="fas fa-code-branch"></i></span>
          <h5>Other Skills</h5>
          <ul>
            {
              othSkills && othSkills.map(skill => {
                return(
                <li key= {keyGen()}>{skill}</li>
                )
              })
            }
          </ul>
          </div>
      </div>
    </div> //end skillsCont
  )
}

export default Skills;
