import React from 'react';
import { Link } from 'react-scroll';

//styles
import './NavMain.scss';

const NavMain = () => {
  return (
    <div className='navMainCont'>
      {/* <div className='name'><h1>Scott Fuston</h1></div>
      <hr />
      <div className='slogan'>
        <h3>Endless Possibilities </h3>
      </div> */}
      <nav>
        <ul>
          <li>
            <Link to='portfolio' smooth= {true}href="#portfolio">Portfolio
            </Link>
          </li>
          <li>
            <Link to='about' smooth= {true} href="#about">About
            </Link>
          </li>
          <li>
            <Link  to='skills' smooth= {true}href="#skills">Skills
            </Link>
          </li>
          {/* <li> <a href="#resume">Resume</a> </li> */}
          <li>
            <Link to='contact' smooth= {true} href="#contact">Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}//end NavMain

export default NavMain;
