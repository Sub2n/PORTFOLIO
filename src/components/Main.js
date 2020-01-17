import React from 'react';
import MainHeader from './MainHeader';
import MainAbout from './MainAbout';
import MainSkills from './MainSkills';
import MainWorks from './MainWorks';
import MainContact from './MainContact';

const Main = () => {
  return (
    <div role="main">
      <MainHeader />
      <MainAbout />
      <MainSkills />
      <MainWorks />
      <MainContact />
    </div>
  );
};

export default Main;
