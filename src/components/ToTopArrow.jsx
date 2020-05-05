import React, { useState } from 'react';

//styles
import './ToTopArrow.scss';

const ToTopArrow = () => {
  //'to top' arrow render state
  const [scroll, setScroll] = useState(false);

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
        (<a href= '#top' title= 'Back To Top' className='topArrowCont'>
          <i className="topArrow far fa-arrow-alt-circle-up"></i>
        </a>) : null}
    </>
  )
}//end ToTopArrow

export default ToTopArrow;
