
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    textDecoration: 'none',
    color: 'black',
  },
  patternsContainer: {
    display: 'flex',
  }
});

const FromOldBlog = () => (
  <a
    className={css(styles.links)}
    href="https://smallbatchcode.tumblr.com/post/93767836182/notes-on-design-patterns-in-ppp"
    target="_blank"
    rel="noopener noreferrer">
    Design Pattern Definitions  *
  </a>
);

const Olsen = () => (
  <a
    className={css(styles.links)}
    href="https://github.com/LNA/Olsen_Design_Patterns_in_Ruby"
    target="_blank"
    rel="noopener noreferrer">
    *  Design Pattern Code Examples
  </a>
);

const DesignPatterns = () => (
  <div className={css(styles.patternsContainer)}>
    <div>
      <FromOldBlog />
    </div>
    <div>
      <Olsen />
    </div>
  </div>
);

export default DesignPatterns;
