import React, { useEffect } from 'react';

const MainHeader = () => {
  useEffect(() => console.log(window), []);
  return (
    <section id="header">
      <div className="header-container full-height">
        <div className="header-background full-height">
          <div></div>
        </div>
        <div className="header-text middle-container">
          <div className="middle">
            <h2 className="margin100 letter-spaced zh-font">
              JavaScript Frontend Developer
            </h2>
            <h6 className="alt-font zh-font">
              WEB<i className="myf-dot-single"></i>PROGRAMMER
              <i className="myf-dot-single"></i>DESIGNER
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
