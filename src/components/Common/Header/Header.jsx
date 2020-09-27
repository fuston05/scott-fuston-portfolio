import React from 'react';
import {Canvas} from '../../Common';


//styles
import './Header.scss';

//components
import NavMain from './NavMain';

const Header = () => {
  return (
    <div className='headerCont'>
      <NavMain />
      {/* Canvas= ParticlesJs */}
      {/* <Canvas /> */}
    </div>
  )
}//end Header

export default Header;