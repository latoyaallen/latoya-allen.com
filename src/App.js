import React from 'react';
import './App.css';
import { StyleSheet, css } from 'aphrodite';
import Chat from './components/Chat';
import {
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from './lib/breakpoints';


const styles = StyleSheet.create({
  nameText: {
    marginLeft: '12%',
    marginTop: 20,
    marginBottom: 50,
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
    marginBottom: 20,
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

const Blog = () => (
  <a
    className={css(styles.links)}
    href="https://latoyaallen.blog"
    target="_blank"
    rel="noopener noreferrer">
    blog
  </a>
);

const CurrentProject = () => (
  <a
    className={css(styles.links)}
    href="https://latoyaallen.blog/2019/11/16/5-weeks-5-responsive-sites/"
    target="_blank"
    rel="noopener noreferrer">
    5 Weeks, 5 Responsive Sites
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
      <p className={css(styles.jobText)}>I'm a Front-End Developer based in Brooklyn, NY.</p>
      <p className={css(styles.mainText)}>I work in JavaScript, React, Redux, and Rails at Daily Kos. I started of as a back-end developer in 2013, but curiosity led me to the front-end three years ago. I enjoy working on small, impactful teams who care about clean code, utilizing testing frameworks, effective communication, and collaboration.</p>
      <p className={css(styles.mainText)}>If you'd like to know about my work, ask Janet below.</p>
      <div className={css(styles.botContainer)}>
        <Chat />
      </div>
      <p className={css(styles.mainText)}> I enjoy contributing to open source projects, and I occasionally blog.  Right now, I'm working on {<CurrentProject />}.</p>
      <p className={css(styles.mainText)}>My goal is to impact, educate, and inspire folks who want to get into tech. If you have any questions about working in the tech industry, you can find me on {<GitHub />} or {<LinkedIn />}.</p>
    </div>
  );
}

export default App;
