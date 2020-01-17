import React from 'react';

// Progress Bar
const MainSkills = () => {
  return (
    <section id="skills">
      <h4>SKILLS</h4>
      <p>
        Angular 프레임워크와 React 라이브러리를 사용하여 웹 애플리케이션을
        개발합니다. Open RESTful API를 사용해 화면에 지도나 동영상 등을 보여줄
        수 있습니다 (e.g. Google이나 카카오의 맵 API, Youtube API 등).
        자바스크립트와 CSS로 동적인 효과를 구현해 부드럽고 깔끔한 사용자 경험을
        제공하려고 노력합니다.
      </p>
      <div className="row">
        <div className="columns">
          <ul className="grid">
            <li className="center">
              <h5>JavaScript</h5>
            </li>
            <li className="center">
              <h5>HTML</h5>
            </li>
            <li className="center">
              <h5>CSS</h5>
            </li>
            <li className="center">
              <h5>React</h5>
            </li>
            <li className="center">
              <h5>Angular</h5>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainSkills;
