import React from "react";

const ProjectCard = ({project}) => {
    return (
        <>
            <div className="projectCard">
                <h5>{project.projName}</h5>

                <img src={project.imageUrl} alt={`${project.projName}`} />
                <div className="linksCont">
                    {project.gitHub === "private" ? (
                        <p className= 'privateRepo'>Private Repo</p>
                    ) : (
                        <a
                            href={project.gitHub}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            GitHub
                        </a>
                    )}

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
