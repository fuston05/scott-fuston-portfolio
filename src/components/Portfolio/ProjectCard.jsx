import React from "react";

//styles
import "./ProjectCard.scss";

import NASA from "../../assets/images/NASA.png";
import storySquad from "../../assets/images/storySquad.png";
import gameOfLife from "../../assets/images/gameOfLife.png";

const ProjectCard = () => {
  return (
    <>
      {/* ********************************** */}

      <div className="projectCard">
        <h5>Story Squad</h5>
        <a
          title="View Large Image"
          href={storySquad}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={storySquad} alt="storySquad" />
        </a>
        <div className="linksCont">
          <a
            href="https://github.com/Lambda-School-Labs/Labs26-StorySquad-FE-TeamC"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          <a
            href="https://c.storysquad.dev/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Live Site
          </a>
        </div>
      </div>

      {/* ********************************** */}

      <div className="projectCard">
        <h5>NASA APOD API</h5>
        <a
          title="View Large Image"
          href={NASA}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={NASA} alt="NASA" />
        </a>
        <div className="linksCont">
          <a
            href="https://github.com/fuston05/nasa-photo-of-the-day"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          <a
            href="https://nasa-apod-fun.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Live Site
          </a>
        </div>
      </div>

      {/* ********************************** */}

      <div className="projectCard">
        <h5>Conway's Game of Life</h5>
        <a
          title="View Large Image"
          href={gameOfLife}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={gameOfLife} alt="gameOfLife" />
        </a>
        <div className="linksCont">
          <a
            href="https://github.com/fuston05/conways-game-of-life"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          <a
            href="https://conwaygameoflife.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Live Site
          </a>
        </div>
      </div>
    </>
  );
}; //end ProjectCard

export default ProjectCard;
