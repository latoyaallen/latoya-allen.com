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

const MetCostumes = () => (
  <a
    className={css(styles.links)}
    href="/metcostumes"
    target="_blank"
    rel="noopener noreferrer">
    Met Costumes: A Simple Query to The Metropolitan Museum of Art Collection API
  </a>
);

export default MetCostumes;
