import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    textDecoration: 'none',
    color: 'grey',
    fontWeight: 'bold',
    fontSize: '1.9em',
  },
});

const MyRecords = () => (
  <a
    className={css(styles.links)}
    href="/"
    target="_blank"
    rel="noopener noreferrer">
    Coming Soon: My Record Collection
  </a>
);

export default MyRecords;
