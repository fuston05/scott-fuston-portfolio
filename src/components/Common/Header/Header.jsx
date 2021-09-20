import React from "react";

//components
import NavMain from "./NavMain";

const Header: React.FC = () => {
  return (
    <header className="headerCont">
      <div className="name">
        <h1>Scott Fuston</h1>
      </div>
      <hr />
      <div className="slogan">
        <h3>Full Stack Web Developer</h3>
      </div>
      <NavMain />
    </header>
  );
}; //end Header

export default Header;
