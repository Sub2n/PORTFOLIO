import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="banner"></div>
      <nav>
        <div className="mobile-nav"></div>
        <ul className="desktop-nav" role="navigation">
          <li>
            <a href="#header">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#skills">SKILLS</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
