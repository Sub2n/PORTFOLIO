import React from 'react';
import MainHeader from './MainHeader';
import MainAbout from './MainAbout';
import MainSkills from './MainSkills';
import MainWorks from './MainWorks';
import MainContact from './MainContact';

// import { Element, scrollSpy, scroller } from 'react-scroll';
import MainStrength from './MainStrength';

const Main = () => {
  // const [currentElem, setCurrentElem] = useState(0);
  // const [scrollTop, setScrollTop] = useState(window.scrollY);

  // const Elems = useRef([
  //   { el: 'mainHeader', pos: 0 },
  //   { el: 'mainAbout', pos: 0 },
  //   { el: 'mainStrength', pos: 0 },
  //   { el: 'mainSkills', pos: 0 },
  //   { el: 'mainWorks', pos: 0 },
  //   { el: 'mainContact', pos: 0 }
  // ]);
  // const refs = useRef([
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null)
  // ]);

  // const onScroll = useCallback(e => {
  //   const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
  //   setScrollTop(scrollTop);
  // }, []);

  // const scrollToDown = () => {
  //   const windowHeight = window.innerHeight;
  //   const nextElem = currentElem + 1;

  //   const position = scrollTop + windowHeight - 100;
  //   if (nextElem >= Elems.current.length) return;

  //   if (
  //     position >= Elems.current[nextElem].pos &&
  //     position - Elems.current[nextElem].pos <
  //       (Elems.current[nextElem].pos - Elems.current[currentElem].pos) / 6
  //   ) {
  //     setCurrentElem(nextElem);
  //     scroller.scrollTo(Elems.current[nextElem].el, {
  //       duration: 1800,
  //       delay: 50,
  //       smooth: true
  //     });
  //   }
  // };

  // const scrollToUp = () => {
  //   const position = scrollTop + 100;
  //   const prevElem = currentElem - 1;
  //   if (prevElem < 0) return;

  //   if (
  //     Elems.current[currentElem].pos >= position &&
  //     Elems.current[currentElem].pos - position <
  //       (Elems.current[currentElem].pos - Elems.current[prevElem].pos) / 6
  //   ) {
  //     setCurrentElem(prevElem);
  //     scroller.scrollTo(Elems.current[prevElem].el, {
  //       duration: 1800,
  //       delay: 50,
  //       smooth: true
  //     });
  //   }
  // };

  // const getCurrentElem = useCallback(() => {
  //   Elems.current = Elems.current.map((elem, index) => {
  //     if (!refs.current[index].current) return elem;
  //     const el = refs.current[index].current.childBindings.domNode;
  //     return {
  //       ...elem,
  //       pos:
  //         refs.current[index].current &&
  //         window.pageYOffset + el.getBoundingClientRect().top
  //     };
  //   });
  //   let tmp = 0;
  //   for (let i = 0; i < Elems.current.length - 1; i++) {
  //     if (
  //       window.scrollY >= Elems.current[i].pos &&
  //       window.scrollY < Elems.current[i + 1].pos
  //     )
  //       tmp = i;
  //   }
  //   setCurrentElem(tmp);
  // }, [refs]);

  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll);
  //   getCurrentElem();
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, [getCurrentElem, onScroll]);

  // const onWheel = e => {
  //   if (e.deltaY >= 0) {
  //     //down
  //     scrollToDown();
  //   } else {
  //     // up
  //     scrollToUp();
  //   }
  // };

  // useEffect(() => {
  //   scrollSpy.update();
  // }, []);

  /* <Element name="mainHeader" ref={refs.current[0]}>
        <MainHeader />
      </Element>
      <Element name="mainAbout" ref={refs.current[1]}>
        <MainAbout />
      </Element>
      <Element name="mainStrengths" ref={refs.current[2]}>
        <MainStrength />
      </Element>
      <Element name="mainSkills" ref={refs.current[3]}>
        <MainSkills />
      </Element>
      <Element name="mainWorks" ref={refs.current[4]}>
        <MainWorks />
      </Element>
      <Element name="mainContact" ref={refs.current[5]}>
        <MainContact />
      </Element> */
  return (
    <div role="main">
      <MainHeader />
      <MainAbout />
      <MainStrength />
      <MainSkills />
      <MainWorks />
      <MainContact />
    </div>
  );
};

export default Main;
