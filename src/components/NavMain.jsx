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
          <li> <a href="#">Link_1</a> </li>
          <li> <a href="#">Link_2</a> </li>
          <li> <a href="#">Link_3</a> </li>
          <li> <a href="#">Link_4</a> </li>
        </ul>
      </nav>
    </div>
  )
}//end NavMain

export default NavMain;
