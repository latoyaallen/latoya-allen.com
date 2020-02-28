import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import {
  MOBILE_PORTRAIT,
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../../lib/breakpoints';

//https://stackoverflow.com/questions/16989585/css-3-slide-in-from-left-transition

const styles = StyleSheet.create({
  TootlipCircle__container: {
    cursor: 'pointer',
    position: 'absolute',
    right: 40,
    [MOBILE_PORTRAIT]: {
      right: 20,
    },
    [MOBILE_LANDSCAPE]: {
      cursor: 'pointer',
      position: 'absolute',
      left: 10,
    },
    [TABLET_PORTRAIT]: {
    },
    [TABLET_LANDSCAPE]: {
    },
    [LAPTOPS]: {
    }
  },
  TootlipCircle__style: {
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

const TootlipCircle = (props) => (
  <div className={css(styles.TootlipCircle__container)}>
    <p className={css(styles.TootlipCircle__style)} onClick={props.onClick}></p>
  </div>
);

export default TootlipCircle;

