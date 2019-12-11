import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import OldBlog from './OldBlog';
import OldGitHub from './OldGitHub';
import BackEnd from './BackEnd';

const styles = StyleSheet.create({
  nameText: {
    marginLeft: '12%',
    marginTop: 10,
    marginBottom: 20,
    cursor: 'pointer',
    color: 'black',
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
    color: 'black',
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
    color: 'black',
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
  <div>
    <h1 className={css(styles.nameText)}> Hi, I'm LaToya.</h1>
    <p className={css(styles.jobText)}>I'm a Front-End Developer based in Brooklyn, NY. I work in JavaScript, React, Redux, and Rails at Daily Kos. </p>
    <p className={css(styles.mainText)}>I started of as a {<BackEnd />} in 2013 (he's my old {<OldBlog />} and {<OldGitHub/>}).  I've been working on the front-end for the past 3 years. I enjoy working on small, impactful teams who care about clean code, utilizing testing frameworks, effective communication, and collaboration. </p>
    <p className={css(styles.mainText)}>If you'd like to know about my work, ask Janet below.</p>
  </div>
)

 export default IntroText;
