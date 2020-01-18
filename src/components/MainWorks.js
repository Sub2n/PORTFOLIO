import React from 'react';
import Fastflix from '../imgs/fastflix.png';
import TEAMdoctor from '../imgs/TEAMdoctor.png';
import IWAM from '../imgs/IWAM.png';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';

const Projects = [
  {
    title: 'Fastflix',
    desc:
      '백엔드, 프론트엔드, iOS 세 팀이 협업하여 진행한 Netflix 클론 프로젝트',
    youtube: 'https://www.youtube.com/embed/WWXNPaqiq7U',
    img: Fastflix,
    url: 'http://www.fastflix.co.kr',
    git: 'https://github.com/final-project-fastflix/Fastflix_FDS'
  },
  {
    title: 'TEAM Doctor',
    desc:
      '환자가 통증 부위와 증상을 고르면 알맞은 진료를 받을 수 있는 병원을 내 위치를 기반으로 지도에 나타내는 서비스',
    youtube: 'https://www.youtube.com/embed/AhntPoo_45g',
    img: TEAMdoctor,
    url: 'https://devpost.com/software/team-doctor',
    git: 'https://github.com/Sub2n/Team-Doctor'
  },
  {
    title: '학생관리앱',
    desc:
      '스쿨 매니저가 클래스 수강생들의 상세정보, 출결, 과제, 시험점수 등을 관리할 수 있는 웹 애플리케이션',
    youtube: 'https://www.youtube.com/embed/MRn1iaD6kZA',
    img: IWAM,
    url: 'https://devpost.com/software/iwam',
    git: 'https://github.com/Sub2n/Fastcampus-Student-Managing'
  }
];

const MainWorks = () => {
  return (
    <section id="projects" className="wrap dark-background">
      <h4 className="center letter-spaced margin50 font-inverse-color ">
        PROJECTS
      </h4>
      <div className="row">
        <div className="small-12 columns">
          <ul className="work-grid medium-block-grid-1 relative font-inverse-color">
            {Projects.map(({ title, desc, youtube, url, img, git }) => (
              <li key={youtube}>
                <div className="work-img">
                  <img src={img} alt={title} />
                </div>
                <div className="work-caption middle-container">
                  <div className="middle">
                    <h2 className="margin10">{title}</h2>
                    <h5 className="margin50">{desc}</h5>
                    <div>
                      <a target="_blank" rel="noopener noreferrer" href={url}>
                        <span className="diagonal"></span>
                        <span className="myf-link"></span>
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href={git}>
                        <span className="diagonal"></span>
                        <IconContext.Provider
                          value={{
                            color: 'black'
                          }}>
                          <FaGithub />
                        </IconContext.Provider>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainWorks;
