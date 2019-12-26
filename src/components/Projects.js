import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../lib/breakpoints';

const styles = StyleSheet.create({
  projectsContainer: {
    marginLeft: '3%',
    lineHeight: '1.8',
    color: '#f28269',
    [MOBILE_LANDSCAPE]: {
      marginLeft: '20%',
      paddingRight: '11%',
      color: 'black',
    },
    [TABLET_PORTRAIT]: {
      marginRight: '11.5%',
      marginLeft: '30%',
      color: 'pink',
    },
    [TABLET_LANDSCAPE]: {
      marginRight: '11%',
      marginLeft: '30%',
      color: 'blue',
    },
    [LAPTOPS]: {
      marginRight: '12%',
      marginLeft: '40%',
      color: 'green',
    }
  },
});



const Projects = () => (
  <div className={css(styles.projectsContainer)}>
    <h1> Projects </h1>
  </div>
)

export default Projects;
