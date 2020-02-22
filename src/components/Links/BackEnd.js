import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    textDecoration: 'none',
    color: 'grey',
    fontWeight: 'bold',
  },
});

const BackEnd = () => (
  <a
    className={css(styles.links)}
    href="https://rubygems.org/gems/minimax_ttt"
    target="_blank"
    rel="noopener noreferrer">
    back-end developer
  </a>
);

export default BackEnd;
