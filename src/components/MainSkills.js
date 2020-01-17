import React, { useState, useEffect, useRef, useCallback } from 'react';
import skillBackground from '../imgs/skill_background.jpg';

import ReactDOM from 'react-dom';

const skills = [
  { text: 'JavaScript', per: 90 },
  { text: 'TypeScript', per: 75 },
  { text: 'HTML5', per: 74 },
  { text: 'CSS3', per: 72 },
  { text: 'Angular', per: 80 },
  { text: 'React', per: 60 },
  { text: 'Git', per: 80 },
  { text: 'SQL', per: 55 }
];

// Progress Bar
const MainSkills = () => {
  const [scrollTop, setScroppTop] = useState(window.scrollY);
  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const onScroll = useCallback(e => {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    setScroppTop(scrollTop);
  }, []);

  const checkPercentage = useCallback(() => {
    const windowHeight = window.innerHeight;
    refs.forEach(ref => {
      const elemTop =
        window.pageYOffset + ref.current.getBoundingClientRect().top;
      const position = scrollTop + windowHeight - 100;
      if (position >= elemTop) {
        ref.current.percent = true;
      }
    });
  }, [refs, scrollTop]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    if (scrollTop > 0) checkPercentage();
  }, [checkPercentage, scrollTop]);

  return (
    <section
      id="skills"
      className="fixed-background"
      style={{ backgroundImage: `url(${skillBackground})` }}>
      <div className="light-overlay wrap">
        <div className="row margin100">
          <div className="small-12 medium-8 medium-centered columns center">
            <h4 className="letter-spaced margin50">SKILLS</h4>
            <p>
              Angular 프레임워크와 React 라이브러리를 사용하여 웹 애플리케이션을
              개발합니다. Open RESTful API를 사용해 화면에 지도나 동영상 등을
              보여줄 수 있습니다 (e.g. Google이나 카카오의 맵 API, Youtube API
              등). 자바스크립트와 CSS로 동적인 효과를 구현해 부드럽고 깔끔한
              사용자 경험을 제공하려고 노력합니다.
            </p>
          </div>
        </div>
        <div className="row">
          {skills.map((skill, index) => (
            <div
              key={skill.text}
              className="small-12 medium-6 columns margin20 skill">
              <div
                className="right"
                style={{ marginRight: `${100 - skill.per}%` }}>
                {skill.per}%
              </div>
              <div className="margin10">{skill.text}</div>
              <div className="bar">
                <div
                  className="bar-fill"
                  ref={refs[index]}
                  data-percent={skill.per}
                  style={{
                    width: `${
                      refs[index].current && refs[index].current.percent
                        ? skill.per
                        : 0
                    }%`
                  }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSkills;
