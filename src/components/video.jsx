import React from 'react';
import Fade from 'react-reveal';
import '../styles/video.css';

const Video = () => {
  return (
    <div className="video">
    <Fade>
      <div className="video-title">
        <p className="video-title-top">Check out our latest Youtube video</p>
        <p className="video-title-bottom">Get a look at our business, how we run things and our daily life at the shop</p>
      </div>
      </Fade>
      <div className="video-player">
        <iframe
          src="https://www.youtube.com/embed?max-results=1&controls=1&showinfo=0&rel=1&listType=user_uploads&list=deepinthecity7"
          frameBorder="0"
          allowFullScreen
          title="Youtube Video Trading Post Crystal Lake"
        />
      </div>

    </div>
  );
};

export default Video;
