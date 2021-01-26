import React from "react";
import Particles from "react-tsparticles";

//components
import NavMain from "./NavMain";

// config
import { options as particlesConfig } from './particlesConfig';

const Header: React.FC = () => {
  return (
    <header className="headerCont">
      <div className="name">
        <h1>Scott Fuston</h1>
      </div>
      <hr />
      <div className="slogan">
        <h3><i>#not-a-designer</i></h3>
      </div>
      <NavMain />

      <Particles
        id="tsparticles"
        options= {particlesConfig}
      />
    </header>
  );
}; //end Header

export default Header;
