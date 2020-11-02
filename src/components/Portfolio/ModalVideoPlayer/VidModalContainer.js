// modalContainer
// logic file

import React from "react";

// components
import VideoPlayer from "./VideoPlayer";

const VidModalContainer = ({ url, toggleModal, visible }) => {

  return (
    <>
      {visible && (
        <div data-testid="modalCont" className="modalCont">
          <div
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
