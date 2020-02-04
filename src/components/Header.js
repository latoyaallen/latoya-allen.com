import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import LinkedIn from './LinkedIn';
import GitHub from './GitHub';
import MetCostumes from './MetCostumes';
import Blog from './Blog';

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
      color: 'pink',
    },
    [TABLET_LANDSCAPE]: {
    marginLeft: '30%',
    color: 'blue',
    },
    [LAPTOPS]: {
    marginLeft: '60%',
    color: 'orange',
    }
  },
  headerItem: {
    marginRight: '9%',
  },
});

const Header = (props) => (
  <div className={css(styles.navContainer)}>
    <p className={css(styles.headerItem)}>{<MetCostumes/>}</p>
    <p className={css(styles.headerItem)}>{<Blog/>}</p>
    <p className={css(styles.headerItem)}>{<LinkedIn/>}</p>
    <p className={css(styles.headerItem)}>{<GitHub/>}</p>
  </div>
);

export default Header;
