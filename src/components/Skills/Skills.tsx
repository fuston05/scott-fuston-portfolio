import React, { useEffect, useState } from 'react';

// ** utils **
//used in skills map for unique keys
import keyGen from '../../utils/keyGen';
//alternates light and dark BG on skills lists in map below
import alternateColor from '../../utils/alternateColor';

//data
import {
  skills,
  topSkills
} from '../../assets/data/skillsData';

type SkillType=  {
  name: string;
  proficiency: number;
}

const Skills: React.FC = () => {
  //skills from skillsData.js file
  const [tSkills, setTSkills] = useState<SkillType[]>([]);
  const [sk, setSk] = useState<string[]>([]);

  useEffect(() => {
    //set skills state on load
    setSk(skills);
    setTSkills(topSkills);
  }, [tSkills, sk]);

  return (
    <section className='skillsMainCont'>
      {/* eslint-disable-next-line */}
      <a id='skills'></a>

      <h4 className='sectionTitle'>Skills</h4>

      <div className='skills'>
        <span className='skillsHeader'>
          {/* FontAwesome Icon */}
          <i className="fab fa-git-alt skillsIcon"></i>

          <h5 title= 'Comfortable Skills'>Top Skills</h5>
          <i className="fab fa-react skillsIcon"></i>
        </span>

        <div className='skillSection'>
          {
            tSkills && tSkills.map((skill) => {
              //alternates light and dark list BG
              let colorName = alternateColor();
              return (
                <div
                  title= {`Proficiency: ${skill.proficiency}/10`}
                  className={`skill ${colorName}`}
                  key={keyGen()}
                >{`${skill.name}`}
                </div>
              )
            })
          }
        </div>
      </div>

      <br />

      <div className='skills'>
        <span className='skillsHeader'>
          <i className="fab fa-js-square skillsIcon"></i>
          <h5 title= 'Some Experience'>Other Skills</h5>
          <i className="fab fa-node-js skillsIcon"></i>
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

    </section> //end skillsCont
  )
}

export default Skills;
