import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../../lib/breakpoints';

const styles = StyleSheet.create({
  Quote__container: {
    [MOBILE_LANDSCAPE]: {
    },
    [TABLET_PORTRAIT]: {
      paddingBottom: '11%',
    },
    [TABLET_LANDSCAPE]: {
      paddingBottom: '11%',
    },
    [LAPTOPS]: {
      display: 'flex',
      paddingBottom: '11%',
      paddingTop: '20%',
      paddingRight: '11%',
      paddingLeft: '11%',
    }
  },
  Quote__text: {
    fontSize: '7.4em',
    color: 'white',
    textAlign: 'center',
    margin: 0,
    [MOBILE_LANDSCAPE]: {
      fontSize: '2.4em',
    },
    [TABLET_PORTRAIT]: {
      fontSize: '7.4em',
    },
    [TABLET_LANDSCAPE]: {
      fontSize: '7.4em',
    },
    [LAPTOPS]: {
      marginLeft: '3%',
      fontSize: '7.4em',
    }
  },

  Quote__textAttribution: {
    paddingTop: '11%',
    fontSize: '3.4em',
    color: 'white',
    textAlign: 'center',
    margin: 0,
    [MOBILE_LANDSCAPE]: {
      fontSize: '2.0em',
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
const IntroQuote__container = {
  paddingTop: '20%',
  paddingRight: '11%',
  paddingLeft: '11%',
}

const IntroQuote__text = {
  fontSize: '7.4em',
  color: 'white',
  textAlign: 'center',
  margin: 0,
}

const IntroQuote__attribution= {
  paddingTop: '11%',
  fontSize: '3.4em',
  color: 'white',
  textAlign: 'center',
  margin: 0,
}

const IntroQuote = () => (
  <div style={IntroQuote__container}>
    <p style={IntroQuote__text}>The two things you can't fake are good food and good music.</p>
    <p style={IntroQuote__attribution}>Etta James</p>
  </div>
)

export default IntroQuote;
