import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import LinkedIn from './LinkedIn';
import GitHub from './GitHub';
import CodeForThisSite from './CodeForThisSite';

import {
   TABLET_PORTRAIT,
   TABLET_LANDSCAPE,
   LAPTOPS,
} from '../lib/breakpoints';

const styles = StyleSheet.create({
  navContainer: {
    display: 'flex',
    marginLeft: '12%',
    lineHeight: '1.8',
    [TABLET_PORTRAIT]: {
    marginLeft: '30%',
    },
    [TABLET_LANDSCAPE]: {
    marginLeft: '30%',
    },
    [LAPTOPS]: {
    marginLeft: '75%',
    }
  },
  headerItem: {
    marginRight: '9%',
  },
});

const Header = (props) => (
  <div className={css(styles.navContainer)}>
    <p className={css(styles.headerItem)}>{<CodeForThisSite/>}</p>
    <p className={css(styles.headerItem)}>{<LinkedIn/>}</p>
    <p className={css(styles.headerItem)}>{<GitHub/>}</p>
  </div>
);

export default Header;
