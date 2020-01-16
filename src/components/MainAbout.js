import React from 'react';
import SkillBox from './SkillBox';

const frontendSkills = [
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'Angular',
  'TypeScript'
];

const computerEngineeringSkills = [
  'C',
  'C++',
  'MySQL',
  'OpenGL',
  'Linux',
  'Assembly'
];

const MainAbout = () => {
  return (
    <section class="about">
      <div>
        <h4>ABOUT ME</h4>
        <h3>
          안녕하세요, 저는
          <span>
            <span>자바스크립트를 사랑하는</span>
            <span>개발을 좋아하는</span>
            <span>UX를 고려하는</span>
          </span>
          프론트엔드 개발자입니다. 반응형 웹과 PWA 어쩌구
        </h3>
      </div>
      <SkillBox skills={frontendSkills} />
      <SkillBox skills={computerEngineeringSkills} />
    </section>
  );
};

export default MainAbout;
