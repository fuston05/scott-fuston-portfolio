import React from 'react';

//styles
import './NavMain.scss';

const NavMain = () => {
  return (
    <div className= 'navMainCont'>
      <div className= 'name'><h1>Scott Fuston</h1></div>
      <hr/>
      <div className= 'slogan'><h3>Endless Possibilities</h3></div>
      <nav>
        <ul>
          <li> <a href="#">Portfolio</a> </li>
          <li> <a href="#">About</a> </li>
          <li> <a href="#">Contact</a> </li>
        </ul>
      </nav>
    </div>
  )
}//end NavMain

export default NavMain;
