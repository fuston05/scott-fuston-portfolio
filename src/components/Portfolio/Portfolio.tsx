import React, {useState} from "react";

// utils
import {keyGen} from "../../utils";

//components
import ProjectCard from "./ProjectCard";

//data
import projects from "../../assets/data/projects";

const Portfolio: React.FC = () => {
    // set state back to false for default
    const [visible, setVisible] = useState<boolean>(false);

    const toggleModal = () => {
        setVisible(!visible);
    };

    return (
        <section className="portfolioCont">
            {/* eslint-disable-next-line */}
            <a id="portfolio"></a>
            <h4 className="sectionTitle">Portfolio</h4>

            <div className="cardCont">
                {projects &&
                    projects.map((project) => {
                        return (
                            <ProjectCard
                                key={keyGen()}
                                toggleModal={toggleModal}
                                visible={visible}
                                project={project}
                            />
                        );
                    })}
            </div>
        </section>
    );
}; //end Portfolio

export default Portfolio;
