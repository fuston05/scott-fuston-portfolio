import React, {useState} from "react";

// components
import { VidModalContainer } from "./ModalVideoPlayer";

type Project = {
  projName: string;
  imageUrl: string;
  videoUrl?: string;
  description: string;
  gitHub: string;
  liveSite?: string;
}

type CardProps = {
  toggleModal: () => void;
  visible: boolean;
  project: Project;
}

const ProjectCard: React.FC<CardProps> = ({
  toggleModal,
  visible,
  project
}: CardProps) => {

  const [descriptionShow, setDescritptionShow] = useState<'closed' | 'open'>('closed');

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
      {project.videoUrl && <VidModalContainer url= {project.videoUrl} visible= {visible} toggleModal= {toggleModal} />}
      <div className="projectCard">
        <h5>{project.projName}</h5>
        <span
          className="detailsButton"
          onClick={() => {
            toggleDescription()
          }}
        >
          <i title="Description" className="fas fa-info-circle"></i>
        </span>
        {/* description panel */}
        <div className={`description ${descriptionShow}`}>
          <h5>Description</h5>
          <p>
            {project.description}
          </p>
        </div>

        <img src= {project.imageUrl} alt= {`${project.projName}`} />
        <div className="linksCont">
          <a
            href= {project.gitHub}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          {project.videoUrl && <span
            onClick={() => {
              toggleModal();
            }}
            className="videoButton"
          >
            <i className="fas fa-play-circle"></i>
          </span>}
          {project.liveSite && <a
            href= {project.liveSite}
            target="_blank"
            rel="noreferrer noopener"
          >
            Live Site
          </a>}
        </div>
      </div>
    </>
  );
}; //end ProjectCard

export default ProjectCard;
