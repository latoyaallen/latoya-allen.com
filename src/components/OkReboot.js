import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    textDecoration: 'none',
    color: 'orange',
  },
});

const OkReboot = () => (
  <a
    className={css(styles.links)}
    href="https://met-costumes.herokuapp.com"
    target="_blank"
    rel="noopener noreferrer">
    Met Costumes
  </a>
);

export default OkReboot;
