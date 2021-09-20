import React, {useState} from "react";

// utils
import {keyGen} from "../../utils";

//components
import ProjectCard from "./ProjectCard";

//data
import projects from "../../assets/data/projects";

const Portfolio = () => {
    return (
        <section className="portfolioCont">
            {/* eslint-disable-next-line */}
            <a id="portfolio"></a>
            <h4 className="sectionTitle">Portfolio</h4>

            <div className="cardCont">
                {projects &&
                    projects.map((project) => {
                        return <ProjectCard key={keyGen()} project={project} />;
                    })}
            </div>
        </section>
    );
};

export default Portfolio;
