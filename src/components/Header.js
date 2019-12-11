import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import LinkedIn from './LinkedIn';
import GitHub from './GitHub';

import {
   TABLET_PORTRAIT,
   TABLET_LANDSCAPE,
   LAPTOPS,
} from '../lib/breakpoints';

const styles = StyleSheet.create({
  navContainer: {
    display: 'flex',
    marginLeft: '50%',
    lineHeight: '1.8',
    color: 'black',
    [TABLET_PORTRAIT]: {
    marginLeft: '80%',
    },
    [TABLET_LANDSCAPE]: {
    },
    [LAPTOPS]: {
    }
  },
  headerItem: {
    marginRight: '10%',
  },
});

const Header = (props) => (
  <div className={css(styles.navContainer)}>
    <p className={css(styles.headerItem)}>Blog</p>
    <p className={css(styles.headerItem)}>{<LinkedIn/>}</p>
    <p className={css(styles.headerItem)}>{<GitHub/>}</p>
  </div>
);

export default Header;
