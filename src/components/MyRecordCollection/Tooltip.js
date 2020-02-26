import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import {
  MOBILE_PORTRAIT,
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../../lib/breakpoints';

const styles = StyleSheet.create({
  Tootlip__container: {
    [MOBILE_PORTRAIT]: {
    },
    [MOBILE_LANDSCAPE]: {
    },
    [TABLET_PORTRAIT]: {
    },
    [TABLET_LANDSCAPE]: {
    },
    [LAPTOPS]: {
    }
  },
  Tootlip__circle: {
    height: '25px',
    width: '25px',
    backgroundColor: 'blue',
    borderRadius: '50%',;
    display: 'inline-block',
    [MOBILE_PORTRAIT]: {
    },
    [MOBILE_LANDSCAPE]: {
    },
    [TABLET_PORTRAIT]: {
    },
    [TABLET_LANDSCAPE]: {
    },
    [LAPTOPS]: {
    }
  },
});

const Tootlip = (props) => (
  <div className={css(styles.Tootlip__container)}>
    <p className={css(styles.Tootlip__circle)}>By Category</p>
  </div>
);

export default Tootlip;

