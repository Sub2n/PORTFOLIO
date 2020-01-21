import React, { useState, useRef, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';

import sincerity from '../imgs/sincerity.svg';
import concentrated from '../imgs/concentrate.svg';
import communication from '../imgs/communication.svg';
import patience from '../imgs/patience.svg';
import github from '../imgs/git.png';

const MainStrength = () => {
  const [strengths, setStrengths] = useState([
    {
      title: '성실함',
      id: 'strength_sincerity',
      src: sincerity,
      active: true
    },
    {
      title: '강한 집중력',
      id: 'strength_concentrated',
      src: concentrated,

      active: false
    },
    {
      title: '소통 능력',
      id: 'strength_communication',
      src: communication,

      active: false
    },
    {
      title: '될 때까지 한다! 끈기',
      id: 'strength_patience',
      src: patience,

      active: false
    }
  ]);
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const onClick = useCallback(
    id => {
      const newStrength = strengths.map(str =>
        str.id === id ? { ...str, active: true } : { ...str, active: false }
      );
      setStrengths(newStrength);
    },
    [strengths]
  );

  return (
    <section id="strength" className="light-background wrap border-bottom">
      <h4 className="center letter-spaced margin50">STRENGTH</h4>
      <div className="margin50 small-wrap">
        <div className="row">
          <div className="small-12 columns">
            <ul className="small-block-grid-1 medium-block-grid-2 large-block-grid-4 appear appeared">
              {strengths.map(({ title, id, src, active }) => (
                <li key={title} className="center strengths">
                  <span
                    id={id}
                    onClick={() => onClick(id)}
                    className={active ? 'active' : null}>
                    <div className="font-large margin30">
                      <img
                        src={src}
                        className={active ? 'filter-black' : 'filter-gray'}
                        alt={id}
                      />
                    </div>
                    <h5>{title}</h5>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          id="service_content"
          className="center small-12 large-centered columns">
          <CSSTransition
            in={strengths[0].active}
            timeout={500}
            classNames="desc"
            unmountOnExit
            appear>
            <div id="strength_sincerity" ref={refs[0]}>
              <div className="colums sincerity-flex">
                <div className="flex-item-1 item">
                  <img src={github} alt="commits" />
                </div>
                <div className="flex-item-2 item">
                  <p>
                    어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
                  </p>
                </div>
              </div>
            </div>
          </CSSTransition>
          <CSSTransition
            in={strengths[1].active}
            timeout={500}
            classNames="desc"
            unmountOnExit
            appear>
            <div id="strength_concentrated" ref={refs[1]}>
              집중력
            </div>
          </CSSTransition>
          <CSSTransition
            in={strengths[2].active}
            timeout={500}
            classNames="desc"
            unmountOnExit
            appear>
            <div id="strength_communication" ref={refs[2]}>
              소통능력
            </div>
          </CSSTransition>
          <CSSTransition
            in={strengths[3].active}
            timeout={500}
            classNames="desc"
            unmountOnExit
            appear>
            <div id="strength_patience" ref={refs[3]}>
              끈기
            </div>
          </CSSTransition>
        </div>
      </div>
    </section>
  );
};

export default MainStrength;
