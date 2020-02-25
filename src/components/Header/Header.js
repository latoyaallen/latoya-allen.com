import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ProjectsLink from '../Links/ProjectsLink';
import LinkedIn from '../Links/LinkedIn';
import GitHub from '../Links/GitHub';

import {
  MOBILE_PORTRAIT,
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../../lib/breakpoints';

const styles = StyleSheet.create({
  Header__container: {
    paddingTop: '10px',
    display: 'flex',
    marginLeft: '12%',
    lineHeight: '1.8',
    [MOBILE_PORTRAIT]: {
    },
    [MOBILE_LANDSCAPE]: {
    marginLeft: '12%',
    },
    [TABLET_PORTRAIT]: {
      marginLeft: '30%',
    },
    [TABLET_LANDSCAPE]: {
      marginLeft: '30%',
    },
    [LAPTOPS]: {
      marginLeft: '70%',
    }
  },
  Header__item: {
    marginRight: '5%',
    [MOBILE_PORTRAIT]: {
    },
    [MOBILE_LANDSCAPE]: {
    },
    [TABLET_PORTRAIT]: {
    },
    [TABLET_LANDSCAPE]: {
    },
    [LAPTOPS]: {
    }
  },
});

const Header = (props) => (
  <div className={css(styles.Header__container)}>
    <p className={css(styles.Header__item)}>{<ProjectsLink/>}</p>
    <p className={css(styles.Header__item)}>{<LinkedIn/>}</p>
    <p className={css(styles.Header__item)}>{<GitHub/>}</p>
  </div>
);

export default Header;
