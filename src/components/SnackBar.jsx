import React from 'react';

//styles
import './SnackBar.scss';

const SnackBar = ({snackMessage='Message sent successfully!'}) => {
  return (
    <div className= 'snackBar hide'>
      <p>{snackMessage}</p>
      <span className= 'closeSnack'>X</span>
    </div>
  )
}//end snackBar

export default SnackBar;
