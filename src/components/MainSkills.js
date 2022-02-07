import React, { useState, useEffect, useRef, useCallback } from 'react';
import skillBackground from '../imgs/skill_background.jpg';

const skills = [
  { text: 'JavaScript', per: 90 },
  { text: 'TypeScript', per: 90 },
  { text: 'HTML5', per: 80 },
  { text: 'CSS3', per: 72 },
  { text: 'Angular', per: 80 },
  { text: 'React', per: 60 },
  { text: 'Git', per: 80 },
  { text: 'SQL', per: 55 }
];

// Progress Bar
const MainSkills = () => {
  const [scrollTop, setScrollTop] = useState(window.scrollY);
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
    setScrollTop(scrollTop);
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
            <div className="font-large margin30">
              <span className="myf-display"></span>
            </div>
            <p>
              Angular 프레임워크로 SPA 개발
              <br />
              신규 웹 사이트 개발 및 운영을 통한 유지보수 경험
              <br />
              복잡한 비동기 문제를 RxJS로 해결
              <br />
              React 개인 프로젝트 경험
              {/*Experienced SPA Development using Angular Framework.*/}
              {/*Solved complicated async problems with RxJS.*/}
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
