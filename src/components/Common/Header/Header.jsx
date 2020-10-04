import React from 'react';

//styles
import './Header.scss';

//components
import NavMain from './NavMain';

const Header = () => {
  return (
    <div className='headerCont'>
      <div className='name'><h1>Scott Fuston</h1></div>
      <hr />
      <div className='slogan'>
        <h3>Endless Possibilities </h3>
      </div>
      <NavMain />
    </div>
  )
}//end Header

export default Header;