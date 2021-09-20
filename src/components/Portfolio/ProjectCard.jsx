import React, {useState} from "react";

// components
import {VidModalContainer} from "./ModalVideoPlayer";

const ProjectCard = ({toggleModal, visible, project}) => {
    const [descriptionShow, setDescritptionShow] = useState("closed");

    // toggles the 'description' panels for each proj card
    const toggleDescription = () => {
        if (descriptionShow === "closed") {
            setDescritptionShow("open");
        } else {
            setDescritptionShow("closed");
        }
    };

    return (
        <>
            <div className="projectCard">
                <h5>{project.projName}</h5>
                <span
                    className="detailsButton"
                    onClick={() => {
                        toggleDescription();
                    }}
                >
                    <i title="Description" className="fas fa-info-circle"></i>
                </span>
                {/* description panel */}
                <div className={`description ${descriptionShow}`}>
                    <h5>Description</h5>
                    <p>{project.description}</p>
                </div>

                <img src={project.imageUrl} alt={`${project.projName}`} />
                <div className="linksCont">
                    <a
                        href={project.gitHub}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        GitHub
                    </a>

                    {project.liveSite && (
                        <a
                            href={project.liveSite}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Live Site
                        </a>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
