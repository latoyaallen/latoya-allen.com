import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    textDecoration: 'none',
    color: 'grey',
    fontWeight: 'bold',
  },
});

const EmailMe = () => (
  <a
    className={css(styles.links)}
    href="mailto:me@allen-labs.com"
    target="_blank"
    rel="noopener noreferrer">
    Send me an email
  </a>
);

export default EmailMe;
