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
    cursor: 'pointer',
    position: 'absolute',
    right: 40,
    [MOBILE_PORTRAIT]: {
    right: 20,
    },
    [MOBILE_LANDSCAPE]: {
      cursor: 'pointer',
      position: 'absolute',
      left: 40,
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
    backgroundColor: '#40c7c7',
    borderRadius: '50%',

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
    <p className={css(styles.Tootlip__circle)}></p>
  </div>
);

export default Tootlip;

