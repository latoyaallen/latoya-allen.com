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
  IntroQuote__container: {
    [MOBILE_PORTRAIT]: {
      paddingTop: '20%',
      paddingRight: '3%',
      paddingLeft: '3%',
    },
    [MOBILE_LANDSCAPE]: {
      paddingTop: '20%',
      paddingRight: '3%',
      paddingLeft: '3%',
    },
    [TABLET_PORTRAIT]: {
      paddingTop: '20%',
      paddingRight: '5%',
      paddingLeft: '5%',
    },
    [TABLET_LANDSCAPE]: {
      paddingTop: '20%',
      paddingRight: '11%',
      paddingLeft: '11%',
    },
    [LAPTOPS]: {
      paddingTop: '20%',
      paddingRight: '11%',
      paddingLeft: '11%',
    }
  },
  IntroQuote__text: {
    fontSize: '7.4em',
    color: 'white',
    textAlign: 'center',
    margin: 0,
    [MOBILE_PORTRAIT]: {
      fontSize: '4.0em',
    },
    [MOBILE_LANDSCAPE]: {
      fontSize: '4.0em',
    },
    [TABLET_PORTRAIT]: {
      fontSize: '7.4em',
    },
    [TABLET_LANDSCAPE]: {
      fontSize: '7.4em',
    },
    [LAPTOPS]: {
      fontSize: '7.4em',
    }
  },

  IntroQuote__attribution: {
    paddingTop: '11%',
    fontSize: '3.4em',
    color: 'white',
    textAlign: 'center',
    margin: 0,
    [MOBILE_LANDSCAPE]: {
      fontSize: '3.4em',
    },
    [TABLET_PORTRAIT]: {
      fontSize: '3.4em',
    },
    [TABLET_LANDSCAPE]: {
      fontSize: '3.4em',
    },
    [LAPTOPS]: {
      marginLeft: '3%',
      fontSize: '3.4em',
    }
  },
});

const IntroQuote = () => (
  <div className={css(styles.IntroQuote__container)}>
    <p className={css(styles.IntroQuote__text)}>The two things you can't fake are good food and good music.</p>
    <p className={css(styles.IntroQuote__attribution)}>Etta James</p>
  </div>
)

export default IntroQuote;
