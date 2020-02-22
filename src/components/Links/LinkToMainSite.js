import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    textDecoration: 'none',
    color: '#40c7c7',
  },
});

const LinkToMainSite = () => (
  <a
    className={css(styles.links)}
    href="/"
    rel="noopener noreferrer">
    Say Hello
  </a>
);

export default LinkToMainSite;
