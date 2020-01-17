import React from 'react';

// grid 또는 Bootstrap 이용
const SkillBox = ({ subject, skills }) => {
  return (
    <div
      className={
        subject === 'Front-End' ? 'margin50 small-wrap' : 'small-wrap'
      }>
      <div className="row">
        <h4 className="subject letter-spaced margin50 paddingLeft">
          <span>{subject}</span>
        </h4>
        <div className="small-12 columns">
          <ul className="small-block-grid-2 medium-block-grid-3 large-block-grid-4 appear js-service appeared">
            {skills &&
              skills.map((skill, index) => (
                <li key={index} className="center margin20">
                  <img
                    className="block"
                    src={skill.svg}
                    alt={skill.text}
                    style={
                      skill.text === 'Babel' || skill.text === 'OpenGL'
                        ? { marginTop: '15%' }
                        : null
                    }
                    width={skill.text === 'CSS' ? '85%' : '100%'}
                    height={skill.text === 'CSS' ? '85%' : '100%'}
                  />
                  <span>{skill.text}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
    // <Grid>
    //   {skills &&
    //     skills.map((skill, index) => (
    //       <Grid.Unit
    //         key={index}
    //         style={{ textAlign: 'center' }}
    //         size={{ tablet: 1 / 2, desktop: 1 / 3 }}>
    //         {skill}
    //       </Grid.Unit>
    //     ))}
    // </Grid>
  );
};

export default SkillBox;
