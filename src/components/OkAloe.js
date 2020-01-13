import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    textDecoration: 'none',
    color: 'orange',
  },
});

const OkAloe = () => (
  <a
    className={css(styles.links)}
    href="http://ok-aloe.com"
    target="_blank"
    rel="noopener noreferrer">
    Ok-Aloe
  </a>
);

export default OkAloe;
