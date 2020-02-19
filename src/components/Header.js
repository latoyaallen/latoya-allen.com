import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import GitHub from './GitHub';
import ProjectsLink from './ProjectsLink';
import Blog from './Blog';
import LinkedIn from './LinkedIn';

import {
   TABLET_PORTRAIT,
   TABLET_LANDSCAPE,
   LAPTOPS,
} from '../lib/breakpoints';

const styles = StyleSheet.create({
  navContainer: {
    paddingTop: '10px',
    display: 'flex',
    marginLeft: '12%',
    lineHeight: '1.8',
    [TABLET_PORTRAIT]: {
    marginLeft: '30%',
      color: 'pink',
    },
    [TABLET_LANDSCAPE]: {
    marginLeft: '30%',
    color: 'blue',
    },
    [LAPTOPS]: {
    marginLeft: '70%',
    color: 'orange',
    }
  },
  headerItem: {
    marginRight: '5%',
  },
});

const Header = (props) => (
  <div className={css(styles.navContainer)}>
    <p className={css(styles.headerItem)}>{<ProjectsLink/>}</p>
    <p className={css(styles.headerItem)}>{<Blog/>}</p>
    <p className={css(styles.headerItem)}>{<LinkedIn/>}</p>
    <p className={css(styles.headerItem)}>{<GitHub/>}</p>
  </div>
);

export default Header;
