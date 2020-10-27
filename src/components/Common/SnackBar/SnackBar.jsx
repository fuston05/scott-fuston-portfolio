import React from 'react';

const SnackBar = ({snackMessage}) => {
  return (
    <div className= 'snackBar hide'>
      <p>{snackMessage}</p>
    </div>
  )
}//end snackBar

export default SnackBar;
