import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '150%',
  },
});

const HomeLink = () => (
  <a
    className={css(styles.links)}
    href="/"
    rel="noopener noreferrer">
    Home
  </a>
);

export default HomeLink;
