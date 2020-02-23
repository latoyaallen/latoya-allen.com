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
    href="/myrecordcollection"
    rel="noopener noreferrer">
    My Record Collection
  </a>
);

export default MyRecords;
