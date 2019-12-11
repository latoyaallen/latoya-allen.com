import React from 'react'
import Chat from './Chat';
import Header from './Header';
import IntroText from './IntroText';
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
  botContainer: {
    marginLeft: '3%',
    lineHeight: '1.8',
    color: '#f28269',
    [MOBILE_LANDSCAPE]: {
      marginLeft: '20%',
      paddingRight: '11%',
      color: 'black',
    },
    [TABLET_PORTRAIT]: {
      marginRight: '11.5%',
      marginLeft: '30%',
      color: 'pink',
    },
    [TABLET_LANDSCAPE]: {
      marginRight: '11%',
      marginLeft: '30%',
      color: 'blue',
    },
    [LAPTOPS]: {
      marginRight: '12%',
      marginLeft: '40%',
      color: 'green',
    }
  },

});

const Home = () => (
  <div>
    <Header />
    <IntroText />
    <div className={css(styles.botContainer)}>
      <Chat />
    </div>
  </div>
)

export default Home;
