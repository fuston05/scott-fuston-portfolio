import React from 'react';

//styles
import './Header.scss';

//components
import NavMain from './NavMain';

const Header = () => {
  return (
    <div className='headerCont'>
      <NavMain />
    </div>
  )
}//end Header

export default Header;