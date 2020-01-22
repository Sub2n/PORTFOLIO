import React, { useState, useEffect } from 'react';

const MainHeader = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    setHeight(window.innerHeight + 3);
  }, []);

  return (
    <section id="header">
      <div className="header-container" style={{ height }}>
        <div className="header-background" style={{ height }}>
          <div style={{ height }}></div>
        </div>

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
      </div>
    </section>
  );
};

export default MainHeader;
