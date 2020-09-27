import React from 'react';
import Canvas from '../components/Particles';


//styles
import './Header.scss';

//components
import NavMain from './NavMain';

const Header = () => {
  return (
    <div className='headerCont'>
      <NavMain />
      <Canvas />
    </div>
  )
}//end Header

export default Header;