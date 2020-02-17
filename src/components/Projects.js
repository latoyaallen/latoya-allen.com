import React from 'react';
import MetCostumes from './MetCostumes'
import HomeLink from './HomeLink'
import MyRecords from './MyRecords'

const projects__metCostumes = {
  textAlign: 'center',
  paddingTop: '5%',
}

const projects__homeLink = {
  textAlign: 'center',
  paddingTop: '5%',
}

const Projects = () => (
  <div>
    <div style={projects__metCostumes}>
      <MetCostumes />
    </div>
    <div style={projects__homeLink}>
      <MyRecords />
    </div>
    <div style={projects__homeLink}>
      <HomeLink />
    </div>
  </div>
);

export default Projects;
