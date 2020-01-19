import React from 'react';

const MainHeader = () => {
  return (
    <section id="header">
      <div className="header-container full-height">
        <div className="header-background full-height">
          <div></div>
        </div>

        <div className="header-text middle-container">
          <div className="middle">
            <h2 className="margin100 letter-spaced">
              SUBIN
              <br />
              FRONTEND DEVELOPER
            </h2>
            <h6 className="alt-font">
              WEB<i className="myf-dot-single"></i>JAVASCRIPT
              <i className="myf-dot-single"></i>PROGRAMMER
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
