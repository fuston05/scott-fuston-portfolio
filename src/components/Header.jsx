import React from 'react';
import Particles from '../components/Particles';

//styles
import './Header.scss';


//components
import NavMain from './NavMain';

const Header = () => {
  return (
    <div className='headerCont'>
      <NavMain />
      <Particles />
    </div>
  )
}//end Header

export default Header;