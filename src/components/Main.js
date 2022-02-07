import React from 'react';
import MainHeader from './MainHeader';
import MainAbout from './MainAbout';
import MainSkills from './MainSkills';
import MainContact from './MainContact';

import MainStrength from './MainStrength';

const Main = () => {
  return (
    <div role="main">
      <MainHeader/>
      <MainAbout/>
      <MainStrength/>
      <MainSkills/>
      <MainContact/>
    </div>
  );
};

export default Main;
