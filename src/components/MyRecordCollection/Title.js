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
  Title__container: {
    paddingTop: '11%',
    [MOBILE_PORTRAIT]: {
    },
    [MOBILE_LANDSCAPE]: {
    },
    [TABLET_PORTRAIT]: {
      paddingRight: '3%',
      paddingLeft: '3%',
    },
    [TABLET_LANDSCAPE]: {
      paddingRight: '3%',
      paddingLeft: '3%',
    },
    [LAPTOPS]: {
      paddingRight: '3%',
      paddingLeft: '3%',
    }
  },
  Title__text: {
    fontSize: '11.4em',
    color: 'white',
    textAlign: 'center',
    margin: 0,
    [MOBILE_PORTRAIT]: {
      fontSize: '4.0em',
    },
    [MOBILE_LANDSCAPE]: {
      fontSize: '6.0em',
    },
    [TABLET_PORTRAIT]: {
      fontSize: '11.4em',
    },
    [TABLET_LANDSCAPE]: {
      fontSize: '11.4em',
    },
    [LAPTOPS]: {
      fontSize: '11.4em',
    }
  },
});

const Title = (props) => (
  <div className={css(styles.Title__container)}>
    <p className={css(styles.Title__text)}>{props.title}</p>
  </div>
)

export default Title;
