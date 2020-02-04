import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    textDecoration: 'none',
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 'large',
  },
});

const Blog = () => (
  <a
    className={css(styles.links)}
    href="https://latoyaallen.blog"
    target="_blank"
    rel="noopener noreferrer">
    Blog
  </a>
);

export default Blog;
