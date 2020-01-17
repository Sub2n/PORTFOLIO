import React from 'react';

import Grid from 'styled-components-grid';

// grid 또는 Bootstrap 이용
const SkillBox = ({ skills }) => {
  return (
    <Grid>
      {skills &&
        skills.map((skill, index) => (
          <Grid.Unit
            key={index}
            style={{ textAlign: 'center' }}
            size={{ tablet: 1 / 2, desktop: 1 / 3 }}>
            {skill}
          </Grid.Unit>
        ))}
    </Grid>
  );
};

export default SkillBox;
