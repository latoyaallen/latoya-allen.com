import React from 'react';
import './App.css';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  nameText: {
    marginLeft: '12%',
    marginTop: 20,
    marginBottom: 50,
    cursor: 'pointer',
    color: '#483d8b',
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
    marginBottom: 20,
    width: '75%',
    color: '#483d8b',
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
    color: '#483d8b',
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

const currentProject = () => (
  <a
    className={css(styles.links)}
    href=""
    target="_blank"
    rel="noopener noreferrer">
    12 Months, 12 Responsice Apps
  </a>
);

const GitHub = () => (
  <a
    className={css(styles.links)}
    href="https://github.com/latoyaallen"
    target="_blank"
    rel="noopener noreferrer">
    GitHub
  </a>
);

const LinkedIn = () => (
  <a
    className={css(styles.links)}
    href="https://www.linkedin.com/in/latoyaellisallen/"
    target="_blank"
    rel="noopener noreferrer">
    LinkedIn
  </a>
);

const Email = () => (
  <a
    className={css(styles.links)}
    href="mailto:me@allen-labs.com"
    target="_blank"
    rel="noopener noreferrer">
    Email
  </a>
);

function App() {

  return (
    <div>
      <h1 className={css(styles.nameText)}> Hi, I'm LaToya.</h1>
      <h4 className={css(styles.jobText)}>I'm a Front-End Developer based in Brooklyn, NY.</h4>
      <p className={css(styles.mainText)}>Currently, I'm working in JavaScript, React, Redux, and Rails at Daily Kos. The open source project I spend some of my free time on is 12 Months, 12 Responsive Sites. You can find me on {<GitHub />}, {<LinkedIn />} and {<Email />}.</p>
    </div>
  );
}

export default App;
