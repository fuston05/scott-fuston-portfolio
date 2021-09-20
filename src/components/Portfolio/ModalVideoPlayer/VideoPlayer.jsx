// VideoPlayer
import React from "react";

type VideoProps = {
  url: string;
}

const VideoPlayer: React.FC<VideoProps> = ({ url }) => {

  const extension = url.slice(url.indexOf('.')+1);
  
  return (
    <>
      <video
        className= 'video'
        // also takes props: autoPlay
        controls
        playsInline
      >
        <source
          src={url}
          type={`video/${extension}`}
        />

        Your browser does not support the video tag.
      </video>
    </>
  )
};

export default VideoPlayer;