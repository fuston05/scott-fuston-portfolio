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

            <div className='skills'>
                <div className='skill styling'>
                    {/* FontAwesome Icon */}
                    <span className=' skillsIcon'><i className="fab fa-css3"></i></span>
                    <h5>Styling Technologies</h5>
                    <ul>
                        {
                            stSkills && stSkills.map((skill) => {
                                //alternates light and dark list BG
                                let colorName = alternateColor();
                                return (
                                    <li
                                        className={colorName}
                                        key={keyGen()}>{skill}</li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className=' skill frontEnd'>
                    {/* FontAwesome Icon */}
                    <span className='skillsIcon'><i className="fab fa-react"></i></span>
                    <h5>Front-End Technologies</h5>
                    <ul>
                        {
                            feSkills && feSkills.map(skill => {
                                //alternates light and dark list BG
                                let colorName = alternateColor();
                                return (
                                    <li
                                        className={colorName}
                                        key={keyGen()}>{skill}</li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className=' skill backeEnd'>
                    {/* FontAwesome Icon */}
                    <span className='skillsIcon'><i className="fab fa-node-js"></i></span>
                    <h5>Back-End Technologies</h5>
                    <ul>
                        {
                            beSkills && beSkills.map(skill => {
                                //alternates light and dark list BG
                                let colorName = alternateColor();
                                return (
                                    <li
                                        className={colorName}
                                        key={keyGen()}>{skill}</li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className=' skill otherSkills'>
                    {/* FontAwesome Icon */}
                    <span className='skillsIcon'><i className="fas fa-code-branch"></i></span>
                    <h5>Other Skills</h5>
                    <ul>
                        {
                            othSkills && othSkills.map(skill => {
                                //alternates light and dark list BG
                                let colorName = alternateColor();
                                return (
                                    <li
                                        className={colorName}
                                        key={keyGen()}>{skill}</li>
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
