import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    textDecoration: 'none',
    color: 'black',
  },
});

const OldBlog = () => (
  <a
    className={css(styles.links)}
    href="https://smallbatchcode.tumblr.com"
    target="_blank"
    rel="noopener noreferrer">
    blog
  </a>
);

export default OldBlog;
