import React from 'react'
import Header from './Header';
import IntroText from './IntroText';
import Projects from './Projects';
import { StyleSheet, css } from 'aphrodite';
import {
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../lib/breakpoints';

const styles = StyleSheet.create({
  mainText: {
    marginLeft: '12%',
    width: '73%',
    marginTop: 40,
    marginBottom: 20,
    color: 'black',
    fontSize: '20px',
    '@media (min-width: 600px)': {
      marginLeft: '10%',
    },
    '@media (min-width: 780px)': {
      marginLeft: '9%',
    }
  },
  links: {
    textDecoration: 'none',
  },
});

const Home = () => (
  <div>
    <Header />
    <IntroText />
  </div>
)

export default Home;
