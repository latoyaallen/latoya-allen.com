import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import {
  MOBILE_PORTRAIT,
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../../lib/breakpoints';

const styles = StyleSheet.create({
  Categories__text: {
    cursor: 'pointer',
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

const Categories = (props) => (
  <div>
    <p className={css(styles.Categories__text)} onClick={props.handleCategory}>Jazz</p>
    <p className={css(styles.Categories__text)} onClick={props.handleCategory}>Soul</p>
    <p className={css(styles.Categories__text)} onClick={props.handleCategory}>Funk</p>
    <p className={css(styles.Categories__text)} onClick={props.handleCategory}>Rock</p>
    <p className={css(styles.Categories__text)} onClick={props.handleCategory}>R&B</p>
    <p className={css(styles.Categories__text)} onClick={props.handleCategory}>Hip Hop</p>
    <p className={css(styles.Categories__text)} onClick={props.handleCategory}>Classical</p>
  </div>
);

export default Categories;
