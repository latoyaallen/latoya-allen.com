import React from 'react';
import MetCostumes from '../Links/MetCostumes'
import HomeLink from '../Links/HomeLink'
import MyRecordCollection from '../Links/MyRecordCollection'

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
      <MyRecordCollection />
    </div>
    <div style={projects__homeLink}>
      <HomeLink />
    </div>
  </div>
);

export default Projects;
