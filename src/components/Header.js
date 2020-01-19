/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { IconContext } from 'react-icons';
import { GiChainedHeart } from 'react-icons/gi';

const Header = ({ isScroll, setIsScroll }) => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  const onScroll = e => {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    setScroll(scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (scroll >= window.outerHeight / 2 - 50) setShow(true);
    else setShow(false);
  }, [scroll]);

  const onClick = () => {
    if (navOpen) setNavOpen(false);
  };

  return (
    <header id="nav" className={show ? 'show' : null}>
      <div role="banner">
        <IconContext.Provider
          value={{ style: { verticalAlign: 'middle', width: '3em' } }}>
          <GiChainedHeart id="logo" />
        </IconContext.Provider>
        <h1 className="letter-spaced">SUBIN</h1>
      </div>
      <nav>
        <div className="mobile-nav" onClick={() => setNavOpen(() => !navOpen)}>
          <a className="dark">
            <span className="myf-menu"></span>
          </a>
        </div>
        <ul
          className={`desktop-nav ${navOpen ? 'nav-open' : null}`}
          role="navigation">
          <li>
            <Link smooth to="#header" className="dark" onClick={onClick}>
              HOME
            </Link>
            <Link smooth to="#about" className="dark" onClick={onClick}>
              ABOUT
            </Link>
            <Link smooth to="#skills" className="dark" onClick={onClick}>
              SKILLS
            </Link>
            <Link smooth to="#projects" className="dark" onClick={onClick}>
              PROJECTS
            </Link>
            <Link smooth to="#contact" className="dark" onClick={onClick}>
              CONTACT
            </Link>
            <span
              className="scrollButton dark"
              onClick={() => setIsScroll(() => !isScroll)}>
              SCROLL EFFECT <strong>{isScroll ? 'ON' : 'OFF'}</strong>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
