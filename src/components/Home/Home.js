import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import EmailMe from '../Links/EmailMe';
import DailyKos from '../Links/DailyKos';

const styles = StyleSheet.create({
  Home__container: {
    paddingTop: '10%',
    marginLeft: '12%',
    '@media (min-width: 600px)': {
      marginLeft: '30%',
    },
    '@media (min-width: 780px)': {
      marginLeft: '30%',
    }
  },
  nameText: {
    marginTop: 10,
    marginBottom: 20,
    cursor: 'pointer',
    color: 'white',
    '@media (min-width: 600px)': {
    },
    '@media (min-width: 780px)': {
    }
  },
  Home__text: {
    fontSize: '1.9em',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    width: '75%',
    color: 'grey',
    '@media (min-width: 600px)': {
    },
    '@media (min-width: 780px)': {
    }
  },
});

const Home = () => (
  <div className={css(styles.Home__container)}>
    <h1 className={css(styles.nameText)}> Hi, I'm LaToya.</h1>
    <p className={css(styles.Home__text)}>I'm a front-end developer based in Brooklyn, NY.</p>
    <p className={css(styles.Home__text)}>I work in React, Redux, Rails, Jest, Enzyme and RSpec at {<DailyKos/>}. </p>
    <p className={css(styles.Home__text)}>Want to chat?  {<EmailMe />}.</p>
  </div>
)

 export default Home;
