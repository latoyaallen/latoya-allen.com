import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../../lib/breakpoints';

const styles = StyleSheet.create({
  Title__container: {
    paddingTop: '11%',
    [MOBILE_LANDSCAPE]: {
      color: 'pink',
    },
    [TABLET_PORTRAIT]: {
      color: 'red',
    paddingRight: '3%',
    paddingLeft: '3%',
    },
    [TABLET_LANDSCAPE]: {
      color: 'blue',
    paddingRight: '3%',
    paddingLeft: '3%',
    },
    [LAPTOPS]: {
    paddingRight: '3%',
    paddingLeft: '3%',
    }
  },
  // looks great on all widths EXCEPT MOBILE_LANDSCAPE
  Title__text: {
    fontSize: '11.4em',
    color: 'white',
    textAlign: 'center',
    margin: 0,
    [MOBILE_LANDSCAPE]: {
    fontSize: '6.0em',
      color: 'pink',
    },
    [TABLET_PORTRAIT]: {
    fontSize: '11.4em',
      color: 'red',
    },
    [TABLET_LANDSCAPE]: {
    fontSize: '11.4em',
      color: 'blue',
    },
    [LAPTOPS]: {
    fontSize: '11.4em',
    }
  },
});

const Title = (props) => (
  <div className={css(styles.Title__container)}>
    <p className={css(styles.Title__text)}>{props.title}</p>
  </div>
)

export default Title;
