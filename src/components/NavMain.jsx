import React from 'react';

//styles
import './NavMain.scss';

const NavMain = () => {
  return (
    <div className= 'navMainCont'>
      <div className= 'name'><h1>Scott Fuston</h1></div>
      <hr/>
      <div className= 'slogan'><h3>~ Endless Possibilities ~</h3></div>
      <nav>
        <ul>
          <li> <a href="#portfolio">Portfolio</a> </li>
          <li> <a href="#about">About</a> </li>
          <li> <a href="#skills">Skills</a> </li>
          <li> <a href="#resume">Resume</a> </li>
          <li> <a href="#contact">Contact</a> </li>
        </ul>
      </nav>
    </div>
  )
}//end NavMain

export default NavMain;
