import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#40c7c7',
    fontSize: '1.4em',
  },
});

const ProjectsLink = () => (
  <a
    className={css(styles.links)}
    href="/projects"
    rel="noopener noreferrer">
    Projects
  </a>
);

export default ProjectsLink;
