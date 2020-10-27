import React from "react";

// assets 
import NASA from "../../assets/images/NASA.png";
import storySquad from "../../assets/images/storySquad.png";
import gameOfLife from "../../assets/images/gameOfLife.png";

const ProjectCard = ({
  toggleDescription,
  descriptionShow
}) => {
  

  return (
    <>
      {/* ********************************** */}
      <div className="projectCard">

        <h5>Story Squad</h5>
        <span className= 'detailsButton'
          onClick={() => {toggleDescription('desc_1')}}
        >
          <i className="fas fa-info-circle"></i>
        </span>
        {/* description panel */}
        <div className= {`description ${descriptionShow.desc_1}`}>
          <h5>Description</h5>
          <p>
            This was a Lambda 'Labs' project with a real external stakeholder
            designed to give students a 2 month long, real-world job experience
            all while helping the stakeholder bring their idea to life.
          </p>
        </div>
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
      </div>

      {/* ********************************** */}

      <div className="projectCard">
        <h5>NASA APOD API</h5>
        <span className= 'detailsButton'
          onClick={() => {toggleDescription('desc_2')}}
        >
          <i className="fas fa-info-circle"></i>
        </span>
        {/* description panel */}
        <div className= {`description ${descriptionShow.desc_2}`} >
          <h5>Description</h5>
          <p>
            This was a Lambda School project that I really liked and decided to
            build it further on my own. Get a daily celestial image straight
            from NASA's APOD API.
          </p>
        </div>

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
      </div>

      {/* ********************************** */}

      <div className="projectCard">
        <h5>Conway's Game of Life</h5>
        <span className= 'detailsButton'
          onClick={() => {toggleDescription('desc_3')}}
        >
          <i className="fas fa-info-circle"></i>
        </span>
        {/* description panel */}
        <div className= {`description ${descriptionShow.desc_3}`}>
          <h5>Description</h5>
          <p>
            <i>
              Disclaimer: The focus of this project was the algorithm, not the styles or responsiveness.
            </i><br />
            This was a Lambda School Computer Science project that I thought was
            so intriguing that I decided to use it in my portfolio.
          </p>
        </div>

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
      </div>
    </>
  );
}; //end ProjectCard

export default ProjectCard;
