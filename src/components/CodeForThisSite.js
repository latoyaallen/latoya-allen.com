import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    textDecoration: 'none',
    color: 'orange',
  },
});

const CodeForThisSite = () => (
  <a
    className={css(styles.links)}
    href="https://github.com/latoyaallen/latoya-allen.com"
    target="_blank"
    rel="noopener noreferrer">
    Code For This Site
  </a>
);

export default CodeForThisSite;
