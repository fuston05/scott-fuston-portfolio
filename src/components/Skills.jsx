import React, { useEffect, useState } from 'react';

// ** utils **
//used in skills map for unique keys
import keyGen from '../utils/keyGen';
//alternates light and dark BG on skills lists in map below
import alternateColor from '../utils/alternateColor';

//data
import {
  skills,
  topSkills
} from '../assets/data/skillsData';

//styles
import './Skills.scss';

const Skills = () => {
  //skills from skillsData.js file
  const [tSkills, setTSkills] = useState();
  const [sk, setSk] = useState();

  useEffect(() => {
    //set skills state on load
    setSk(skills);
    setTSkills(topSkills);
  }, [tSkills, sk]);

  return (
    <div className='skillsMainCont'>
      {/* eslint-disable-next-line */}
      <a id='skills'></a>

      <h4 className='sectionTitle'>Skills</h4>

      <div className='skills'>
        <span className='skillsHeader'>
          {/* FontAwesome Icon */}
          <i class="fab fa-git-alt skillsIcon"></i>

          <h3>Top Skills</h3>
          <i className="fab fa-react skillsIcon"></i>
        </span>

        <div className='skillSection'>
          {
            tSkills && tSkills.map((skill) => {
              //alternates light and dark list BG
              let colorName = alternateColor();
              return (
                <div
                  className={`skill ${colorName}`}
                  key={keyGen()}
                >{`${skill}`}
                </div>
              )
            })
          }
        </div>
      </div>

      <br />

      <div className='skills'>
        <span className='skillsHeader'>
          <i class="fab fa-js-square skillsIcon"></i>
          <h3>Other Skills</h3>
          <i class="fab fa-node-js skillsIcon"></i>
        </span>

        <div className='skillSection'>
          {
            sk && sk.map((skill) => {
              //alternates light and dark list BG
              let colorName = alternateColor();
              return (
                <div
                  className={`skill ${colorName}`}
                  key={keyGen()}
                >{`${skill}`}
                </div>
              )
            })
          }
        </div>
      </div>

    </div> //end skillsCont
  )
}

export default Skills;
