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
  '자바스크립트를 사랑하는',
  '개발을 좋아하는',
  'UX 향상을 고려하는',
  '몸과 마음이 건강한'
];

const MainAbout = () => {
  const [index, setIntex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index >= characters.length - 1) setIntex(0);
      else setIntex(() => index + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section id="about" className="wrap white-background">
      <div className="row margin50">
        <div className="small-12 columns large-7 large-centered center">
          <h4 className="letter-spaced margin50">ABOUT ME</h4>
          <h3>
            안녕하세요, 저는
            <span className="rotate-words">
              {characters.map((char, idx) => (
                <span
                  key={idx}
                  className={idx === index ? 'rotate-in active' : 'rotate-out'}>
                  {char}
                </span>
              ))}
            </span>
            <br />
            프론트엔드 개발자입니다.
            <br />
            사용하기 좋은 웹을 만들고 싶어 반응형 웹, PWA 등에 관심을 가지고
            있습니다.
            <br />
            성실함과 집중력을 갖췄습니다.
          </h3>
        </div>
      </div>
      <SkillBox subject="Front-End" skills={frontendSkills} />
      <SkillBox
        subject="Computer Engineering"
        skills={computerEngineeringSkills}
      />
    </section>
  );
};

export default MainAbout;
