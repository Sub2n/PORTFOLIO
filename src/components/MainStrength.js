import React, { useState, useRef, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';

import sincerity from '../imgs/sincerity.svg';
import concentrated from '../imgs/concentrate.svg';
import communication from '../imgs/communication.svg';
import patience from '../imgs/patience.svg';
import github from '../imgs/git.png';
import github_small from '../imgs/git_small.png';
import tickets from '../imgs/tickets.png';
import tickets_small from '../imgs/tickets_small.png';

const MainStrength = () => {
  const [strengths, setStrengths] = useState([
    {
      title: '성실함',
      id: 'strength_sincerity',
      src: sincerity,
      active: true
    },
    {
      title: '컴퓨터공학 지식',
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
          className="center small-8 small-centered medium-11 medium-centered large-centered columns">
          <CSSTransition
            in={strengths[0].active}
            timeout={500}
            classNames="desc"
            unmountOnExit
            appear>
            <div id="strength_sincerity" ref={refs[0]}>
              <div className="colums sincerity-flex">
                <div className="flex-item-2 item image-box">
                  <picture style={{ width: '100%' }}>
                    <source media="(max-width: 1028px)" srcSet={github} />
                    <img src={github_small} alt="commits" />
                  </picture>
                </div>
                <div className="flex-item-2 item">
                  <p>
                    프론트엔드 개발을 시작한 2019년 3월부터 지금까지 꾸준히
                    Github에 커밋을 하며 여러 가지 기술을 학습하고 있습니다.
                    6개월간 프론트엔드 개발 학원에 다니며 HTML, CSS,
                    JavaScript와 Angular 프레임워크를 공부했습니다. 2019년
                    하반기에는 졸업을 위해서 학교에 다니며 자바스크립트/알고리즘
                    스터디와 학교 공부를 병행했습니다. 1월부터는 React
                    라이브러리를 독학하여 해당 포트폴리오 페이지를 React의
                    함수형 컴포넌트와 Hooks를 사용하여 구현했습니다.
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
              <p>
                컴퓨터 공학을 전공하면서 C, C++, Assembly, Java, JavaScript 언어
                등 다양한 프로그래밍 언어를 사용해 프로그래밍을 수행했습니다.
                어셈블리 프로그래밍부터 HCI, 컴퓨터 그래픽스까지 다양한
                프로그래밍을 했던 경험으로{' '}
                <strong>
                  새로운 프로그래밍 언어 및 기술을 빠르게 습득하고 적용할 수
                  있는 역량
                </strong>
                을 보유하고 있습니다. 또한 기본적인 자료구조, 알고리즘 및
                운영체제 등 컴퓨터 공학 전반에 대한 개념을 이해하고 있습니다.
                컴퓨터 공학 전문 용어에 익숙해서{' '}
                <strong>기술적인 커뮤니케이션이 원활</strong>
                하다는 장점이 있습니다.
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
              <div className="colums sincerity-flex">
                <div className="flex-item-2 item image-box">
                  <picture style={{ width: '100%' }}>
                    <source media="(max-width: 1028px)" srcSet={tickets} />
                    <img src={tickets_small} alt="commits" />
                  </picture>
                </div>
                <div className="flex-item-1 item">
                  <p>
                    잘 듣고, 잘 말합니다. 조별 과제나 팀 프로젝트를 진행할 때
                    항상 모든 팀원의 의견을 귀 기울여 듣고, 나의 의견을
                    상대방에게 <strong>적극적으로 표현</strong>하곤 합니다.
                    공부든 일이든 혼자 하는 것보다 여러 사람과 함께할 때
                    시너지를 내고 분위기를 활발하게 만드는 성격입니다. 백엔드,
                    iOS와 협업한 프로젝트에서 프론트엔드 팀장을 맡아 회의 및
                    발표를 여러 번 경험했고, 그 과정에서 생겼던 크고 작은
                    문제들을 <strong>대화를 통해서 원만하게 해결</strong>
                    했습니다. 또한 다른 개발자들의 이야기를 듣고 소통하고 싶어서
                    꾸준히 개발 컨퍼런스에 참여하고 있습니다.
                  </p>
                </div>
              </div>
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
                어려운 과제에 부딪히더라도 포기하지 않고{' '}
                <strong>될 때까지 하는 끈기</strong>가 있습니다. Angular로
                Netflix 클론 프로젝트를 진행하면서 앱에서 전역적으로 사용하는
                상태를 변경해도 컴포넌트에 반영되지 않는 문제가 있었습니다. 처음
                겪는 상황에 며칠 동안 문제를 해결하지 못하고 헤맸으나 포기하지
                않고 사방에서 해결책을 찾아서 결국 문제를 해결한 경험이
                있습니다. 꾸준하게 노력하면 된다는 것과 Getter, Setter를
                사용하면 언제나 최신 상태를 참조한다는 사실을 깨닫는 계기가
                되었습니다.
              </p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </section>
  );
};

export default MainStrength;
