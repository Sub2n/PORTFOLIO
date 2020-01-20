import React, { useState, useRef } from 'react';

const strengths = [
  { title: '성실함', id: 'strength_sincerity' },
  { title: '강한 집중력', id: 'strength_concentrated' },
  { title: '될 때까지 한다!', id: 'strength_patience' },
  { title: '커뮤니케이션 능력', id: 'strength_communication' }
];

const MainStrength = () => {
  const [currentId, setCurrentId] = useState(strengths[0].id);

  const refs = [
    useRef(strengths[0].id),
    useRef(strengths[1].id),
    useRef(strengths[2].id),
    useRef(strengths[3].id)
  ];

  return (
    <section id="strength" className="light-background wrap border-bottom">
      <h4 className="center letter-spaced margin50">STRENGTH</h4>
      <div className="margin50 small-wrap">
        <div className="row">
          <div className="small-12 columns">
            <ul className="small-block-grid-1 medium-block-grid-2 large-block-grid-4 appear appeared">
              {strengths.map(({ title, id }) => (
                <li key={title} className="center">
                  <span
                    onClick={() => setCurrentId(id)}
                    className="block active">
                    <div className="font-large margin30">
                      <span className="myf-display"></span>
                    </div>
                    <h5>{title}</h5>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div
            id="service_content"
            className="center small-12 medium-10 large-centered columns">
            <p
              id="strength_sincerity"
              style={{
                display: currentId === refs[0].current ? 'block' : 'none'
              }}
              ref={refs[0]}>
              Whether you are looking to build a website from scratch,
              re-designing an existing website, or migrating content management
              systems, I can help get your web application{' '}
              <strong>up and running smoothly</strong>. In addition to using
              popular Content Management Systems like WordPress that are
              applicable to a wide range of industries and needs, I also develop
              in Zend Framework for projects that require custom or unique
              components. My development environment of choice is PHP, MySQL and
              Apache. All websites are structured to ensure the{' '}
              <strong>best SEO practices</strong> and provide the correct files
              and settings for Google or other search engines to crawl
              effectively.
            </p>
            <p
              id="strength_concentrated"
              className=""
              style={{
                display: currentId === refs[1].current ? 'block' : 'none'
              }}
              ref={refs[1]}>
              I'm well versed in coding semantic and compliant HTML5, CSS3 and
              Javascript. I build websites that are <strong>responsive</strong>{' '}
              and mobile first for the optimal user experience, using frameworks
              such as Foundation or Twitter Bootstrap. While I like to think
              that my designs are current and cutting edge, I try not to give in
              to the cumbersome drop in performance that often comes with all
              the bells and whistles, preferring to look for solutions that can
              provide the same experience while maintaining{' '}
              <strong>speed</strong> and <strong>site optimization</strong>.
            </p>{' '}
            <p
              id="strength_patience"
              className=""
              style={{
                display: currentId === refs[2].current ? 'block' : 'none'
              }}
              ref={refs[2]}>
              All websites I create are optimized for search engines to ensure
              that <strong>standard SEO practices</strong> are applied on every
              page and in the fundamental structure of the website. Your website
              will be properly indexed by search engines which will help it{' '}
              <strong>rank higher</strong> in search results right out of the
              box. I also provide other services such as Google Analytics
              integration, setting up local search accounts, creating valid
              sitemaps and submitting your website to major search engines.
            </p>{' '}
            <p
              id="strength_communication"
              className=""
              style={{
                display: currentId === refs[3].current ? 'block' : 'none'
              }}
              ref={refs[3]}>
              Want to sell <strong>physical goods</strong>,{' '}
              <strong>digital products</strong> or even{' '}
              <strong>online services</strong>? I can get your website up and
              running using WooCommerce or Jigoshop with your preferred payment
              gateways, such as Paypal or Authorize.net. I also have experiences
              with websites that require booking systems or advanced reviewing
              algorithms. I offer additional services such as designing
              responsive email templates, managing newsletter subscriptions, and
              providing consultation on online marketing campaigns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainStrength;
