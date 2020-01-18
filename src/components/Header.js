/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(0);

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
            <Link smooth to="#header">
              HOME
            </Link>
            <Link smooth to="#about">
              ABOUT
            </Link>
            <Link smooth to="#skills">
              SKILLS
            </Link>
            <Link smooth to="#projects">
              PROJECTS
            </Link>
            <Link smooth to="#contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
