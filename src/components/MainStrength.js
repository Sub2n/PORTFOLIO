import React, { useState, useRef, useEffect } from 'react';

const strengths = [
  {
    title: '성실함',
    id: 'strength_sincerity',
    icon:
      'data:image/png;base64,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'
  },
  {
    title: '강한 집중력',
    id: 'strength_concentrated',
    icon: 'https://img.icons8.com/ios/100/000000/developer.png'
  },
  {
    title: '소통 능력',
    id: 'strength_communication',
    icon: 'https://img.icons8.com/ios/100/000000/collaboration.png'
  },
  {
    title: '될 때까지 한다! 끈기',
    id: 'strength_patience',
    icon: 'https://img.icons8.com/ios/100/000000/strength.png'
  }
];

const MainStrength = () => {
  const [currentId, setCurrentId] = useState(strengths[0].id);

  const refs = [
    useRef(strengths[0].id),
    useRef(strengths[1].id),
    useRef(strengths[2].id),
    useRef(strengths[3].id)
  ];
  const onClick = id => {
    setCurrentId(id);
  };

  useEffect(
    () =>
      refs.forEach(
        ref =>
          (ref.current.style.display =
            currentId === ref.current.id ? 'block' : 'none')
      ),
    [currentId, refs]
  );

  return (
    <section id="strength" className="light-background wrap border-bottom">
      <h4 className="center letter-spaced margin50">STRENGTH</h4>
      <div className="margin50 small-wrap">
        <div className="row">
          <div className="small-12 columns">
            <ul className="small-block-grid-1 medium-block-grid-2 large-block-grid-4 appear appeared">
              {strengths.map(({ title, id, icon }) => (
                <li key={title} className="center strengths">
                  <span
                    id={id}
                    onClick={() => onClick(id)}
                    className="block"
                    style={
                      id === 'strength_sincerity'
                        ? {
                            transform: 'translateY(-20px)'
                          }
                        : null
                    }>
                    <div className="font-large margin30">
                      <img
                        style={
                          id === 'strength_sincerity'
                            ? {
                                width: 120,
                                height: 120
                              }
                            : null
                        }
                        src={icon}
                        alt={id}
                      />
                      {/* <i className={`fas ${icon}`}></i> */}
                      {/* <span className="myf-display"></span> */}
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
          className="center small-12 medium-10 large-centered columns">
          <p
            id="strength_sincerity"
            style={{
              display: 'block'
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
              display: 'none'
            }}
            ref={refs[1]}>
            I'm well versed in coding semantic and compliant HTML5, CSS3 and
            Javascript. I build websites that are <strong>responsive</strong>{' '}
            and mobile first for the optimal user experience, using frameworks
            such as Foundation or Twitter Bootstrap. While I like to think that
            my designs are current and cutting edge, I try not to give in to the
            cumbersome drop in performance that often comes with all the bells
            and whistles, preferring to look for solutions that can provide the
            same experience while maintaining <strong>speed</strong> and{' '}
            <strong>site optimization</strong>.
          </p>{' '}
          <p
            id="strength_patience"
            className=""
            style={{
              display: 'none'
            }}
            ref={refs[2]}>
            All websites I create are optimized for search engines to ensure
            that <strong>standard SEO practices</strong> are applied on every
            page and in the fundamental structure of the website. Your website
            will be properly indexed by search engines which will help it{' '}
            <strong>rank higher</strong> in search results right out of the box.
            I also provide other services such as Google Analytics integration,
            setting up local search accounts, creating valid sitemaps and
            submitting your website to major search engines.
          </p>{' '}
          <p
            id="strength_communication"
            className=""
            style={{
              display: 'none'
            }}
            ref={refs[3]}>
            Want to sell <strong>physical goods</strong>,{' '}
            <strong>digital products</strong> or even{' '}
            <strong>online services</strong>? I can get your website up and
            running using WooCommerce or Jigoshop with your preferred payment
            gateways, such as Paypal or Authorize.net. I also have experiences
            with websites that require booking systems or advanced reviewing
            algorithms. I offer additional services such as designing responsive
            email templates, managing newsletter subscriptions, and providing
            consultation on online marketing campaigns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainStrength;
