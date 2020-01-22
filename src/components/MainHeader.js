import React, { useState, useEffect, useRef } from 'react';
import subinVideo from '../imgs/subinVideo.mp4';

const MainHeader = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const Video = useRef(null);
  const filter = 'win16|win32|win64|mac|macintel';

  useEffect(() => {
    if (navigator.platform) {
      const platform = navigator.platform.toLowerCase();
      if (filter.indexOf(platform) < 0) {
        Video.current.classList.add('mobile');
      }
    }
  }, [Video]);

  useEffect(() => {
    setHeight(window.innerHeight + 3);
  }, []);

  // const onLoad = () => {
  //   setActive(true);
  // };

  return (
    <section id="header">
      <div className="header-container" style={{ height }}>
        <div className="header-text middle-container">
          <div className="middle">
            <h2 className="margin100 letter-spaced">
              SUBIN
              <br />
              FRONTEND DEVELOPER
            </h2>
            <h6 className="alt-font">
              WEB<i className="myf-dot-single"></i>
              JAVASCRIPT
              <i className="myf-dot-single"></i>
              PROGRAMMER
            </h6>
          </div>
        </div>
        <div className="header-background" style={{ height }}>
          <video
            autoPlay
            muted
            loop
            id="myVideo"
            className="mvclip"
            ref={Video}>
            <source src={subinVideo} type="video/mp4" />
          </video>
          {/* <iframe
            id="mvclip"
            className="mvclip"
            onLoad={onLoad}
            ref={Video}
            frameBorder="0"
            allowFullScreen="1"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/4XuvPX5otSA?playlist=4XuvPX5otSA&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;fs=0&amp;rel=0&amp;wmode=transparent&amp;enablejsapi=1&amp;origin=https%3A%2F%2Flinepluscorp.com&amp;widgetid=1"></iframe> */}
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
