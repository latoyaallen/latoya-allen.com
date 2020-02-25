import React from 'react';
import MetCostumes from '../Links/MetCostumes'
import HomeLink from '../Links/HomeLink'
import MyRecordCollection from '../Links/MyRecordCollection'

const Projects__container = {
  paddingTop: '10%',
}

const Projects__projectLink = {
  marginLeft: '12%',
  marginRight: '12%',
  paddingTop: '3%',
}

const Projects = () => (
  <div style={Projects__container}>
    <div style={Projects__projectLink}>
      <MyRecordCollection />
    </div>
    <div style={Projects__projectLink}>
      <MetCostumes />
    </div>
    <div style={Projects__projectLink}>
      <HomeLink />
    </div>
  </div>
);

export default Projects;
