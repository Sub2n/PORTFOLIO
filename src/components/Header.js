/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [show, setShow] = useState(false);

  const onScroll = e => {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    setScroll(scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (scroll >= window.outerHeight / 2 - 50) setShow(true);
    else setShow(false);
  }, [scroll]);

  return (
    <header id="nav" className={show ? 'show' : null}>
      <div role="banner"></div>
      <nav>
        <div className="mobile-nav">
          <a className="dark">
            <span className="myf-menu"></span>
          </a>
        </div>
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
