import React from 'react';
import MetCostumes from '../Links/MetCostumes'
import HomeLink from '../Links/HomeLink'
import MyRecordCollection from '../Links/MyRecordCollection'

const Projects__projectLink = {
  paddingTop: '10%',
  marginLeft: '12%',
  marginRight: '12%',
}

const Projects = () => (
  <div>
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
