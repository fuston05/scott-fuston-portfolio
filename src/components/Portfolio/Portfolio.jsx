import React, { useState } from "react";

//components
import ProjectCard from "./ProjectCard";

//data
import projects from "../../assets/data/projects";

const Portfolio = () => {
  // set state back to false for default
  const [visible, setVisible] = useState(false);

  const toggleModal = async () => {
    setVisible(!visible);
  };

  // closes video player modal when you click off of the player
  window.addEventListener("click", (e) => {
    if (visible && e.target.classList.contains('modalCont')) {
      toggleModal();
    }
  });

  return (
    <section className="portfolioCont">
      {/* eslint-disable-next-line */}
      <a id="portfolio"></a>
      <h4 className="sectionTitle">Portfolio</h4>

      <div className="cardCont">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={Date.now() * Math.random()}
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
