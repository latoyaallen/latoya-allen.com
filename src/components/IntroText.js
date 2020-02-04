import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import BackEnd from './BackEnd';
import MetCostumes from './MetCostumes';
import EmailMe from './EmailMe';

const styles = StyleSheet.create({
  introText__container: {
    paddingTop: '5%',
  },
  nameText: {
    marginLeft: '12%',
    marginTop: 10,
    marginBottom: 20,
    cursor: 'pointer',
    color: 'white',
    '@media (min-width: 600px)': {
      marginLeft: '30%',
    },
    '@media (min-width: 780px)': {
      marginLeft: '30%',
    }
  },
  header__text: {
    fontWeight: 'bold',
    marginLeft: '12%',
    marginTop: 20,
    marginBottom: 10,
    width: '75%',
    color: 'black',
    fontSize: '20px',
    '@media (min-width: 600px)': {
      marginLeft: '30%',
    },
    '@media (min-width: 780px)': {
      marginLeft: '30%',
    }
  },
});

const IntroText = () => (
  <div className={css(styles.introText__container)}>
    <h1 className={css(styles.nameText)}> Hi, I'm LaToya.</h1>
    <p className={css(styles.header__text)}>I'm a front-end developer based in Brooklyn, NY.</p>
    <p className={css(styles.header__text)}>I work in React, Redux, Rails, Jest, Enzyme and RSpec at Daily Kos. </p>
    <p className={css(styles.header__text)}>Want to chat?  {<EmailMe />}.</p>
  </div>
)

 export default IntroText;
