import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    textDecoration: 'none',
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 'large',
  },
});

const ProjectsLink = () => (
  <a
    className={css(styles.links)}
    href="/projects"
    target="_blank"
    rel="noopener noreferrer">
    Projects
  </a>
);

export default ProjectsLink;
