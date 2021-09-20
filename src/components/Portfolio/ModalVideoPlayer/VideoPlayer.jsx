// VideoPlayer
import React from "react";

const VideoPlayer = ({url}) => {
    const extension = url.slice(url.indexOf(".") + 1);

    return (
        <>
            <video
                className="video"
                // also takes props: autoPlay
                controls
                playsInline
            >
                <source src={url} type={`video/${extension}`} />
                Your browser does not support the video tag.
            </video>
        </>
    );
};

export default VideoPlayer;
