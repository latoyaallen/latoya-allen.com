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

const GitHub = () => (
  <a
    className={css(styles.links)}
    href="https://github.com/latoyaallen"
    target="_blank"
    rel="noopener noreferrer">
    GitHub
  </a>
);

export default GitHub;
