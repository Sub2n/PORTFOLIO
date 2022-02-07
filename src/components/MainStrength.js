import React, { useCallback, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import sincerity from '../imgs/sincerity.svg';
import concentrated from '../imgs/concentrate.svg';
import communication from '../imgs/communication.svg';
import patience from '../imgs/patience.svg';

const MainStrength = () => {
  const [strengths, setStrengths] = useState([
    {
      title: '성실함',
      id: 'strength_sincerity',
      src: sincerity,
      active: true
    },
    {
      title: '탄탄한 기본기',
      id: 'strength_concentrated',
      src: concentrated,

      active: false
    },
    {
      title: '책임감!',
      id: 'strength_patience',
      src: patience,

      active: false
    },
    {
      title: '커뮤니케이션 능력',
      id: 'strength_communication',
      src: communication,

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
            <ul className="small-block-grid-2 medium-block-grid-2 large-block-grid-4 appear appeared">
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
          className="center small-8 small-centered medium-11 medium-centered large-centered columns">
          <CSSTransition
            in={strengths[0].active}
            timeout={500}
            classNames="desc"
            unmountOnExit
            appear>
            <div id="strength_sincerity" ref={refs[0]}>
              <p>
                전공 수업에 더해 웹 개발 공부를 하고 싶어서 프론트엔드 개발 부트캠프를 수료했습니다. <strong>HTML, CSS, JavaScript 와 Angular</strong> 프레임워크를 배워 프론트엔드 개발자로 입사했고,
                Angular를 사용해 2년 가까이 개발하고 있습니다. 업무 관련해서 RxJS, Three.js 스터디를 진행했습니다. <strong>React</strong> 라이브러리로 개인 프로젝트를 진행했습니다.
              </p>
            </div>
          </CSSTransition>
          <CSSTransition
            in={strengths[1].active}
            timeout={500}
            classNames="desc"
            unmountOnExit
            appear>
            <div id="strength_concentrated" ref={refs[1]}>
              <p>
                컴퓨터 공학을 전공하면서 C, C++, Assembly, Java, JavaScript 언어
                등 다양한 프로그래밍 언어를 사용해 과제를 수행했습니다.
                이러한 경험을 바탕으로{' '}
                <strong>
                  새로운 프로그래밍 언어 및 기술을 빠르게 습득하고 적용할 수
                  있는 역량
                </strong>
                을 보유하고 있습니다. Angular 프레임워크로 약 2년의 실무경험이 있으며 <strong>JavaScript 기본 개념</strong>에 충실해 어떤 프레임워크를 사용하든 개발할 수 있습니다.
              </p>
            </div>
          </CSSTransition>
          <CSSTransition
            in={strengths[2].active}
            timeout={500}
            classNames="desc"
            unmountOnExit
            appear>
            <div id="strength_communication" ref={refs[2]}>
              <p>
                맡은 일에 책임감을 가지고 일합니다. 프론트엔드 개발 특성 상 가장 나중에 일하게 되는데, 마감 기한을 지키기 위해 업무를 병렬적으로 처리합니다. 기능 개발 후 테스트를 거쳐 버그를 최소화하려고 노력합니다. 그래도 버그는 나지만... 늘 테스트의 필요성을 체감합니다.
              </p>
            </div>
          </CSSTransition>
          <CSSTransition
            in={strengths[3].active}
            timeout={500}
            classNames="desc"
            unmountOnExit
            appear>
            <div id="strength_patience" ref={refs[3]}>
              <p>
                잘 듣고, 잘 말합니다. 팀원의 의견을 귀 기울여 듣고, <strong>적극적으로 질문하고 협업</strong>합니다.
                혼자 하는 것보다 여러 사람과 함께할 때
                시너지를 내고 분위기를 활발하게 만드는 성격입니다.
                적절한 대화를 통해 대다수의 문제를 예방하고 해결할 수 있다고 생각합니다.
              </p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </section>
  );
};

export default MainStrength;
