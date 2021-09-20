import React, {useEffect, useState} from "react";

// ** utils **
//used in skills map for unique keys
import keyGen from "../../utils/keyGen";
//alternates light and dark BG on skills lists in map below
import alternateColor from "../../utils/alternateColor";

//data
import {topSkills} from "../../assets/data/skillsData";

const Skills = () => {
    //skills from skillsData.js file
    const [tSkills, setTSkills] = useState([]);

    useEffect(() => {
        //set skills state on load
        setTSkills(topSkills);
    }, [tSkills]);

    return (
        <section className="skillsMainCont">
            {/* eslint-disable-next-line */}
            <a id="skills"></a>

            <h4 className="sectionTitle">TOP SKILLS</h4>

            <div className="skills">
                <span className="skillsHeader">
                    {/* FontAwesome Icon */}
                    <i className="fab fa-git-alt skillsIcon"></i>

                    <h5 title="Comfortable Skills">Top Skills</h5>
                    <i className="fab fa-react skillsIcon"></i>
                </span>

                <div className="skillSection">
                    {tSkills &&
                        tSkills.map((skill) => {
                            //alternates light and dark list BG
                            let colorName = alternateColor();
                            return (
                                <div
                                    title={`Proficiency: ${skill.proficiency}/10`}
                                    className={`skill ${colorName}`}
                                    key={keyGen()}
                                >
                                    {`${skill.name}`}
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
