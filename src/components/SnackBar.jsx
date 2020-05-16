import React from 'react';

//styles
import './SnackBar.scss';

const SnackBar = ({snackMessage='what the poop is all this crap'}) => {
  return (
    <div className= 'snackBar'>
      <p>{snackMessage}</p>
      <span className= 'closeSnack'>X</span>
    </div>
  )
}//end snackBar

export default SnackBar;
