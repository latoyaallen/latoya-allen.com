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
  RecordingDetails__container: {
    paddingTop: '11%',
    paddingBottom: '11%',
    fontSize: '7.4em',
    color: 'white',
    textAlign: 'center',
    margin: 0,
    [MOBILE_PORTRAIT]: {
      textAlign: 'left',
      paddingTop: '21%',
      paddingBottom: '31%',
      paddingLeft: '5%',
      fontSize: '1.5em',
    },
    [MOBILE_LANDSCAPE]: {
      fontSize: '5.4em',
    },
    [TABLET_PORTRAIT]: {
      fontSize: '7.4em',
    },
    [TABLET_LANDSCAPE]: {
      fontSize: '7.4em',
    },
    [LAPTOPS]: {
      fontSize: '7.4em',
    }
  },
  RecordingDetails__text: {
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

const RecordingDetails__container = {
  paddingTop: '11%',
  paddingBottom: '11%',
  fontSize: '7.4em',
  color: 'white',
  textAlign: 'center',
  margin: 0,
}

const RecordingDetails = (props) => (
  <div className={css(styles.RecordingDetails__container)}>
    <p>{props.location}</p>
    <p>{props.day}</p>
    <p>{props.year}</p>
  </div>
)

export default RecordingDetails;
