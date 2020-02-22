import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    textDecoration: 'none',
    color: 'grey',
  },
});

const DailyKos = () => (
  <a
    className={css(styles.links)}
    href="https://helpdesk.dailykos.com/kb/site-features-tips-tricks-and-resources/new-and-improved-lazy-comments-may-2019-updated-july-2019"
    target="_blank"
    rel="noopener noreferrer">
    Daily Kos
  </a>
);

export default DailyKos;
