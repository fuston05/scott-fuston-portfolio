import React from "react";

//styles
import "./ProjectCard.scss";

import NASA from "../../assets/images/NASA.png";
import storySquad from "../../assets/images/storySquad.png";
import gameOfLife from "../../assets/images/gameOfLife.png";

// import { Player } from 'video-react';

const ProjectCard = () => {
  return (
    <>
      {/* ********************************** */}

      <div className="projectCard">
        <h5>Story Squad</h5>
        <img src={storySquad} alt="storySquad" />
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
        <div className="description">
          <h5>Description</h5>
          <p>
            This was a Lambda 'Labs' project with a real external stakeholder
            designed to give students a 2 month long, real-world job experience
            all while helping the stakeholder bring their idea to life.
          </p>
        </div>
      </div>

      {/* ********************************** */}

      <div className="projectCard">
        <h5>NASA APOD API</h5>
        <img src={NASA} alt="NASA" />
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
        <div className="description">
          <h5>Description</h5>
          <p>
            This was a Lambda School project that I really liked and decided to
            build it further on my own. Get a daily celestial image straight
            from NASA's APOD API.
          </p>
        </div>
      </div>

      {/* ********************************** */}

      <div className="projectCard">
        <h5>Conway's Game of Life</h5>

        <img src={gameOfLife} alt="gameOfLife" />
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
        <div className="description">
          <h5>Description</h5>
          <p>
            <i>
              Disclaimer: The live site is still in progress. It's not yet
              responsive.
            </i>
            This was a Lambda School Computer Science project that I thought was
            so intriguing that I decided to use it in my portfolio.
          </p>
        </div>
      </div>
    </>
  );
}; //end ProjectCard

export default ProjectCard;
