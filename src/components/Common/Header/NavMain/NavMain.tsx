import React from "react";
import { Link } from "react-scroll";

const NavMain: React.FC = () => {
  return (
    <div className="navMainCont" data-testid="navMainCont">
      <nav>
        <ul>
          <li>
            <Link data-testid= 'portfolioLink' to="portfolio" smooth={true} href="#portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link data-testid= 'aboutLink' to="about" smooth={true} href="#about">
              About
            </Link>
          </li>
          <li>
            <Link data-testid= 'skillsLink' to="skills" smooth={true} href="#skills">
              Skills
            </Link>
          </li>
          <li>
            <Link data-testid= 'contactLink' to="contact" smooth={true} href="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}; //end NavMain

export default NavMain;
