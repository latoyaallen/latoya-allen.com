import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    textDecoration: 'none',
    color: 'black',
  },
});

const OldGitHub = () => (
  <a
    className={css(styles.links)}
    href="https://github.com/lna"
    target="_blank"
    rel="noopener noreferrer">
    old GitHub
  </a>
);

export default OldGitHub;
