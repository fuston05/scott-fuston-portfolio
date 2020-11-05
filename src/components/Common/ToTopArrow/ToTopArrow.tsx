import React, { useState } from 'react';
import { Link } from 'react-scroll';

const ToTopArrow: React.FC = () => {
  //'to top' arrow render state
  const [scroll, setScroll] = useState<boolean>(false);

  window.addEventListener('scroll', () => {
    //if scrolled down render the up arrow
    if (window.scrollY > 280) {
      //render the up arrow
      setScroll(true);
    } else {
      //hide the up arrow
      setScroll(false);
    }//end if
  });


  return (

    <>
    {/* if scroll then render the arrow */}
      {scroll === true ?
        (<Link to= 'top' smooth= {true}
        href= '#top' title= 'Back To Top' className='topArrowCont'>
          <i className="topArrow far fa-arrow-alt-circle-up"></i>
        </Link>) : null}
    </>
  )
}//end ToTopArrow

export default ToTopArrow;
