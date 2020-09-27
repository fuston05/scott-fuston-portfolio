import React from 'react';

//styles
import './SnackBar.scss';

const SnackBar = ({snackMessage}) => {
  return (
    <div className= 'snackBar hide'>
      <p>{snackMessage}</p>
    </div>
  )
}//end snackBar

export default SnackBar;
