// modalContainer
// logic file

import React from "react";

// components
import VideoPlayer from "./VideoPlayer";

const VidModalContainer = ({ url, toggleModal, visible }) => {

  return (
    <>
      {visible && (
        // allows to click anywhere off of the video player to close it.
        <div onClick={(e) => {
          toggleModal(e);
        }} data-testid="modalCont" className="modalCont">
          <div
            // click the 'X' to also close video player
            onClick={(e) => {
              toggleModal(e);
            }}
            className="modalClose"
          >
            X
          </div>
          <VideoPlayer
            url={url} />
        </div>
      )}
    </>
  );
};

export { VidModalContainer };
