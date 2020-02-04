import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import BackEnd from './BackEnd';
import MetCostumes from './MetCostumes';
import EmailMe from './EmailMe';

const styles = StyleSheet.create({
  introText__container: {
  },
  nameText: {
    marginLeft: '12%',
    marginTop: 10,
    marginBottom: 20,
    cursor: 'pointer',
    color: 'white',
    '@media (min-width: 600px)': {
      marginLeft: '10%',
    },
    '@media (min-width: 780px)': {
      marginLeft: '9%',
    }
  },
  header__text: {
    marginLeft: '12%',
    marginTop: 20,
    marginBottom: 10,
    width: '75%',
    color: 'white',
    fontSize: '20px',
    '@media (min-width: 600px)': {
      marginLeft: '10%',
    },
    '@media (min-width: 780px)': {
      marginLeft: '9%',
    }
  },
  jobText: {
    marginLeft: '12%',
    marginTop: 20,
    marginBottom: 10,
    width: '75%',
    color: 'grey',
    fontSize: '20px',
    '@media (min-width: 600px)': {
      marginLeft: '10%',
    },
    '@media (min-width: 780px)': {
      marginLeft: '9%',
    }
  },
  mainText: {
    marginLeft: '12%',
    width: '73%',
    marginTop: 40,
    marginBottom: 20,
    color: 'grey',
    fontSize: '20px',
    '@media (min-width: 600px)': {
      marginLeft: '10%',
    },
    '@media (min-width: 780px)': {
      marginLeft: '9%',
    }
  },
});

const IntroText = () => (
  <div className={css(styles.introText__container)}>
    <h1 className={css(styles.nameText)}> Hi, I'm LaToya.</h1>
    <p className={css(styles.header__text)}>I'm a front-end developer based in Brooklyn, NY. </p>
    <p className={css(styles.header__text)}>I work in JavaScript, React, Redux, Rails, Jest, Enzyme and RSpec  at Daily Kos. </p>
    <p className={css(styles.header__text)}>I started of as a {<BackEnd />} in 2013.  I enjoy working on small, impactful teams who care about clean code, utilizing testing frameworks, effective communication, and collaboration. </p>
    <p className={css(styles.header__text)}>If you like art and APIs, take a look at this tiny thing I made: {<MetCostumes />}. </p>
    <p className={css(styles.header__text)}>Want to chat?  {<EmailMe />}. </p>
  </div>
)

 export default IntroText;
