import React, { useEffect, useState } from 'react';
import SkillBox from './SkillBox';

import JavaScript from '../imgs/JavaScript.svg';
import HTML from '../imgs/HTML.svg';
import CSS from '../imgs/CSS.png';
import ReactSvg from '../imgs/React.svg';
import Angular from '../imgs/Angular.svg';
import TypeScript from '../imgs/TypeScript.svg';
import webpack from '../imgs/webpack.svg';
import Babel from '../imgs/babel.svg';
import C from '../imgs/C.svg';
import Cpp from '../imgs/C++.svg';
import MySQL from '../imgs/mysql.svg';
import OpenGL from '../imgs/opengl.svg';

const frontendSkills = [
  { text: 'JavaScript', svg: JavaScript },
  { text: 'TypeScript', svg: TypeScript },
  { text: 'HTML', svg: HTML },
  { text: 'CSS', svg: CSS },
  { text: 'React', svg: ReactSvg },
  { text: 'Angular', svg: Angular },
  { text: 'Webpack', svg: webpack },
  { text: 'Babel', svg: Babel }
];

const computerEngineeringSkills = [
  { text: 'C', svg: C },
  { text: 'C++', svg: Cpp },
  { text: 'MySQL', svg: MySQL },
  { text: 'OpenGL', svg: OpenGL }
];

const characters = [
  '소통하는',
  '개발이 즐거운',
  'UX를 생각하는',
  '운동을 좋아하고',
  '지속적으로 성장하고 싶은'
];

const MainAbout = () => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(window.outerWidth);

  useEffect(() => {
    setWidth(window.outerWidth);
    window.addEventListener('resize', () => {
      setWidth(window.outerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setWidth(window.outerWidth);
      });
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index >= characters.length - 1) setIndex(0);
      else setIndex(() => index + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section id="about" className="wrap white-background">
      <div className="row margin100">
        <div className="small-12 columns medium-10 medium-centered  large-7 large-centered center intro">
          <h4 className="letter-spaced margin50">ABOUT ME</h4>
          <h3>
            안녕하세요, 저는
            {width <= 480 ? <br/> : null}
            <span className="rotate-words">
              {characters.map((char, idx) => (
                <span
                  key={idx}
                  className={idx === index ? 'rotate-in active' : 'rotate-out'}>
                  {char}
                </span>
              ))}
            </span>
            <br/>
            프론트엔드 개발자입니다.
            <br/>
            사용하기 좋은 웹을 만들고 싶어 반응형 웹, 접근성에 관심을 가지고 있습니다.
            <br/>
            꾸준히 노력하고 발전하겠습니다.
          </h3>
        </div>
      </div>
      <div className="margin50 small-wrap">
        <div className="row">
          <h4 className="subject letter-spaced margin50 paddingLeft">
            <span>CAREER</span>
          </h4>
          <div className="columns">
            <div className="timeline">
              <div className="event career now">
                <span className="date">NOW</span>
                <h4>AIMMO Frontend 개발</h4>
                <p>
                  <strong>CBT 서비스 종료 대응</strong><br/>
                  개발 환경: Angular<br/>
                  - 기존 기능 이관 및 개선 작업
                </p>
                <p>
                  <strong>인스턴스 썸네일 뷰어 개발</strong><br/>
                  개발 환경: Angular<br/>
                  - 이미지 최적화 (createObjectURL 사용)
                </p>
                <p>
                  <strong>AIMMO Labelers/백오피스 개발</strong><br/>
                  - 플랫폼 사이트 신규 개발 <br/>
                  - 복잡한 권한 체계 구현 <br/>
                  - 운영 및 개선 업무
                </p>
              </div>
              <div className="event career">
                <span className="date">2020.04</span>
                <h4>AIMMO 입사</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="margin50 small-wrap">
        <div className="row">
          <h4 className="subject letter-spaced margin50 paddingLeft">
            <span>EDUCATION</span>
          </h4>
          <div className="columns">
            <div className="timeline">
              <div className="event">
                <span className="date">2020</span>
                <h4>홍익대학교 컴퓨터공학과 졸업</h4>
                <p>
                  C/C++을 기반으로 자료구조, 알고리즘, 기초데이터베이스,
                  운영체제, 네트워크프로그래밍, 네트워크보안, 컴퓨터그래픽스,
                  소프트웨어공학 등을 이수했습니다.
                </p>
              </div>
              <div className="event">
                <span className="date">2019</span>
                <h4>패스트캠퍼스 프론트엔드 개발스쿨 수료</h4>
                <p>
                  6개월 간 프론트엔드 강의를 수강하며 HTML, CSS, JavaScript를
                  공부했습니다. 2번의 해커톤과 팀 프로젝트를 진행했습니다.
                </p>
              </div>
              <div className="event">
                <span className="date">2014</span>
                <h4>보평고등학교 졸업</h4>
                <p>경기도 성남시 분당구 보평고등학교 과학중점반 졸업</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SkillBox subject="Front-End" skills={frontendSkills}/>
      <SkillBox
        subject="Computer Engineering"
        skills={computerEngineeringSkills}
      />
    </section>
  );
};

export default MainAbout;
