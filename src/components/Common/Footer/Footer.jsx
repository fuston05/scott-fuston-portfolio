import React from 'react';

import {Canvas} from '../../Common';

//styles
import './Footer.scss';

const Footer = () => {
  return (
    <div className= 'footerCont'>
      <div className= 'copyCont'><span>&copy;</span> <p>Copyright Scott Fuston 2020</p></div>
      {/* Canvas= ParticlesJs */}
      {/* <Canvas /> */}
    </div>
  )
}//end Footer

export default Footer;
