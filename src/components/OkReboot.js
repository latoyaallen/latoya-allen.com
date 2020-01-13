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
    href="https://www.ok-reboot.com"
    target="_blank"
    rel="noopener noreferrer">
    Ok-Reboot
  </a>
);

export default OkReboot;
