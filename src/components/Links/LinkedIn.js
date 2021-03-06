import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    textDecoration: 'none',
    color: 'grey',
    fontWeight: 'bold',
    fontSize: '1.4em',
  },
});
const LinkedIn = () => (
  <a
    className={css(styles.links)}
    href="https://www.linkedin.com/in/latoyaellisallen/"
    target="_blank"
    rel="noopener noreferrer">
    LinkedIn
  </a>
);

export default LinkedIn;
